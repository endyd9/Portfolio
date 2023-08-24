(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{9677:function(e,t,l){Promise.resolve().then(l.bind(l,9580))},9580:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return c}});var r=l(7437),s=l(2265),n=l(6250);function a(e){let t;let[l,a]=(0,s.useState)(!0),[i,c]=(0,s.useState)(0),[o,d]=(0,s.useState)(0),x=[],m=[];switch(e.projectName){case"Drawing Game":x=["시작 화면","게임 화면","답안 제출후 채점 화면","오답 화면","정답 화면","게임결과"],m=["drawing/1","drawing/2","drawing/3","drawing/4","drawing/5","drawing/6"],t={descript:(0,r.jsxs)("p",{children:["구글의 Vision API를 활용한 간단한 게임입니다. NomardCoder의"," ",(0,r.jsx)("a",{className:"underline text-blue-900",href:"https://nomadcoders.co/javascript-for-beginners-2",target:"_blank",children:"바닐라 JS 로 그림 앱 만들기"})," ","강의를 수강하고, 이미지 인식AI를 활용하면 게임으로 발전시킬 수 있을거 같아 시작한 프로젝트 입니다. 프론트는 강의에서 사용했던 소스코드를 다듬어 EJS 템플릿 엔진으로 옮겨 구현하였고, 백엔드는 Express.JS로 서버를 구축하여 프론트에서 답안 체크 요청을 하면 구글 Vision을 사용해 유저의 그림을 라벨링하여 돌려주는 방식을사용했습니다."]}),langFraemWork:(0,r.jsxs)("p",{children:["개발환경 : MacOS13, VScode ",(0,r.jsx)("br",{}),"Frontend : HTML, CSS, JavaScript ",(0,r.jsx)("br",{}),"Backend : Node.JS, Express.JS, EJS, Google Vision"]}),codeDeploy:(0,r.jsxs)("p",{children:[" ","github :"," ",(0,r.jsx)("a",{className:"underline text-slate-400",href:"https://github.com/endyd9/Drawing-Game",target:"_blank",children:"소스코드 바로가기"})]})};break;case"Oi-Market":x=["메인 페이지","회원가입 페이지","로그인 페이지","로그인 후 메인 페이지","상품 업로드 페이지","상품 수정 페이지","본인이 업로드 한 상품 페이지","결과물 없는 검색 화면","검색결과 화면","메세지 페이지","채팅방","마이페이지","회원정보 수정"],m=["oi/로그인 안한 메인","oi/회원가입 폼","oi/로그인","oi/로그인 한 메인","oi/글쓰기","oi/내 상품","oi/글 수정","oi/결과물 없는 검색","oi/결과물 있는 검색","oi/메세지 리스트","oi/메세지 내용","oi/마이페이지","oi/회원정보 수정"],t={descript:(0,r.jsx)("p",{children:"React.JS와 Express.JS 를 활용한 중고거래 서비스 입니다. React.JS를 배우고 손에 익히기 위해 진행한 프로젝트입니다. 백엔드는 DB의 CRUD만 담당하여 유저정보, 상품정보 등을 저장하고, 라우팅은 ReactRoute를 활용하여 프론트단에서 구현하였습니다. 프론트는 React.JS를 활용한 SPA로 구현하여, 회원가입, 로그인, 게시글 작성, 게시글 검색 등 기본적인 기능들을 구현하였고, Socket.io를 사용하여 유저간 실시간 통신방식으로 채팅 기능을 구현하였습니다."}),langFraemWork:(0,r.jsxs)("p",{children:["개발환경 : MacOS13, VScode ",(0,r.jsx)("br",{}),"Frontend : JavaScript, React.JS",(0,r.jsx)("br",{}),"Backend : Node.JS, Express.JS, Socket.io DB : MongoDB"]}),codeDeploy:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{className:"text-xl",children:"Frontend"}),(0,r.jsxs)("p",{children:["github :"," ",(0,r.jsx)("a",{className:"underline text-slate-400",href:"https://github.com/endyd9/OiMarket-client",target:"_blank",children:"소스코드 바로가기"})]}),(0,r.jsx)("li",{className:"text-xl",children:"Backend"}),(0,r.jsxs)("p",{children:["github :"," ",(0,r.jsx)("a",{className:"underline text-slate-400",href:"https://github.com/endyd9/Oimarket-server",target:"_blank",children:"소스코드 바로가기"})]}),(0,r.jsx)("li",{className:"text-2xl",children:"Deploy"}),(0,r.jsx)("a",{target:"_blank",href:"https://endyd9.github.io/OiMarket-client/",className:"underline text-slate-400",children:"페이지 바로가기"})]})};break;case"BooJaDongSan":x=["메인 페이지","거래 상세 페이지","메뉴","회원가입 페이지","로그인 페이지","검색 페이지","검색결과 페이지","프로필 페이지"],m=["booja/메인","booja/거래 상세","booja/메뉴","booja/회원가입","booja/로그인","booja/검색","booja/검색결과","booja/프로필"],t={descript:(0,r.jsxs)("p",{children:["공공데이터 포털의"," ",(0,r.jsx)("a",{href:"https://www.data.go.kr/data/15057511/openapi.do",className:"text-blue-900 underline",target:"_blank",children:"국토교통부 아파트매매 실거래 상세 자료"}),"를 활용한 모바일 플랫폼 아파트 거래 내역 조회 및 가격 비교 서비스입니다. NextJS와 Vercel의 vercel postgers DB를 사용하여 서버리스로 구현하였고 Vercel을 통해 배포했습니다. 사람들이 많이 조회하거나 많은 사람들이 관심 거래 내역으로 등록한 실거래 자료나 (메인페이지) 가격 상승률이 가장 높거나 매매가가 가장 높은 거래 내역 (Top10 페이지) 을 확인 할 수 있고, 회원가입 페이지를 통한 가입이나 구글 로그인 기능으로 회원 등록을 하면 로그인 후 거래내역 상세페이지에서 관심 매물로 등록하고 마이페이지에서 저장한 매물 목록을 조회 할 수 있습니다. 검색페이지에서 아파트 이름, 평 형, 거래일자 등으로 검색조건을 통해 조회도 가능합니다. 거래내역 상세페이지에서는 거래일, 거래가격 등 아파트의 거래 정보와 건축년도, 주소 등 아파트의 정보를 확인 가능하고 카카오 지도를 통해 지도에서 아파트 위치를 확인 할 수 있습니다."]}),langFraemWork:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"text-xl my-2",children:"- 개발환경 "}),(0,r.jsx)("p",{children:"MacOS 13, VSCode "}),(0,r.jsx)("p",{className:"text-xl my-2",children:"- FrontEnd & BackEnd"}),"TypeScript, Next.JS 13, TaillWindCSS ",(0,r.jsx)("br",{}),(0,r.jsx)("p",{className:"text-xl my-2",children:"- DB"}),(0,r.jsx)("p",{children:"PostgreSQL 15(로컬환경), Vercel Postres (배포환경)"})]}),codeDeploy:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"text-xl my-2",children:"- 소스코드"}),(0,r.jsxs)("p",{children:["Github :"," ",(0,r.jsx)("a",{href:"https://github.com/endyd9/BooJaDongSan/tree/main",target:"_blank",className:"text-blue-900 underline",children:"깃허브 바로가기"})]}),(0,r.jsx)("p",{className:"text-xl my-2",children:"- 배포"}),(0,r.jsx)("a",{href:"https://boo-ja-dong-san.vercel.app",target:"_blank",className:"text-blue-900 underline",children:"부자동산 바로가기"})]})}}return(0,s.useEffect)(()=>{let t=document.querySelectorAll(".contanier");t.forEach(t=>{t.style.transition=".5s","v"===e.imgDirection?t.style.transform="translateX(-".concat(o/16,"rem)"):t.style.transform="translateX(-".concat(o,"px)")})},[o]),(0,r.jsxs)("div",{className:"w-[90%] animate-[intro_.5s] mx-auto flex flex-col items-center",children:[(0,r.jsx)("button",{className:"absolute w-8 h-8 right-6 top-28 xl:w-10 xl:h-10 xl:top-32 2xl:top-36 xl:right-10 2xl:right-72",onClick:()=>e.projectSelector("Projects"),children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"})})}),(0,r.jsxs)("nav",{className:"w-[50%] lg:max-w-xs flex justify-between mb-5",children:[(0,r.jsx)("button",{className:!0===l?"underline text-xl font-semibold":"text-xl font-light",onClick:()=>{c(0),d(0),a(e=>!e)},children:"Photo"}),(0,r.jsx)("button",{className:!0===l?"text-xl font-light":"underline text-xl font-semibold",onClick:()=>a(e=>!e),children:"Description"})]}),!0===l?(0,r.jsxs)("div",{className:"w-full flex flex-col items-center justify-center animate-[intro_.3s] relative",children:[(0,r.jsx)("div",{className:"w-96 h-64 lg:w-[800px] lg:h-[500px] my-10 bg-gray-100 flex overflow-hidden",children:m.map(t=>(0,r.jsx)("img",{src:"".concat(n.O,"/img/").concat(t,".png"),alt:t,className:"v"===e.imgDirection?"contanier px-[7.6rem] lg:px-[16rem] ":"contanier"},t))}),(0,r.jsxs)("div",{className:"absolute w-full lg:w-[75%] 2xl:w-[60%] flex justify-between mx-5",children:[(0,r.jsx)("button",{className:"text-3xl w-10 h-10 bg-gray-100 rounded-full",onClick:()=>{if(i-1<0)return alert("첫 페이지");let e=document.querySelector(".contanier");d(t=>t-e.clientWidth),c(e=>e-1)},children:"＜"}),(0,r.jsx)("button",{className:"text-3xl w-10 h-10 bg-gray-100 rounded-full",onClick:()=>{if(i+1>m.length-1)return alert("마지막 페이지");let e=document.querySelector(".contanier");console.log(null==e?void 0:e.clientWidth),d(t=>t+e.clientWidth),c(e=>e+1)},children:"＞"})]}),(0,r.jsx)("span",{children:x[i]})]}):(0,r.jsx)("div",{className:"max-w-xl h-[50vh] animate-[up_.7s] flex justify-center overflow-y-scroll",children:(0,r.jsxs)("ul",{className:"w-[90%] list-disc my-5",children:[(0,r.jsxs)("li",{className:"my-3",children:[(0,r.jsx)("h3",{className:"text-2xl mb-3",children:"프로젝트 개요"}),t.descript]}),(0,r.jsxs)("li",{className:"my-3",children:[(0,r.jsx)("h3",{className:"text-2xl mb-3",children:"개발환경 밎 사용기술"}),t.langFraemWork]}),(0,r.jsxs)("li",{className:"my-3",children:[(0,r.jsx)("h3",{className:"text-2xl mb-3",children:"소스코드 저장소 및 배포 주소"}),t.codeDeploy]})]})})]})}function i(e){let t=[{name:"Drawing Game",cover:"".concat(n.O,"/img/drawing/2.png")},{name:"Oi-Market",cover:"".concat(n.O,"/img/oi/로그인 안한 메인.png")},{name:"BooJaDongSan",cover:"".concat(n.O,"/img/booja/메인.png")}];return(0,r.jsx)("div",{className:"h-[65%] lg:h-[75%] grid grid-cols-1 items-center lg:items-start  overflow-scroll lg:grid-cols-2 2xl:grid-cols-3",children:t.reverse().map(t=>(0,r.jsxs)("div",{className:"w-auto h-auto flex flex-col items-center my-10",onClick:()=>e.projectSelector(t.name),children:[(0,r.jsx)("div",{className:"w-[90%] lg:w-[70%] h-64 bg-gray-100  cursor-pointer relative",children:(0,r.jsx)("img",{src:t.cover,alt:t.name,className:"object-contain w-full h-full lg:hover:scale-110 transition"})}),(0,r.jsx)("span",{className:"my-3 cursor-pointer",children:t.name})]},t.name))})}function c(){let[e,t]=(0,s.useState)("Projects"),l=e=>{t(e)};return(0,r.jsx)("main",{className:"mt-[20%] lg:mt-[8%] 2xl:mt-[7%]  w-full h-screen animate-[intro_1s]",children:(0,r.jsxs)("div",{className:"h-full",children:[(0,r.jsx)("h1",{className:"ml-5 lg:ml-10 2xl:ml-36 pt-5 pb-10 text-4xl font-bold",children:e}),"Projects"===e?(0,r.jsx)(i,{projectSelector:l}):(0,r.jsx)(a,{projectSelector:l,projectName:e,imgDirection:"BooJaDongSan"===e?"v":"h"})]})})}},6250:function(e,t,l){"use strict";l.d(t,{O:function(){return r}});let r="https://endyd9.github.io/Portfolio"},622:function(e,t,l){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=l(2265),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,l){var r,n={},o=null,d=null;for(r in void 0!==l&&(o=""+l),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===n[r]&&(n[r]=t[r]);return{$$typeof:s,type:e,key:o,ref:d,props:n,_owner:i.current}}t.Fragment=n,t.jsx=o,t.jsxs=o},7437:function(e,t,l){"use strict";e.exports=l(622)}},function(e){e.O(0,[971,596,744],function(){return e(e.s=9677)}),_N_E=e.O()}]);