import Head from "next/head";
import React from "react";

interface GoalItem {
  description: string;
}

const inProgressGoals: Array<string> = [
  "Launch an app in appstore",
  "Publish a Table component on npm",
  "Work at Google as a software engineer",
  "Become a tech lead by 30",
  "Attend React Conf live",
  "Find a partner",
];

const doneGoals: Array<string> = [
  "Land a software engineer job (Jul 2022)",
  "Launch a real world application for social good (Recyclables, Oct 2019)",
  "Launch a startup (ProducTinker, 2018 - Failed)",
];

const Goals = () => {
  return (
    <div className="max-w-3xl mx-auto pt-8 px-4 pb-20">
      <Head>
        <title>Goals | Wen Bin</title>
      </Head>
      <h1>Goals</h1>
      <div className="flex flex-col space-y-8">
        <div className="my-12">
          <h2 className="mb-4">In progress</h2>
          <ol className="list-disc list-inside font-light space-y-1">
            {inProgressGoals.map((item, key) => {
              return <li key={key}>{item}</li>;
            })}
          </ol>
        </div>

        <div className="my-12">
          <h2 className="mb-4">Done</h2>
          <ol className="list-disc list-inside font-light space-y-1">
            {doneGoals.map((item, key) => {
              return <li key={key}>{item}</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Goals;
