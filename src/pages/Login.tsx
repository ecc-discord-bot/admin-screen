import React, { useEffect, useState } from "react";
import LoginBtn from "../components/LoginBtn";
// ログインアイコン
import { BsDiscord } from "react-icons/bs";
import microsoft from "../assets/microsoft.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  enum Auth {
    discord,
    microsoft,
  }
  const [auth, setAuth] = useState<boolean[]>([false, false]);

  const handleClick = async (authType: Auth) => {
    // TODO: ログインapiにリクエスト送る処理(仮置き)
    try {
      // const response = await fetch(
      //   `http://localhost:3000/auth/${Auth[authType]}/login`,
      // );
      if (true) {
        const updatedAuth = [...auth];
        updatedAuth[authType] = true;
        setAuth(updatedAuth);
      } else {
        // console.error("Login failed:", response.status);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {
    // 全ての認証を終えたか確認
    const allTrue = auth.every((value) => value === true);
    // auth のすべての要素が true になった場合の処理
    if (allTrue) navigate("/terms");
  }, [auth]);

  return (
    <main className="size-full bg-white text-black">
      <h1 className="pt-24 text-center text-2xl tracking-widest md:text-3xl lg:text-5xl">
        IoT入部届け
      </h1>
      <div className="mt-24 flex w-full justify-center">
        <LoginBtn
          name="discord"
          icon={<BsDiscord color="blue" size={36} />}
          auth={auth[Auth.discord]}
          onClick={() => handleClick(Auth.discord)}
        />
      </div>
      <div className="mt-24 flex w-full justify-center">
        <LoginBtn
          name="microsoft"
          icon={<img src={microsoft} alt="Microsoft" />}
          auth={auth[Auth.microsoft]}
          onClick={() => handleClick(Auth.microsoft)}
        />
      </div>
    </main>
  );
};

export default Login;
