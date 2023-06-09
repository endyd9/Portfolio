import { useEffect, useState } from "react";

const Home = () => {
  const [intro, setIntro] = useState(false);
  const [text, setText] = useState("");

  const showText = async () => {
    let cnt = 0;
    const inner = "성장중인 개발자 김두용입니다.";
    while (cnt !== inner.length) {
      setText((prev) => prev + inner[cnt]);
      await new Promise((res) => setTimeout(res, 150));
      cnt += 1;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIntro(true);
      setTimeout(() => showText(), 500);
    }, 1000);
  }, []);
  return (
    <div>
      {/* 이미지 출처 출처 https://kr.freepik.com/free-photo/programming-background-with-html_36238378.htm#query=%EA%B0%9C%EB%B0%9C%EC%9E%90&position=5&from_view=keyword&track=sph" */}
      {intro ? (
        <div className="animate-intro absolute -z-10 w-full h-screen text-center right-0 bg-black bg-opacity-50">
          <h1 className="relative animate-cursor inline-block w-auto  text-white text-4xl top-1/2 ">
            {text}
          </h1>
        </div>
      ) : null}
      <img
        className="fixed right-0 -z-20 bg-cover"
        src="https://endyd9.github.io/Portfolio/img/main.jpg"
        alt="메인사진"
      />
    </div>
  );
};
export default Home;
