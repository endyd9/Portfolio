"use client";

import { useEffect, useState } from "react";
import { ProjectProps } from "./projectList";

interface ProjectDtailProps extends ProjectProps {
  projectName: string;
  imgDirection: string;
}

export default function ProjectDetail(props: ProjectDtailProps) {
  const [menu, setMenu] = useState<boolean>(true);
  const [pageNum, setPageNum] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);

  let caption: string[] = [];
  let imgName: string[] = [];
  let project: string = "";

  switch (props.projectName) {
    case "Drawing Game":
      project = "drawing";
      caption = [
        "시작 화면",
        "게임 화면",
        "답안 제출후 채점 화면",
        "오답 화면",
        "정답 화면",
        "게임결과",
      ];
      imgName = ["1", "2", "3", "4", "5", "6"];
      break;

    case "Oi-Market":
      project = "oi";
      caption = [
        "메인 페이지",
        "회원가입 페이지",
        "로그인 페이지",
        "로그인 후 메인 페이지",
        "상품 업로드 페이지",
        "상품 수정 페이지",
        "본인이 업로드 한 상품 페이지",
        "결과물 없는 검색 화면",
        "검색결과 화면",
        "메세지 페이지",
        "채팅방",
        "마이페이지",
        "회원정보 수정",
      ];
      imgName = [
        "로그인 안한 메인",
        "회원가입 폼",
        "로그인",
        "로그인 한 메인",
        "글쓰기",
        "내 상품",
        "글 수정",
        "결과물 없는 검색",
        "결과물 있는 검색",
        "메세지 리스트",
        "메세지 내용",
        "마이페이지",
        "회원정보 수정",
      ];
      break;

    case "BooJaDongSan":
      project = "booja";
      caption = [
        "메인 페이지",
        "거래 상세 페이지",
        "메뉴",
        "회원가입 페이지",
        "로그인 페이지",
        "검색 페이지",
        "검색결과 페이지",
        "프로필 페이지",
      ];
      imgName = [
        "메인",
        "거래 상세",
        "메뉴",
        "회원가입",
        "로그인",
        "검색",
        "검색결과",
        "프로필",
      ];
      break;
    default:
      break;
  }

  const nextPage = () => {
    if (pageNum + 1 > imgName.length - 1) return alert("마지막 페이지");
    const contanier = document.querySelector(".contanier");
    setPosition((priv) => priv + contanier!.clientWidth);
    setPageNum((priv) => priv + 1);
  };

  const privPage = () => {
    if (pageNum - 1 < 0) return alert("첫 페이지");
    const contanier = document.querySelector(".contanier");
    setPosition((priv) => priv - contanier!.clientWidth);
    setPageNum((priv) => priv - 1);
  };

  useEffect(() => {
    const contanier = document.querySelectorAll(".contanier");
    contanier.forEach((c) => {
      //@ts-ignore
      c.style.transition = ".5s";
      props.imgDirection === "v"
        ? //@ts-ignore
          (c.style.transform = `translateX(-${24.3 * pageNum}rem)`)
        : //@ts-ignore
          (c.style.transform = `translateX(-${position}px)`);
    });
  }, [position]);

  return (
    <div className="w-[90%] animate-[intro_.5s] mx-auto flex flex-col items-center">
      <button
        className="absolute w-8 h-8 right-6 top-28"
        onClick={() => props.projectSelector("Projects")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
      </button>

      <nav className="w-[50%] mb-5 flex justify-between">
        <button
          className={
            menu === true
              ? "underline text-xl font-semibold"
              : "text-xl font-light"
          }
          onClick={() => {
            setPageNum(0);
            setMenu((priv) => !priv);
          }}
        >
          Photo
        </button>
        <button
          className={
            menu === true
              ? "text-xl font-light"
              : "underline text-xl font-semibold"
          }
          onClick={() => setMenu((priv) => !priv)}
        >
          Description
        </button>
      </nav>
      {menu === true ? (
        <div className="w-full flex flex-col items-center justify-center animate-[intro_.3s]">
          <div className="w-96 h-64 my-10 bg-gray-100 relative flex overflow-hidden">
            {imgName.map((img) => (
              <img
                key={img}
                src={`/img/${project}/${img}.png`}
                alt={img}
                className={
                  props.imgDirection === "v"
                    ? "contanier mx-[7.6rem] "
                    : "contanier"
                }
              />
            ))}
          </div>

          <div className="absolute w-[90%] flex justify-between mx-5">
            <button
              className="text-3xl w-10 h-10 bg-gray-100 rounded-full"
              onClick={privPage}
            >
              ＜
            </button>
            <button
              className="text-3xl w-10 h-10 bg-gray-100 rounded-full"
              onClick={nextPage}
            >
              ＞
            </button>
          </div>
          <span>{caption[pageNum]}</span>
        </div>
      ) : (
        <div className="animate-[intro_.3s]">
          <h1>dbsdkfbsjkfsfbjksdbfks</h1>
        </div>
      )}
    </div>
  );
}
