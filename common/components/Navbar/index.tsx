import React from "react";
import Link from "next/link";
import { Navlink } from "@/types/navbar";
import { NextFont } from "@next/font/dist/types";
import clsx from "clsx";
interface NavbarProps {
  tabLinksArray: Array<Navlink>;
  fonts?: NextFont;
}

const Navbar = ({ tabLinksArray, fonts }: NavbarProps) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-x-3 border-b border-gray-400",
        `${fonts?.className} font-inter`
      )}
    >
      {tabLinksArray.map((tabLink, key) => (
        <Link key={key} href={tabLink.url} className="p-2">
          {tabLink.title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
