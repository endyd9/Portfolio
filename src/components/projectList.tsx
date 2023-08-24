import { prefix } from "@/lib";
import Image from "next/image";

interface ProjectCover {
  name: string;
  cover: string;
}

export interface ProjectProps {
  projectSelector: Function;
}

export default function ProjectList(props: ProjectProps) {
  const projects: ProjectCover[] = [
    {
      name: "Drawing Game",
      cover: `${prefix}/img/drawing/2.png`,
    },
    {
      name: "Oi-Market",
      cover: `${prefix}/img/oi/로그인 안한 메인.png`,
    },
    {
      name: "BooJaDongSan",
      cover: `${prefix}/img/booja/메인.png`,
    },
  ];

  return (
    <div className="h-[65%] lg:h-[75%] grid grid-cols-1 items-center lg:items-start  overflow-scroll lg:grid-cols-2 2xl:grid-cols-3">
      {projects.reverse().map((project) => (
        <div
          key={project.name}
          className="w-auto h-auto flex flex-col items-center my-10"
          onClick={() => props.projectSelector(project.name)}
        >
          <div className="w-[90%] lg:w-[70%] h-64 bg-gray-100  cursor-pointer relative">
            <img
              src={project.cover}
              alt={project.name}
              className="object-contain w-full h-full lg:hover:scale-110 transition"
            />
          </div>
          <span className="my-3 cursor-pointer">{project.name}</span>
        </div>
      ))}
    </div>
  );
}
