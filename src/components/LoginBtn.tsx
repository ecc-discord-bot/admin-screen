import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

interface Props {
  name: string;
  icon: JSX.Element;
  onClick?: () => void;
}

const LoginBtn: React.FC<Props> = ({ name, icon, onClick }) => {

  return (
    <div className="absolute flex h-16 w-56 flex-row">
      <div className="w-40 capitalize leading-[4rem]">{name}でログイン</div>
      <button
        onClick={onClick}
        className="flex size-16 items-center justify-center rounded-full border border-black bg-white"
      >
        {icon}
      </button>
    </div>
  );
};

export default LoginBtn;
