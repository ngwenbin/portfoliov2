import LinkIcon from "@/common/images/LinkIcon";
import Link from "next/link";
import React from "react";

interface ProfessionalExperienceType {
  title: string;
  company: string;
  duration: string;
  country: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  url?: string;
}

interface Achievement {
  year: number;
  achievements: Array<string>;
}

const professionalExperienceContent: Array<ProfessionalExperienceType> = [
  {
    title: "Frontend Software Engineer",
    company: "Trustana",
    duration: "Dec 2022 - Present",
    country: "Singapore",
    description:
      "Building frontend features and components to support next generation B2B e-commerce SaaS products.",
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
    achievements: ["Shopee Ultra-Hackathon (Participation)"],
  },
  {
    year: 2020,
    achievements: ["Singapore Airlines (SIA) AppChallenge 2020 (2nd Place)"],
  },
];

const Resume = () => {
  return (
    <div className="max-w-3xl mx-auto pt-8 px-4">
      <h1>Resume</h1>
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
                <div className="flex items-center gap-x-1">
                  <p className="text-lg font-bold">{item.title}</p>
                  {item.url && (
                    <Link href={item.url}>
                      <LinkIcon className="w-4 h-4 hover:text-cyan-600 text-orange-500" />
                    </Link>
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
              <li>Second Upper Honours - CAP: 4.44 / 5.0</li>
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
                entreprenurship program
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
