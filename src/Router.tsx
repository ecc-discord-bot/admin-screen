import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Terms } from "./pages/Terms";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import { useEffect } from "react";

export const Routers = () => {
  useEffect(() => {
    document.title = "IOT部";
    
    // url直打ちでアクセスしたときにログインページにリダイレクト
    if (window.location.pathname != "/") {
      return;
    }
    fetch("/app/userinfo",{
      "method" : "GET"
    }).then((res) => {
      console.log(res.status);
      //ログインしているか
      if (res.status == 200) {
        //新しいトークンを取得
        fetch("/app/refresh", {
            method: "POST",
        }).then((req) => {
            //失敗したとき戻る
            if (req.status != 200) {
              //ログインに飛ばす
              console.log("ログインへ遷移します");
              window.location.pathname = "/login";
              return;
            }
            
            //更新を確定する
            fetch("/app/refreshs", {
                method: "POST",
            }).then((req) => {
                //失敗したとき戻る
                if (req.status != 200) {
                  //ログインに飛ばす
                  console.log("ログインへ遷移します");
                  window.location.pathname = "/login";
                  return;
                }

                //登録画面に飛ばす
                console.log("登録画面へ遷移します");
                window.location.pathname = "/terms";
            })
        })
      } else {
        //ログインに飛ばす
        window.location.pathname = "/login";
      }
    })
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/terms" element={<Terms />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
