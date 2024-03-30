import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

interface Props {
  name: string;
  icon: JSX.Element;
  auth: boolean;
  onClick?: () => void;
}

const LoginBtn: React.FC<Props> = ({ name, icon, auth, onClick }) => {
  const [isAuth, setIsAuth] = useState(auth);

  useEffect(() => {
    setIsAuth(auth);
  }, [auth]);

  return (
    <div className="absolute flex h-16 w-56 flex-row">
      <div className="w-40 capitalize leading-[4rem]">{name}でログイン</div>
      {/* チェックマーク */}
      {isAuth && (
        <div className="absolute -right-1 -top-2 flex">
          <FaCheck color="green" size={24} />
        </div>
      )}
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
