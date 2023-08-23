"use client";

import { prefix } from "@/lib";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  let menu: any;
  if (typeof document !== "undefined") {
    menu = document.getElementById("menu_content");
  }

  const closeMenu = () => {
    if (!menu) return;
    menu.style.transform = `translateY(0%)`;
    document.removeEventListener("click", closeMenu);
    setShowMenu(false);
  };

  const openMenu = () => {
    if (!menu) return;
    menu.style.transition = "0.4s";
    menu.style.transform = `translateY(105%)`;
    document.addEventListener("click", closeMenu);
  };
  useEffect(() => {
    showMenu ? openMenu() : closeMenu();
  }, [showMenu]);
  return (
    <header className="w-full h-24 fixed left-0 top-0 z-10">
      <div className="h-full flex items-center justify-between relative bg-black px-4 z-10">
        <Link href={`${prefix}/`}>
          <h1 className="text-white text-4xl font-extralight">
            DY's PortFolio
          </h1>
        </Link>
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className="w-12 text-white"
        >
          <svg
            id="menu"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-full h-full"
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
        id="menu_content"
        className="w-full h-[10%] fixed left-0 bg-[rgba(0,0,0,0.5)] top-0"
      >
        <nav className="h-20 text-white text-2xl z-10">
          <ul className="h-full flex justify-between items-center mx-4">
            <li className="hover:scale-125 duration-200">
              <Link href={`${prefix}/skills`}>
                <h3>Skills</h3>
              </Link>
            </li>
            <li className="hover:scale-125 duration-200">
              <Link href={`${prefix}/projects`}>
                <h3>Projects</h3>{" "}
              </Link>
            </li>
            <li className="hover:scale-125 duration-200">
              <Link href={`${prefix}/about`}>
                <h3>About Me</h3>
              </Link>
            </li>
            <li className="hover:scale-125 duration-200">
              <Link href={`${prefix}/contect`}>
                <h3>Contect</h3>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
