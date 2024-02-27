import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobileMenu from "./MobileMenu";
import Logo from "../public/ric_logo.png";

function Header() {
  // Track how many items in cart
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-white p-4 h-[80px] md:h-[100px]">
      {/* Logo */}
      <div className=" flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-[60px] md:h-[70px]  w-20 md:w-24 cursor-pointer opacity-100 transition hover:opacity-75">
            <Image src={Logo} alt="" layout="fill" objectFit="contain" />
          </div>
        </Link>
      </div>

      {/* Cateogries */}
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <Link href="/products/all" className="headerLink">
          Products
        </Link>
        <Link href="/about" className="headerLink">
          About
        </Link>
        <Link href="/contact" className="headerLink">
          Contact
        </Link>
        <Link href="/faq" className="headerLink">
          FAQ
        </Link>
      </div>

      {/* Right side Icons */}
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <div>
          <Bars3Icon
            className="headerIcon md:hidden"
            onClick={() => setOpen(true)}
          />
          {open && <MobileMenu close={() => setOpen(false)} />}
        </div>
      </div>
    </header>
  );
}

export default Header;

const defaultImage =
  "https://i.pinimg.com/originals/d7/14/54/d714540f9b3fc4127d14f00e3a084e36.png";
