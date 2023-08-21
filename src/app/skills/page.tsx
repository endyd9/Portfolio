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
      <div className="h-full text-center">
        <h1 className="pt-5 pb-10 text-4xl font-bold">Skills</h1>
        <section className="h-[80%]">
          <div className="absolute h-10 w-44 bg-gradient-to-r from-gray-400 to-white rounded-r-3xl -z-10"></div>
          <nav
            className=" px-10 flex justify-between items-center"
            onClick={onSelectorClick}
          >
            <button className="text-2xl font-mono">Language</button>
            <button className="text-2xl font-mono">Tools</button>
            <button className="text-2xl font-mono">Outher</button>
          </nav>
          <ShowSkills case={selector} />
        </section>
      </div>
    </main>
  );
}
