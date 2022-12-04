import { HomePageNavBarLinks } from "@/common/constants/global";
import React from "react";
import Navbar from "../Navbar";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Navbar tabLinksArray={HomePageNavBarLinks} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
