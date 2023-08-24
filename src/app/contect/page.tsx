export default function Contect() {
  return (
    <main className="mt-[20%] lg:mt-[8%] lg:max-w-3xl mx-auto w-full h-screen animate-[intro_1s]">
      <div className="h-full">
        <h1 className="ml-5 pt-5 pb-10 text-4xl font-bold">Contect</h1>
        <div className="w-full h-[50%] flex items-center justify-center">
          <p className="text-2xl bg-gray-200 p-10 rounded-md">
            Phone : 010-2419-6696 <br />
            <br />
            Email : endyd9@naver.com <br />
            <br />
            Github :{" "}
            <a
              href="https://github.com/endyd9"
              className="text-2xl text-blue-900 underline"
            >
              깃허브 바로가기
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
