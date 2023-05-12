import { LinkIcon, DownloadIcon } from "@/common/images";
import {
  Achievement,
  ProfessionalExperienceType,
  Project,
} from "@/common/types/resume";
import Head from "next/head";
import React from "react";

const professionalExperienceContent: Array<ProfessionalExperienceType> = [
  {
    title: "Frontend Software Engineer",
    company: "Trustana",
    duration: "Dec 2022 - Present",
    country: "Singapore",
    description:
      "Responsible for the architect and implementation of multiple core features, API interfaces, \
      leveraging on various design patterns and web rendering patterns. \
      Led development efforts in building a web analytics pipeline using Segment and device \
      fingerprinting.",
  },
  {
    title: "Software Engineering Intern",
    company: "Trustana",
    duration: "May 2022 - Nov 2022",
    country: "Singapore",
    description:
      "Developed several major features for a B2B e-commerce SaaS product using Remix, GraphQL and Typescript.\
      Redesigned and implemented web analytics tracking architecture which improved capture metrics and data quality.",
  },
  {
    title: "Embedded Software Engineering Intern (Remote)",
    company: "Aerofoils GmbH",
    duration: "Jan 2021 - Jul 2021",
    country: "Munich, Germany",
    description:
      "Led development efforts in areas such as shared components, navigation framework and interactivity mechanisms for a GUI\
      for an e-hydrofoil surfboard remote controller based on ESP32 running FreeRTOS using C and the LVGL library in ESP-IDF.",
  },
  {
    title: "Software Engineering Intern",
    company: "B1G1 Pte. Ltd",
    duration: "May 2020 - Jul 2020",
    country: "Singapore",
    description:
      "Integrated Mixpanel, Google Analytics, Segment and ActiveCampaign into company’s\
      website and generated custom user behavior reports for internal stakeholders.",
  },
];

const notableProjects: Array<Project> = [
  {
    title: "Recyclables",
    url: "https://recyclables.netlify.app/",
    description:
      "Co-founder and developer of Recyclables, a social initiative that enables residents to hail \
    for a rag and bone man via a Telegram Bot, providing increased recycling convenience. Collected over 4.2 tons of recyclables\
    with over 780 registered users within 1.5 years of operation all under an annual operating cost of $50.",
  },
  {
    title: "B1G1 Giving Impact Map",
    url: "https://b1g1-impact-map.netlify.app/",
    description:
      "Designed and developed an interactive map with React.js, deck.gl, Aloglia search and\
    internal APIs to provide giving impact data visualization for stakeholders.",
  },
];

const achievements: Array<Achievement> = [
  {
    year: 2022,
    achievements: [
      "Citi HackOverflow 2022 (Participation)",
      "Singapore Airlines (SIA) AppChallenge 2022 (Participation)",
    ],
  },
  {
    year: 2021,
    achievements: [
      "Shopee Ultra-Hackathon (Participation)",
      "NUS NES Ground Zero 2021 (Participation)",
    ],
  },
  {
    year: 2020,
    achievements: [
      "Singapore Airlines (SIA) AppChallenge 2020 (2nd Place)",
      "NUS NES Ground Zero 2020 (Participation)",
    ],
  },
];

const Resume = () => {
  return (
    <div className="max-w-3xl mx-auto pt-8 px-4">
      <Head>
        <title>Resume | Wen Bin</title>
      </Head>
      <div className="flex items-center">
        <h1 className="mr-3">Resume</h1>
        <a
          href="/resume.pdf"
          download="ngwenbin_resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <DownloadIcon className="w-5 h-5" />
        </a>
      </div>
      <div className="flex pt-4 items-center">
        <a
          href="https://github.com/ngwenbin"
          className="text-orange-500 hover:text-cyan-600 mr-3"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          href="https://sg.linkedin.com/in/ngwenbin"
          className="text-orange-500 hover:text-cyan-600"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </div>
      <div className="my-12">
        <h2>Professional Experience</h2>
        <ol className="flex flex-col space-y-8 mt-4">
          {professionalExperienceContent.map((item, key) => {
            return (
              <li
                key={key}
                className="flex flex-col items-start space-y-2 font-light"
              >
                <p className="text-xl font-bold">
                  {item.title}, {item.company}
                </p>
                <div>
                  <p className="italic">{item.duration}</p>
                  <p className="italic">{item.country}</p>
                </div>

                <p>{item.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
      <div className="my-12">
        <h2>Notable Projects</h2>
        <ol className="flex flex-col space-y-8 mt-4">
          {notableProjects.map((item, key) => {
            return (
              <li
                key={key}
                className="flex flex-col items-start space-y-2 font-light"
              >
                <div className="flex items-center">
                  <p className="text-lg font-bold mr-1">{item.title}</p>
                  {item.url && (
                    <a href={item.url} target="_blank" rel="noreferrer">
                      <LinkIcon className="w-4 h-4 hover:text-cyan-600 text-orange-500" />
                    </a>
                  )}
                </div>

                <p>{item.description}</p>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="my-12">
        <h2>Education</h2>
        <ol className="flex flex-col space-y-8 mt-4">
          <li className="flex flex-col items-start space-y-2 font-light">
            <p className="text-lg font-bold">
              National University of Singapore
            </p>
            <ol className="list-disc list-inside space-y-1">
              <li>Aug 2019 - Dec 2022</li>
              <li>B. Eng, Mechanical Engineering</li>
              <li>Second Upper Honours - GPA: 4.42 / 5.0</li>
            </ol>
          </li>
          <li className="flex flex-col items-start space-y-2 font-light">
            <p className="text-lg font-bold">
              Technical University of Munich, TUM
            </p>
            <ol className="list-disc list-inside space-y-1">
              <li>Jan 2020 - Jul 2020</li>
              <li>
                Part of the prestigious NUS Overseas College (NOC)
                entrepreneurship program
              </li>
            </ol>
          </li>
        </ol>
      </div>

      <div className="my-12 pb-32">
        <h2>Achievements</h2>
        {achievements
          .sort((a, b) => (a["year"] < b["year"] ? 1 : -1))
          .map((item, key) => {
            return (
              <div key={`year_${key}`}>
                <p className="text-xl font-semibold py-6">{item.year}</p>
                {item.achievements.map((filteredItem, key) => {
                  return (
                    <ul
                      className="list-disc list-inside"
                      key={`achieve_${key}`}
                    >
                      <li>{filteredItem}</li>
                    </ul>
                  );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Resume;
