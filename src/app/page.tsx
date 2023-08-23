"use client";

import { prefix } from "@/lib";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  const showText = async () => {
    let cnt = 0;
    const inner = "성장중인 개발자 김두용입니다.";
    setText("");
    while (cnt !== inner.length) {
      setText((prev) => prev + inner[cnt]);
      await new Promise((res) => setTimeout(res, 150));
      cnt += 1;
    }
  };

  useEffect(() => {
    setTimeout(() => showText(), 1500);
  }, []);
  return (
    <main
      className={`w-screen h-screen animate-[intro_2s] bg-[url('/img/main2.jpg')] lg:bg-[url('/img/main.jpg')] bg-cover`}
    >
      <div className="w-full h-[90%] flex items-center justify-center">
        <h2 className="text-3xl text-white animate-cursor">{text}</h2>
      </div>
    </main>
  );
}
