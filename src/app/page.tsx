"use client";

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
    setTimeout(() => showText(), 2500);
  }, []);
  return (
    <main className="w-screen h-screen animate-intro bg-small xl:bg-big bg-cover">
      <div className="w-full h-[90%] flex items-center justify-center">
        <h2 className="text-3xl text-white animate-cursor">{text}</h2>
      </div>
    </main>
  );
}
