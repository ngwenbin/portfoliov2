import Image from "next/image";
import profilePic from "@/common/images/profile.jpg";
import IconsShowCase from "@/components/IconShowCase";
import {
  languageIcon,
  technologiesIcon,
} from "@/components/IconShowCase/importHelper";

export default function Home() {
  return (
    <div className="p-2 flex flex-col items-center text-gray-800 h-full min-h-full px-4 gap-y-12 justify-between">
      <div className="flex flex-col w-full items-center gap-y-4 flex-[2] justify-center">
        <Image src={profilePic} className="rounded-full w-40 h-auto" alt="Me" />
        <h1 className="text-4xl font-bold pt-6">Ng Wen Bin</h1>
        <h2 className="text-xl text-center max-w-md">
          A Frontend Engineer who loves to build things and solve tough problems
        </h2>
      </div>
      <div className="md:max-w-xl max-w-md text-center flex-[2]">
        <p className="pb-4 text-lg font-semibold">
          Hi, I’m Wen Bin. Nice to meet you.
        </p>
        Since beginning my first foray into engineering some 7 years ago,
        I&apos;ve dabbled in various fields of engineering - Mechanical,
        Aerospace, IoT, with software being my favorite. I appreciate the
        endless possibilities of what one can achieve with a simple laptop.
        I&apos;m naturally curious, unforgivably determined, and perpetually
        working on trying to over-engineer something.
        <button className="rounded-md bg-gray-200 py-2 px-4 mt-8">
          Say Hello
        </button>
      </div>
      <div className="flex gap-x-2 flex-col md:flex-row items-center md:items-start gap-y-6 flex-[1]">
        <IconsShowCase icons={languageIcon} label="Languages" />
        <IconsShowCase icons={technologiesIcon} label="Technologies" />
      </div>
      <div className="text-sm p-8 font-light">Built with Next.js</div>
    </div>
  );
}
