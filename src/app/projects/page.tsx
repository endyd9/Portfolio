"use client";

import ProjectDetail from "@/components/projectDetail";
import ProjectList from "@/components/projectList";
import { useState } from "react";

export default function Projects() {
  const [selector, setSelector] = useState<string>("Projects");

  const choseProject = (projectName: string) => {
    setSelector(projectName);
  };

  return (
    <main className="mt-[20%] w-full h-screen animate-[intro_1s]">
      <div className="h-full">
        <h1 className="ml-5 pt-5 pb-10 text-4xl font-bold">{selector}</h1>
        {selector === "Projects" ? (
          <ProjectList projectSelector={choseProject} />
        ) : (
          <ProjectDetail
            projectSelector={choseProject}
            projectName={selector}
            imgDirection={selector === "BooJaDongSan" ? "v" : "h"}
          />
        )}
      </div>
    </main>
  );
}
