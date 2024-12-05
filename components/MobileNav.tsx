'use client';

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'Play Ground',
    path: '/Play_Ground',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'contact',
    path: '/contact',
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State to track the sheet's open/close status

  const handleLinkClick = () => {
    setIsOpen(false); // Close the sheet when a link is clicked
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}> {/* Pass state to Sheet component */}
    
 
      <SheetTrigger asChild className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      
      <SheetContent className="w-[200px] sm:w-[240px] flex flex-col transition-all ease-in-out duration-300">
        {/* Logo or additional content */}
        {/* <div className="mt-32 mb-40 text-center text-2xl"> */}
          {/* You can add a logo or anything you like here */}
          {/* Example: <img src="/logo.png" alt="Logo" className="w-24 mx-auto" /> */}
        {/* </div> */}

        {/* Navigation Links */}
        <nav className="flex flex-col justify-center place-items-start gap-5">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname ? "text-accent border-b-2 border-accent" : ""
              } text-xl capitalize hover:text-accent transition-all`}
              onClick={handleLinkClick} // Close sheet on link click
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>
           
           
          </SheetDescription>
        </SheetHeader>
       
        <SheetFooter>
          <SheetClose asChild>
       
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
