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
      <main
        className={`${fonts?.className} font-inter absolute left-0 right-0 mt-20`}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
