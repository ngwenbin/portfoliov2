import React, { useState } from "react";
import Link from "next/link";
import { Navlink } from "@/types/navbar";
import { NextFont } from "@next/font/dist/types";
import clsx from "clsx";
import { useRouter } from "next/router";
import { ThreeBars } from "@/common/images";
interface NavbarProps {
  tabLinksArray: Array<Navlink>;
  fonts?: NextFont;
}

const Navbar = ({ tabLinksArray, fonts }: NavbarProps) => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <div
        className={clsx(
          "items-center gap-x-3 pt-1 absolute px-8 md:flex hidden",
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
      <div
        className={clsx(
          "md:hidden absolute w-full h-screen ",
          showMenu ? "backdrop-blur-[6px] bg-gray-600/30" : ""
        )}
        onClick={() => console.log("ok")}
      >
        <button
          className="p-4 bg-white relative"
          onClick={() => setShowMenu((curr) => !curr)}
        >
          <ThreeBars className="w-6 h-6 text-black" />
        </button>
        {showMenu ? (
          <div className="flex flex-col w-2/3 bg-white relative ">
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
                onClick={() => setShowMenu((curr) => !curr)}
                className={clsx("py-3 px-5 border-b border border-gray-50", {
                  "font-bold": key === 0,
                })}
              >
                {tabLink.title}
              </Link>
            ))}
          </div>
        ) : null}
        <div
          className="relative h-screen w-full z-10"
          onClick={() => setShowMenu((curr) => !curr)}
        />
      </div>
    </>
  );
};

export default Navbar;
