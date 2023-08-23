export default function About() {
  return (
    <main className="mt-[20%] lg:mt-[8%] w-full h-screen animate-[intro_1s]">
      <div className="h-full">
        <h1 className="ml-5 pt-5 mb-5 text-4xl font-bold">About Me</h1>
        <div className="w-[90%] h-[60%] mx-auto flex flex-col overflow-y-scroll">
          <div className="bg-gray-200 rounded-lg w-full p-5">
            <p>
              안녕하세요. 성장중인 예비 웹개발자 김두용입니다. <br />
              선호하는 개발언어는 자바스크립트, 타입스크립트 이고, 프론트엔드는
              React.JS기반, 백엔드는 Express.JS 를 선호합니다. <br />
              관련학과를 졸업 한 후 공백기가 있어 국비지원 웹풀스택 교육과정에
              참여하여 기초를 다시 다지며 인터넷 강의 등을 통해 최신 트랜드에
              맞는 프레임워크를 사용해 보았습니다. <br />
              새로운 프레임워크나 언어를 학습하는데 관심이 많고 가독성 좋은
              코드를 작성하기위해 많이 고민하고있습니다.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg w-full my-5 px-10">
            <h2 className="text-xl my-5">연혁</h2>
            <ul className="list-disc mb-10">
              <li>영남이공대 컴퓨터정보계열 (2016.02~2021.02)</li>
              <li>한국디지털직업전문학교 웹풀스택 과정 (2022.12~2023.06)</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
