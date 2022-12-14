import { HomePageNavBarLinks } from "@/common/constants/global";
import React from "react";
import Navbar from "../Navbar";
import { NextFont } from "@next/font/dist/types";

interface LayoutProps {
  children: JSX.Element;
  fonts?: NextFont;
}

const Layout = ({ children, fonts }: LayoutProps) => {
  return (
    <>
      <Navbar tabLinksArray={HomePageNavBarLinks} fonts={fonts} />
      <main className={`${fonts?.className} font-inter h-full pt-14`}>
        {children}
      </main>
    </>
  );
};

export default Layout;
