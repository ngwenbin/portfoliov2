import React from "react";
import Link from "next/link";
import { Navlink } from "@/types/navbar";
import { NextFont } from "@next/font/dist/types";

import clsx from "clsx";
import { useRouter } from "next/router";
interface NavbarProps {
  tabLinksArray: Array<Navlink>;
  fonts?: NextFont;
}

const Navbar = ({ tabLinksArray, fonts }: NavbarProps) => {
  const router = useRouter();
  return (
    <div
      className={clsx(
        "flex items-center gap-x-3 pt-1 absolute px-8",
        `${fonts?.className} font-inter`
      )}
    >
      {tabLinksArray.map((tabLink, key) => (
        <Link
          key={key}
          href={tabLink.url}
          style={{
            color:
              router.asPath === tabLink.url && key !== 0
                ? "#06b6d4"
                : "#1f2937",
          }}
          className={clsx(
            "py-3 px-4 rounded-md hover:!text-cyan-500 duration-300 ease-in-out",
            {
              "font-bold": key === 0,
              "transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[rgba(6,182,212,0.3)_3px_3px,_rgba(6,182,212,0.2)_6px_6px,_rgba(6,182,212,0.1)_9px_9px,_rgba(6,182,212,0.1)_0px_0px_3px_2px]":
                key !== 0,
            }
          )}
        >
          {tabLink.title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
