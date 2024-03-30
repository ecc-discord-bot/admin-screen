import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// アニメーションの定義
import "../animation/registration/Animation";
import "../animation/registration/animation.css";

// jQueryのdropプラグインの型定義を拡張
declare global {
  interface JQuery {
    drop(): JQuery;
  }
}

// Registrationコンポーネントの定義
const Registration: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sendName] = useState<{ name: string }>(location.state || { name: "" });

  useEffect(() => {
    // ページにアクセスしたときに名前がなければ/termsにリダイレクト
    if (!sendName.name) {
      navigate("/terms");
    }

    // dropプラグインを適用
    $("h1").drop();
  }, [sendName.name, navigate]);

  return (
    <>
      <div className="flex h-full w-full text-purple-300 justify-center">
        <h1 className="m-0 p-0 text-xl md:text-5xl lg:text-7xl">ようこそIoT部へ!！</h1>
      </div>
    </>
  );
};

export default Registration;
