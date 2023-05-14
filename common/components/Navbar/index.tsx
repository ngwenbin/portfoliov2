import React, { useState } from "react";
import Link from "next/link";
import { Navlink } from "@/types/navbar";
import { NextFont } from "@next/font/dist/types";
import clsx from "clsx";
import { useRouter } from "next/router";
import { ThreeBars } from "@/common/images";
import Toggle from "../Toggle";
import { useTheme } from "next-themes";
interface NavbarProps {
  tabLinksArray: Array<Navlink>;
  fonts?: NextFont;
}

const Navbar = ({ tabLinksArray, fonts }: NavbarProps) => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (state: boolean) => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <div className="absolute top-0 md:right-0 left-0 md:left-auto h-20 flex items-center px-4">
        <Toggle
          id="theme"
          isToggled={theme === "dark"}
          onToggle={handleThemeChange}
        />
      </div>
      <div
        className={clsx(
          "items-center gap-x-3 absolute px-8 md:grid grid-flow-col hidden h-20",
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
                  : "unset",
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
          "md:hidden absolute w-full h-fit z-10",
          showMenu
            ? "backdrop-blur-[6px] bg-[#E6E8EB]/30 dark:bg-[#2B2F31]/30 h-screen"
            : ""
        )}
        onClick={() => console.log("ok")}
      >
        <button
          className="p-5 absolute right-0 z-10"
          onClick={() => setShowMenu((curr) => !curr)}
        >
          <ThreeBars className="w-7 h-7" />
        </button>
        {showMenu ? (
          <div className="flex flex-col max-w-xs text-right absolute right-0 top-[68px] z-10 rounded-l-[4px]">
            {tabLinksArray.map((tabLink, key) => (
              <Link
                key={key}
                href={tabLink.url}
                style={{
                  color:
                    router.asPath === tabLink.url && key !== 0
                      ? "#06b6d4"
                      : "unset",
                }}
                onClick={() => setShowMenu((curr) => !curr)}
                className={clsx(
                  "py-3 pl-24 pr-4 !text-[#1A1D1E] dark:!text-[#F8F9FA]",
                  {
                    "font-bold": key === 0,
                  }
                )}
              >
                {tabLink.title}
              </Link>
            ))}
          </div>
        ) : null}
        <div
          className={clsx(
            "relative h-screen w-full -z-10",
            !showMenu && "hidden"
          )}
          onClick={() => setShowMenu((curr) => !curr)}
        />
      </div>
    </>
  );
};

export default Navbar;
