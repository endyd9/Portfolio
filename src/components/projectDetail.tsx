"use client";

import { ReactNode, useEffect, useState } from "react";
import { ProjectProps } from "./projectList";

interface ProjectDtailProps extends ProjectProps {
  projectName: string;
  imgDirection: string;
}

interface descprition {
  descript: ReactNode;
  langFraemWork: ReactNode;
  codeDeploy: ReactNode;
}

export default function ProjectDetail(props: ProjectDtailProps) {
  const [menu, setMenu] = useState<boolean>(true);
  const [pageNum, setPageNum] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);

  let caption: string[] = [];
  let imgName: string[] = [];
  let description: descprition;

  switch (props.projectName) {
    case "Drawing Game":
      caption = [
        "시작 화면",
        "게임 화면",
        "답안 제출후 채점 화면",
        "오답 화면",
        "정답 화면",
        "게임결과",
      ];
      imgName = [
        "drawing/1",
        "drawing/2",
        "drawing/3",
        "drawing/4",
        "drawing/5",
        "drawing/6",
      ];
      description = {
        descript: (
          <p>
            구글의 Vision API를 활용한 간단한 게임입니다. NomardCoder의{" "}
            <a
              className="underline text-blue-900"
              href="https://nomadcoders.co/javascript-for-beginners-2"
              target="_blank"
            >
              바닐라 JS 로 그림 앱 만들기
            </a>{" "}
            강의를 수강하고, 이미지 인식AI를 활용하면 게임으로 발전시킬 수
            있을거 같아 시작한 프로젝트 입니다. 프론트는 강의에서 사용했던
            소스코드를 다듬어 EJS 템플릿 엔진으로 옮겨 구현하였고, 백엔드는
            Express.JS로 서버를 구축하여 프론트에서 답안 체크 요청을 하면 구글
            Vision을 사용해 유저의 그림을 라벨링하여 돌려주는
            방식을사용했습니다.
          </p>
        ),
        langFraemWork: (
          <p>
            개발환경 : MacOS13, VScode <br />
            Frontend : HTML, CSS, JavaScript <br />
            Backend : Node.JS, Express.JS, EJS, Google Vision
          </p>
        ),
        codeDeploy: (
          <p>
            {" "}
            github :{" "}
            <a
              className="underline text-slate-400"
              href="https://github.com/endyd9/Drawing-Game"
              target="_blank"
            >
              소스코드 바로가기
            </a>
          </p>
        ),
      };
      break;

    case "Oi-Market":
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
        "oi/로그인 안한 메인",
        "oi/회원가입 폼",
        "oi/로그인",
        "oi/로그인 한 메인",
        "oi/글쓰기",
        "oi/내 상품",
        "oi/글 수정",
        "oi/결과물 없는 검색",
        "oi/결과물 있는 검색",
        "oi/메세지 리스트",
        "oi/메세지 내용",
        "oi/마이페이지",
        "oi/회원정보 수정",
      ];
      description = {
        descript: (
          <p>
            React.JS와 Express.JS 를 활용한 중고거래 서비스 입니다. React.JS를
            배우고 손에 익히기 위해 진행한 프로젝트입니다. 백엔드는 DB의 CRUD만
            담당하여 유저정보, 상품정보 등을 저장하고, 라우팅은 ReactRoute를
            활용하여 프론트단에서 구현하였습니다. 프론트는 React.JS를 활용한
            SPA로 구현하여, 회원가입, 로그인, 게시글 작성, 게시글 검색 등
            기본적인 기능들을 구현하였고, Socket.io를 사용하여 유저간 실시간
            통신방식으로 채팅 기능을 구현하였습니다.
          </p>
        ),
        langFraemWork: (
          <p>
            개발환경 : MacOS13, VScode <br />
            Frontend : JavaScript, React.JS
            <br />
            Backend : Node.JS, Express.JS, Socket.io DB : MongoDB
          </p>
        ),
        codeDeploy: (
          <ul>
            <li className="text-xl">Frontend</li>
            <p>
              github :{" "}
              <a
                className="underline text-slate-400"
                href="https://github.com/endyd9/OiMarket-client"
                target="_blank"
              >
                소스코드 바로가기
              </a>
            </p>
            <li className="text-xl">Backend</li>
            <p>
              github :{" "}
              <a
                className="underline text-slate-400"
                href="https://github.com/endyd9/Oimarket-server"
                target="_blank"
              >
                소스코드 바로가기
              </a>
            </p>
            <li className="text-2xl">Deploy</li>
            <a
              target="_blank"
              href="https://endyd9.github.io/OiMarket-client/"
              className="underline text-slate-400"
            >
              페이지 바로가기
            </a>
          </ul>
        ),
      };
      break;

    case "BooJaDongSan":
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
        "booja/메인",
        "booja/거래 상세",
        "booja/메뉴",
        "booja/회원가입",
        "booja/로그인",
        "booja/검색",
        "booja/검색결과",
        "booja/프로필",
      ];
      description = {
        descript: (
          <p>
            공공데이터 포털의{" "}
            <a
              href="https://www.data.go.kr/data/15057511/openapi.do"
              className="text-blue-900 underline"
              target="_blank"
            >
              국토교통부 아파트매매 실거래 상세 자료
            </a>
            를 활용한 모바일 플랫폼 아파트 거래 내역 조회 및 가격 비교
            서비스입니다. NextJS와 Vercel의 vercel postgers DB를 사용하여
            서버리스로 구현하였고 Vercel을 통해 배포했습니다. 사람들이 많이
            조회하거나 많은 사람들이 관심 거래 내역으로 등록한 실거래 자료나
            (메인페이지) 가격 상승률이 가장 높거나 매매가가 가장 높은 거래 내역
            (Top10 페이지) 을 확인 할 수 있고, 회원가입 페이지를 통한 가입이나
            구글 로그인 기능으로 회원 등록을 하면 로그인 후 거래내역
            상세페이지에서 관심 매물로 등록하고 마이페이지에서 저장한 매물
            목록을 조회 할 수 있습니다. 검색페이지에서 아파트 이름, 평 형,
            거래일자 등으로 검색조건을 통해 조회도 가능합니다. 거래내역
            상세페이지에서는 거래일, 거래가격 등 아파트의 거래 정보와 건축년도,
            주소 등 아파트의 정보를 확인 가능하고 카카오 지도를 통해 지도에서
            아파트 위치를 확인 할 수 있습니다.
          </p>
        ),
        langFraemWork: (
          <>
            <p className="text-xl my-2">- 개발환경 </p>
            <p>MacOS 13, VSCode </p>
            <p className="text-xl my-2">- FrontEnd & BackEnd</p>
            TypeScript, Next.JS 13, TaillWindCSS <br />
            <p className="text-xl my-2">- DB</p>
            <p>PostgreSQL 15(로컬환경), Vercel Postres (배포환경)</p>
          </>
        ),
        codeDeploy: (
          <>
            <p className="text-xl my-2">- 소스코드</p>
            <p>
              Github :{" "}
              <a
                href="https://github.com/endyd9/BooJaDongSan/tree/main"
                target="_blank"
                className="text-blue-900 underline"
              >
                깃허브 바로가기
              </a>
            </p>
            <p className="text-xl my-2">- 배포</p>
            <a
              href="https://boo-ja-dong-san.vercel.app"
              target="_blank"
              className="text-blue-900 underline"
            >
              부자동산 바로가기
            </a>
          </>
        ),
      };
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
      {/* 뒤로 버튼 */}
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
      {/* 셀렉터 */}
      <nav className="w-[50%] flex justify-between mb-5">
        <button
          className={
            menu === true
              ? "underline text-xl font-semibold"
              : "text-xl font-light"
          }
          onClick={() => {
            setPageNum(0);
            setPosition(0);
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
        // 사진
        <div className="w-full flex flex-col items-center justify-center animate-[intro_.3s] relative">
          <div className="w-96 h-64 my-10 bg-gray-100 relative flex overflow-hidden">
            {imgName.map((img) => (
              <img
                key={img}
                src={`/img/${img}.png`}
                alt={img}
                className={
                  props.imgDirection === "v"
                    ? "contanier mx-[7.6rem] "
                    : "contanier"
                }
              />
            ))}
          </div>
          {/* 사진 앞 뒤 버튼 */}
          <div className="absolute w-full flex justify-between mx-5">
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
        // 설명
        <div className="h-[50vh] animate-[up_.7s] flex justify-center overflow-y-scroll">
          <ul className="w-[90%] list-disc my-5">
            <li className="my-3">
              <h3 className="text-2xl mb-3">프로젝트 개요</h3>
              {description!.descript}
            </li>
            <li className="my-3">
              <h3 className="text-2xl mb-3">개발환경 밎 사용기술</h3>
              {description!.langFraemWork}
            </li>
            <li className="my-3">
              <h3 className="text-2xl mb-3">소스코드 저장소 및 배포 주소</h3>
              {description!.codeDeploy}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
