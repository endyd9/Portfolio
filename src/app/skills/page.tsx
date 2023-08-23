"use client";

import { useState } from "react";
import ShowSkills from "@/components/showSkills";

export default function Skills() {
  const [selector, setSelector] = useState<string>("L");

  const onSelectorClick = (event: any) => {
    const choice: string = event.target.innerText[0];
    setSelector(choice);
  };

  return (
    <main className="mt-[18%] h-screen animate-[intro_1s]">
      <div className="h-full">
        <h1 className="ml-5 pt-5 pb-3 text-4xl font-bold">Skills</h1>
        <section className="relative">
          <div
            className={
              selector === "L"
                ? "absolute h-10 w-36 bg-gradient-to-r from-gray-400 to-white rounded-r-3xl -z-10"
                : selector === "F"
                ? "absolute left-[8.5rem] h-10 w-48 bg-gradient-to-r from-white via-gray-300 to-white rounded-l-full rounded-r-full -z-10"
                : selector === "T"
                ? "absolute left-80 h-10 w-32 bg-gradient-to-l from-gray-400 to-white rounded-l-3xl -z-10"
                : undefined
            }
          ></div>
          <nav
            className="mx-5 flex justify-between items-center"
            onClick={onSelectorClick}
          >
            <button className="text-xl font-mono">Language</button>
            <button className="text-xl font-mono">FrameWorks&DB</button>
            <button className="text-xl font-mono">Tryed</button>
          </nav>
          <ShowSkills case={selector} />
        </section>
      </div>
    </main>
  );
}
