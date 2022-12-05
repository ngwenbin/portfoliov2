import Image from "next/image";
import profilePic from "@/common/images/profile.jpg";

export default function Home() {
  return (
    <div className="p-2 flex flex-col items-center text-gray-800 h-full min-h-full pt-14 px-4 gap-y-12 justify-between">
      <div className="flex flex-col w-full items-center gap-y-4 flex-[1] justify-center">
        <Image src={profilePic} className="rounded-full w-40 h-auto" alt="Me" />
        <h1 className="text-4xl font-bold pt-6">Ng Wen Bin</h1>
        <h2 className="text-xl text-center max-w-md">
          A Frontend Engineer who loves to build things and solve tough problems
        </h2>
      </div>
      <div className="max-w-md text-center flex-[2]">
        <p className="pb-4 text-lg font-semibold">
          Hi, I’m Wen Bin. Nice to meet you.
        </p>
        Since beginning my first foray into engineering some 7 years ago, I've
        dabbled in various fields of engineering - Mechanical, Aerospace, IoT,
        with software being my favorite. I appreciate the endless possibilities
        of what one can achieve with a simple laptop. I'm naturally curious,
        unforgivably determined, and perpetually working on trying to
        over-engineer something.
      </div>
      <div className="text-sm p-8 font-light">Built with Next.js</div>
    </div>
  );
}
