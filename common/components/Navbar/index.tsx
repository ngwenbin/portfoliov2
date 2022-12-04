import React from "react";
import Link from "next/link";
import { Navlink } from "@/types/navbar";

interface NavbarProps {
  tabLinksArray: Array<Navlink>;
}

const Navbar = ({ tabLinksArray }: NavbarProps) => {
  return (
    <div className="flex items-center gap-x-3 border-b border-gray-400">
      {tabLinksArray.map((tabLink, key) => (
        <Link key={key} href={tabLink.url} className="">
          {tabLink.title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
