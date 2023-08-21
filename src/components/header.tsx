"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const onMenuClick = () => {
    const menu = document.getElementById("menu");
    if (!menu) return;
    menu.style.transition = "0.6s";
    switch (showMenu) {
      case false:
        menu.style.transform = `translateY(100%)`;
        return setShowMenu((prev) => !prev);
      case true:
        menu.style.transform = `translateY(0%)`;
        return setShowMenu((prev) => !prev);
      default:
        break;
    }
  };
  return (
    <header className="w-full h-20 fixed">
      <div className="h-full flex items-center justify-between relative bg-black px-4 z-10">
        <Link href="/">
          <h1 className="text-white text-4xl font-extralight">
            DY's PortFolio
          </h1>
        </Link>
        <button onClick={onMenuClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div
        id="menu"
        className="w-full h-[10%] fixed left-0 bg-[rgba(0,0,0,0.5)] top-0"
      >
        <nav className="h-full text-white text-2xl z-10">
          <ul className="h-full flex justify-between items-center mx-4">
            <li className="hover:scale-125 duration-200">
              <Link href="/skils">
                <h3>Skills</h3>
              </Link>
            </li>
            <li className="hover:scale-125 duration-200">
              <Link href="/projects">
                <h3>Projects</h3>{" "}
              </Link>
            </li>
            <li className="hover:scale-125 duration-200">
              <Link href="/about">
                <h3>About Me</h3>
              </Link>
            </li>
            <li className="hover:scale-125 duration-200">
              <Link href="/contect">
                <h3>Contect</h3>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
