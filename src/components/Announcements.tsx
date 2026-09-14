import React from "react";

export default function Announcements() {
  return (
    <aside className="bg-white p-4 rounded-md" aria-labelledby="announcements-heading">
      <div className="flex items-center justify-between">
        <h2 id="announcements-heading" className="text-xl font-semibold">Announcements</h2>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Lorem ipsum dolor sit</h3>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>

          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
            laboriosam ipsa libero nam neque, quasi aut delectus voluptas dicta
            1
          </p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Lorem ipsum dolor sit</h3>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
            laboriosam ipsa libero nam neque, quasi aut delectus voluptas dicta
            1
          </p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Lorem ipsum dolor sit</h3>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
            laboriosam ipsa libero nam neque, quasi aut delectus voluptas dicta
            1
          </p>
        </div>
      </div>
    </aside>
  );
}
