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
  const [sendName] = useState<{ className: string }>(
    location.state || { className: "" },
  );

  useEffect(() => {
    // ページにアクセスしたときに名前がなければ/termsにリダイレクト
    fetch("/app/userinfo",{
      "method" : "GET"
    }).then((res) => {
      res.json().then((data) => {
        var user = data["user"];
        //同意済みなら登録画面に飛ばす
        console.log(user);
        if (user["Is_agreed"]) {
          //同意済みなら return
          return;
        }

        //それ以外ならログインさせる
        navigate("/login");
      })

      if (res.status != 200) {
        navigate("/login");
      }
    })
    // dropプラグインを適用
    $("h1").drop();
  }, [sendName.className, navigate]);

  return (
    <>
      <div className="flex h-full w-full text-purple-300 justify-center display:none">
        <h1 className="m-0 p-0 text-xl md:text-5xl lg:text-7xl">ようこそIoT部へ!!</h1>
        <a href=""></a>
      </div>
    </>
  );
};

export default Registration;
