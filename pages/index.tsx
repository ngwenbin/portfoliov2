import Image from "next/image";
import profilePic from "@/common/images/profile.jpg";
import IconsShowCase from "@/components/IconShowCase";
import MagicButton from "@/components/MagicButton";
import {
  languageIcon,
  technologiesIcon,
} from "@/components/IconShowCase/importHelper";
import Head from "next/head";
import Toggle from "@/common/components/Toggle";
import { useState } from "react";

const onClickHandler = () => {
  window.alert("Hello");
};

export default function Home() {
  return (
    <>
      <div className="p-2 grid grid-cols-1 items-center h-fit px-4 gap-y-12 justify-center">
        <Head>
          <title>Frontend Engineer | Wen Bin</title>
        </Head>
        <div className="flex flex-col w-full items-center flex-[2] justify-center">
          <Image
            src={profilePic}
            className="rounded-full w-40 h-auto mb-4"
            alt="Me"
            placeholder="blur"
          />
          <h1 className="text-4xl font-bold pt-6 mb-4">Ng Wen Bin</h1>
          <h2 className="text-xl text-center max-w-md">
            A Frontend Engineer who loves to build things and solve tough
            problems
          </h2>
        </div>

        <div className="md:max-w-lg max-w-md text-center justify-self-center">
          <p className="pb-4 text-lg font-semibold">
            Hi, I’m Wen Bin. Nice to meet you.
          </p>
          Since beginning my first foray into engineering some 7 years ago,
          I&apos;ve dabbled in various fields of engineering - Mechanical,
          Aerospace, IoT, with software being my favourite.
          <br />I marvel at the endless possibilities of what one can achieve
          with just a simple laptop. I&apos;m naturally curious, unforgivably
          determined, and perpetually working on trying to over-engineer
          something.
        </div>
        <div className="w-full justify-center flex flex-col md:flex-row items-center md:items-start">
          <IconsShowCase
            icons={languageIcon}
            label="Languages"
            className="mb-6 md:mb-0 mx-1"
          />
          <IconsShowCase
            icons={technologiesIcon}
            label="Technologies"
            className="mx-1"
          />
        </div>
      </div>
      <div className="text-[10px] font-light text-center pt-8">
        Handmade artisan code, built with Next.js
      </div>
    </>
  );
}
