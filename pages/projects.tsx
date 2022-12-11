import { EnrichedProject } from "@/common/types/resume";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { allIcon } from "@/common/components/IconShowCase/importHelper";
import IconsShowCase from "@/common/components/IconShowCase";
import ImpactProjectImage from "public/assets/impactProject.jpg";
import RecyclablesProjectImage from "public/assets/recyclablesProject.jpg";
import MusialSortProjectImage from "public/assets/musicalSort.jpg";

const sideProjects: Array<EnrichedProject> = [
  {
    title: "Musical sort",
    description:
      "Web app that sorts an array of numbers and provides visual and audio feedback per sorting step. \
      Designed the architecture of both the sorting mechanism and user interface to be completely decoupled.",
    url: "https://musical-sort.netlify.app",
    image: MusialSortProjectImage,
    ghUrl: "https://github.com/ngwenbin/Musical-sort",
    technologies: ["ReactJS", "TailwindCSS"],
  },
  {
    title: "Recyclables",
    description:
      "Spearheaded a social initiative and led a team of students to build a Telegram bot that enables Singapore \
    residents to hail for a rag and bone man. Collected 4.2 tons of recyclables with over 780 users. \
    Responsible for developing the Telegram bot using python and Firebase, and implemented a geofence-based \
    user registration system to enable ease of region expansion",
    url: "https://recyclables.netlify.app/",
    image: RecyclablesProjectImage,
    ghUrl: "https://github.com/ngwenbin/RecyclablesBot",
    technologies: [
      "Python",
      "ReactJS",
      "Firebase",
      "NoSQL (Cloud Firestore)",
      "Rest",
    ],
  },
  {
    title: "Impact giving map",
    description:
      "Designed and developed an interactive map with React.js, deck.gl, Aloglia search and internal APIs to provide \
    giving impact data visualization for stakeholders.",
    url: "https://b1g1-impact-map.netlify.app/",
    image: ImpactProjectImage,
    ghUrl: "https://github.com/ngwenbin/B1G1-impact-giving-map",
    technologies: ["ReactJS", "Deck.gl", "Rest", "Aloglia Search"],
  },
];

const Projects = () => {
  return (
    <div className="max-w-3xl mx-auto pt-8 px-4">
      <Head>
        <title>Projects | Wen Bin</title>
      </Head>
      <h1>Projects</h1>
      <div className="my-12 pb-32">
        <ol className="flex flex-col space-y-24 mt-4">
          {sideProjects.map((item, key) => {
            return (
              <li
                key={key}
                className="flex flex-col items-start space-y-2 font-light"
              >
                <p className="text-lg font-bold">{item.title}</p>
                <div className="flex gap-x-2">
                  {item.url && (
                    <Link
                      href={item.url}
                      target="_blank"
                      className="text-orange-500"
                    >
                      Demo
                    </Link>
                  )}
                  <Link
                    href={item.ghUrl}
                    target="_blank"
                    className="text-orange-500"
                  >
                    Github
                  </Link>
                </div>
                <div className="mx-auto py-8">
                  <Image
                    src={item.image}
                    alt=""
                    className="max-w-xs md:max-w-md h-auto rounded-md"
                    placeholder="blur"
                  />
                </div>

                <p>{item.description}</p>
                <div className="flex pt-4">
                  {
                    <IconsShowCase
                      iconClassName="!max-w-none !justify-start"
                      icons={item.technologies.map((tech) => {
                        const icon = allIcon.find(
                          (iconType) => iconType.name === tech
                        );
                        return (
                          icon ?? {
                            icon: undefined,
                            name: tech,
                          }
                        );
                      })}
                    />
                  }
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Projects;
