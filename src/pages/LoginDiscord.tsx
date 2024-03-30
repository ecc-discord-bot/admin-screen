import { FaDiscord } from "react-icons/fa";

export const LoginDiscord = () => {

  return (
    <>
      <h1 className="flex justify-center  text-4xl mt-32 font-bold font-serif">ログイン</h1>
      <div className="flex justify-center mt-36">
      <button className="flex w-72 rounded-3xl border-2 border-gray-300 shadow-md">
        <div className="my-1 mx-6 bg-[#5865F2] p-[2px] rounded-lg text-white"><FaDiscord className="size-6"/></div>
        <a className="my-auto mx-10 font-serif">Discord</a>
      </button>
      </div>
    </>
  );
};

