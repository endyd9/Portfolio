"use client";

import { prefix } from "@/lib";

export interface SkillPorps {
  case: string;
}

export default function ShowSkills(props: SkillPorps) {
  switch (props.case) {
    case "L":
      return (
        <ul
          key={Math.random()}
          className="grid grid-cols-2 grid-rows-2 my-5 mx-5 justify-center"
        >
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-light mb-5">
              MarkUp
              <hr className="border-black" />
            </h3>
            <li className="relative w-20 h-20 my-3 bg-gray-200 rounded-full animate-[up_.3s]">
              <img
                src={`${prefix}/img/skill/html.png`}
                className="object-cover w-full h-full"
                alt="HTML5"
              />
            </li>
            <li className="relative w-20 h-20 my-3 bg-gray-200 rounded-full animate-[up_1s]">
              <img
                src={`${prefix}/img/skill/css.png`}
                className="object-cover w-full h-full"
                alt="CSS3"
              />
            </li>
            <li className="relative w-20 h-20 my-3 bg-gray-200 rounded-full animate-[up_1.2s]">
              <img
                src={`${prefix}/img/skill/tailwind.png`}
                className="object-cover w-full h-full"
                alt="TailWindCSS"
              />
            </li>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-light mb-5">
              Programing
              <hr className="border-black" />
            </h3>
            <li className="relative w-20 h-20 my-3 bg-gray-200 rounded-full animate-[up_.6s]">
              <img
                src={`${prefix}/img/skill/js.png`}
                className="object-cover w-full h-full"
                alt="JavaScript"
              />
            </li>
            <li className="relative w-20 h-20 my-3 bg-gray-200 rounded-full animate-[up_1.2s]">
              <img
                src={`${prefix}/img/skill/ts.png`}
                className="object-cover w-full h-full"
                alt="TypeScript"
              />
            </li>
          </div>
        </ul>
      );
    case "F":
      return (
        <ul
          key={Math.random()}
          className="grid grid-cols-2 grid-rows-2 my-5 mx-5 justify-center"
        >
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-light mb-5">
              FrameWorks
              <hr className="border-black" />
            </h3>
            <li className="relative w-20 h-20 my-3 bg-gray-200 rounded-full animate-[up_0.2s]">
              <img
                src={`${prefix}/img/skill/react.png`}
                className="object-cover w-full h-full"
                alt="ReactJS"
              />
            </li>
            <li className="relative w-20 h-20 my-3 bg-gray-200 rounded-full animate-[up_.8s]">
              <img
                src={`${prefix}/img/skill/next.png`}
                className="object-cover w-full h-full"
                alt="NextJS"
              />
            </li>
            <li className="relative w-20 h-20 my-3 bg-gray-200 rounded-full animate-[up_1.3s]">
              <img
                src={`${prefix}/img/skill/express.png`}
                className="object-cover w-full h-full"
                alt="ExpressJS"
              />
            </li>
            <li className="relative w-20 h-20 my-3 bg-gray-200 rounded-full animate-[up_1.8s] overflow-hidden">
              <img
                src={`${prefix}/img/skill/nestjs.png`}
                className="object-cover w-full h-full"
                alt="NestJS"
              />
            </li>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-light mb-5">
              DB
              <hr className="border-black" />
            </h3>
            <li className="relative w-20 h-20 my-3 bg-gray-200 rounded-full animate-[up_0.5s]">
              <img
                src={`${prefix}/img/skill/mongo.png`}
                className="object-cover w-full h-full"
                alt="MongoDB"
              />
            </li>
            <li className="relative w-20 h-20 my-3 bg-gray-200 rounded-full animate-[up_1s]">
              <img
                src={`${prefix}/img/skill/mysql.png`}
                className="object-cover w-full h-full"
                alt="MySql"
              />
            </li>
            <li className="relative w-20 h-20 my-3 bg-gray-200 rounded-full animate-[up_1.5s]">
              <img
                src={`${prefix}/img/skill/postgresql.png`}
                className="object-fill w-full h-full"
                alt="PostgreSQL"
              />
            </li>
          </div>
        </ul>
      );
    case "T":
      return (
        <ul
          key={Math.random()}
          className="grid grid-cols-1 grid-rows-2 my-5 mx-5 justify-center"
        >
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl font-light mb-5">
              Tryed
              <hr className="border-black" />
            </h3>
            <div className="grid grid-cols-3">
              <li className="relative w-20 h-20 my-5 mx-5 bg-black rounded-full animate-[up_0.2s] overflow-hidden">
                <img
                  src={`${prefix}/img/skill/rn.png`}
                  className="object-fill w-full h-full"
                  alt="ReactNative"
                />
              </li>
              <li className="relative w-20 h-20 my-5 mx-5 bg-gray-300 rounded-full animate-[up_0.4s] overflow-hidden">
                <img
                  src={`${prefix}/img/skill/scss.png`}
                  className="object-cover w-full h-full"
                  alt="SCSS"
                />
              </li>
              <li className="relative w-20 h-20 my-5 mx-5 bg-gray-200 rounded-full animate-[up_.8s]">
                <img
                  src={`${prefix}/img/skill/py.png`}
                  className="object-contain w-full h-full"
                  alt="Python"
                />
              </li>
              <li className="relative w-20 h-20 my-5 mx-5 bg-gray-200 rounded-full animate-[up_1s]">
                <img
                  src={`${prefix}/img/skill/bs4.png`}
                  className="object-fill w-full h-full"
                  alt="BS4"
                />
              </li>
              <li className="relative w-20 h-20 my-5 mx-5 bg-gray-200 rounded-full animate-[up_1.3s]">
                <img
                  src={`${prefix}/img/skill/flask.png`}
                  className="object-contain w-full h-full"
                  alt="Flask"
                />
              </li>
              <li className="relative w-20 h-20 my-5 mx-5 bg-gray-200 rounded-full animate-[up_1.7s]">
                <img
                  src={`${prefix}/img/skill/java.png`}
                  className="object-contain w-full h-full"
                  alt="Java"
                />
              </li>
              <li className="relative w-20 h-20 my-5 mx-5 bg-gray-200 rounded-full animate-[up_1.9s]">
                <img
                  src={`${prefix}/img/skill/android.png`}
                  className="object-fill w-full h-full"
                  alt="Android"
                />
              </li>
              <li className="relative w-20 h-20 my-5 mx-5 bg-gray-200 rounded-full animate-[up_2.1s]">
                <img
                  src={`${prefix}/img/skill/dart.png`}
                  className="object-fill w-full h-full"
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
