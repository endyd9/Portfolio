"use client";
import Image from "next/image";

interface SkillPorps {
  case: string;
}

export default function ShowSkills(props: SkillPorps) {
  switch (props.case) {
    case "L":
      return (
        <ul className="grid grid-cols-2 grid-rows-2 my-5 mx-5 justify-center">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-light mb-5">
              MarkUp
              <hr className="border-black" />
            </h3>
            <li className="relative w-20 h-20 my-3 bg-gray-200 rounded-full animate-[up_1.2s]">
              <Image
                src={"/img/skill/html.png"}
                fill
                sizes="cover"
                alt="HTML5"
              />
            </li>
            <li className="relative w-20 h-20 my-3 bg-gray-200 rounded-full animate-[up_1.8s]">
              <Image src={"/img/skill/css.png"} fill sizes="cover" alt="CSS3" />
            </li>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-light mb-5">
              Programing
              <hr className="border-black" />
            </h3>
            <li className="relative w-20 h-20 my-3 bg-gray-200 rounded-full animate-[up_2.2s]">
              <Image
                src={"/img/skill/js.png"}
                fill
                sizes="cover"
                alt="JavaScript"
              />
            </li>
            <li className="relative w-20 h-20 my-3 bg-gray-200 rounded-full animate-[up_2.2s]">
              <Image
                src={"/img/skill/ts.png"}
                fill
                sizes="cover"
                alt="TypeScript"
              />
            </li>
          </div>
        </ul>
      );
    case "T":
      return (
        <ul className="grid grid-cols-2 grid-rows-2 my-5 mx-5 justify-center">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-light mb-5">
              FrameWorks
              <hr className="border-black" />
            </h3>
            <li className="relative w-20 h-20 my-3 bg-gray-200 rounded-full animate-[up_0.8s]">
              <Image
                src={"/img/skill/react.png"}
                fill
                sizes="cover"
                alt="ReactJS"
              />
            </li>
            <li className="relative w-20 h-20 my-3 bg-gray-200 rounded-full animate-[up_1.4s]">
              <Image
                src={"/img/skill/next.png"}
                fill
                sizes="cover"
                alt="NextJS"
              />
            </li>
            <li className="relative w-20 h-20 my-3 bg-gray-200 rounded-full animate-[up_0.9s]">
              <Image
                src={"/img/skill/express.png"}
                fill
                sizes="cover"
                alt="ExpressJS"
              />
            </li>
            <li className="relative w-20 h-20 my-3 bg-gray-200 rounded-full animate-[up_2s] overflow-hidden">
              <Image
                src={"/img/skill/nestjs.png"}
                fill
                sizes="cover"
                alt="NestJS"
              />
            </li>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-light mb-5">
              DB
              <hr className="border-black" />
            </h3>
            <li className="relative w-20 h-20 my-3 bg-gray-200 rounded-full animate-[up_2s]">
              <Image
                src={"/img/skill/mongo.png"}
                fill
                sizes="cover"
                alt="MongoDB"
              />
            </li>
            <li className="relative w-20 h-20 my-3 bg-gray-200 rounded-full animate-[up_2.2s]">
              <Image
                src={"/img/skill/mysql.png"}
                fill
                sizes="cover"
                alt="MySql"
              />
            </li>
            <li className="relative w-20 h-20 my-3 bg-gray-200 rounded-full animate-[up_2.2s]">
              <Image
                src={"/img/skill/postgresql.png"}
                fill
                sizes="cover"
                alt="PostgreSQL"
              />
            </li>
          </div>
        </ul>
      );
    case "O":
      return (
        <ul className="grid grid-cols-1 grid-rows-2 my-5 mx-5 justify-center">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl font-light mb-5">
              Other
              <hr className="border-black" />
            </h3>
            <div className="grid grid-cols-3">
              <li className="relative w-20 h-20 my-5 mx-5 bg-black rounded-full animate-[up_1.2s]">
                <Image
                  src={"/img/skill/tailwind.png"}
                  fill
                  sizes="cover"
                  alt="TailWindCSS"
                />
              </li>
              <li className="relative w-200 h-20 my-5 mx-5 bg-gray-300 rounded-full animate-[up_1.8s] overflow-hidden">
                <Image
                  src={"/img/skill/scss.png"}
                  fill
                  sizes="cover"
                  alt="CSS3"
                />
              </li>
              <li className="relative w-20 h-20 my-5 mx-5 bg-gray-200 rounded-full animate-[up_2.2s]">
                <Image
                  src={"/img/skill/py.png"}
                  fill
                  sizes="cover"
                  alt="Python"
                />
              </li>
              <li className="relative w-20 h-20 my-5 mx-5 bg-gray-200 rounded-full animate-[up_2.2s]">
                <Image
                  src={"/img/skill/bs4.png"}
                  fill
                  sizes="cover"
                  alt="BS4"
                />
              </li>
              <li className="relative w-20 h-20 my-5 mx-5 bg-gray-200 rounded-full animate-[up_2.2s]">
                <Image
                  src={"/img/skill/flask.png"}
                  fill
                  sizes="cover"
                  alt="Flask"
                />
              </li>
              <li className="relative w-20 h-20 my-5 mx-5 bg-gray-200 rounded-full animate-[up_2.2s]">
                <Image
                  src={"/img/skill/java.png"}
                  fill
                  sizes="cover"
                  alt="Java"
                />
              </li>
              <li className="relative w-20 h-20 my-5 mx-5 bg-gray-200 rounded-full animate-[up_2.2s]">
                <Image
                  src={"/img/skill/android.png"}
                  fill
                  sizes="cover"
                  alt="Android"
                />
              </li>
              <li className="relative w-20 h-20 my-5 mx-5 bg-gray-200 rounded-full animate-[up_2.2s]">
                <Image
                  src={"/img/skill/dart.png"}
                  fill
                  sizes="cover"
                  alt="Dart"
                />
              </li>
            </div>
          </div>
        </ul>
      );
    default:
      break;
  }
}