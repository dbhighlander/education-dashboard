import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <header className='flex items-center justify-between p-4'>
      {/* SEARCH BAR*/}
      <nav className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2' aria-label="Search">
        <Image src='/search.png' alt='' width={14} height={14}/>
        <input type='text' placeholder='Search...' className="w-[200px] p-2 bg-transparent outline-none" />
      </nav>
      {/* ICONS AND USER*/}
      <nav className='flex items-center gap-6 justify-end w-full' aria-label="User navigation">
        <button className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image src='/message.png' alt="" width={20} height={20} />
        </button>
        <button className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
          <Image src='/announcement.png' alt="" width={20} height={20} />
          <div className='absolute w-5 h-5 -top-3 -right-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>1</div>
        </button>
        <div className='flex flex-col'>
          <span className='text-xs leading-3 font-medium'>John Doe</span>
          <span className='text-[10px] text-gray-500 text-right' >Admin</span>
        </div>
        <Image src="/avatar.png" alt="" width={36} height={36} className='rounded-full' />
      </nav>
    </header>
  )
}
