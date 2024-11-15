"use client"
import React, { useState } from 'react'
import Sheet from '../components/ui/Sheet';
import { MdOutlineMenu } from "react-icons/md";
import links from "../data/links"
import Link from 'next/link';

const MobileNav = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const toggleSheet = () => setIsSheetOpen(!isSheetOpen);

    return (
        <div>
             <button onClick={toggleSheet} className="text-white-500 focus:outline-none">
                <MdOutlineMenu size={24} />
            </button>
            <Sheet isOpen={isSheetOpen} onClose={toggleSheet}>
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className='hover:text-teal-500 hover:underline transition-all'>
                        {link.name}
                    </Link>
                )
            })}
            </Sheet>
        </div>
  )
}

export default MobileNav