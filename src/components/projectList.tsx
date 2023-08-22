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
      cover: "/img/drawing/2.png",
    },
    {
      name: "Oi-Market",
      cover: "/img/oi/로그인 안한 메인.png",
    },
    {
      name: "BooJaDongSan",
      cover: "/img/booja/메인.png",
    },
  ];

  return (
    <div className="h-[65%] grid grid-cols-1 items-center justify-cente overflow-scroll">
      {projects.toReversed().map((project) => (
        <div
          key={project.name}
          className="w-auto h-auto flex flex-col items-center"
          onClick={() => props.projectSelector(project.name)}
        >
          <div className="w-[90%] h-64 bg-gray-100 mx-auto  cursor-pointer relative">
            <Image
              src={project.cover}
              fill
              alt={project.name}
              className="object-contain"
            />
          </div>
          <span className="my-3  cursor-pointer">{project.name}</span>
        </div>
      ))}
    </div>
  );
}
