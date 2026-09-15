"use client";
import Image from "next/image";
import React, { useState } from "react";
import { menuItems } from "../Menu";
import { useDebounce } from "@/hooks";

export default function ComboboxSearch() {
  const [search, updateSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const debouncedSearch = useDebounce(search, 200);

  const searchItems = debouncedSearch
    ? menuItems[0].items
        .filter((item) =>
          item.label.toLowerCase().includes(debouncedSearch.toLowerCase()),
        )
        .slice(0, 5)
    : [];

  return (
    <>
      <nav
        className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 relative"
        aria-label="Search"
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setIsSearchOpen(false);
          }
        }}
      >
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          value={search}
          className="w-[200px] p-2 bg-transparent outline-none"
          onChange={(e) => updateSearch(e.target.value)}
          onFocus={() => setIsSearchOpen(true)}
        />
        <ul className="absolute top-[2rem] w-[95%] bg-[#FFF]  rounded">
          {isSearchOpen &&
            searchItems &&
            searchItems.map((item) => (
              <li key={item.href} className="hover:bg-[#c3ebfa]">
                <a
                  href={item.href}
                  target="_blank"
                  className="pl-8 py-3 block w-[100%] h-[100%]"
                >
                  {item.label}
                </a>
              </li>
            ))}
        </ul>
      </nav>
    </>
  );
}
