import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// クラス名ファイル
import classNameList from "../classNameList.json";

type Classes = {
    class: {
        [department: string]: {
            [key: string]: string;
        };
    };
};

export const Terms = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [selected, setSelected] = useState<boolean>(false);
    const [className, setClassName] = useState<string>("");
    const [Name, setName] = useState<string>("");
    const [loading, setLoading] = useState(true);
    const [sendLogin] = useState<{ path: string }>(
        location.state || { path: "" },
    );
    const data: Classes = classNameList;

    useEffect(() => {
        if (!loading) {
            return;
        }

        try {
            // url直打ちでアクセスしたときにログインページにリダイレクト
            fetch("/app/userinfo", {
                "method": "GET"
            }).then((res) => {
                console.log(res.status);
                res.json().then((data) => {
                    var user = data["user"];
                    //同意済みなら登録画面に飛ばす
                    console.log(user);
                    if (user["Is_agreed"]) {
                        navigate("/registration", { state: { className: user["Class"] } });
                        return;
                    }
                })

                if (res.status != 200) {
                    navigate("/login");
                }
            })
        } catch (error) {
            console.log(error);
        }

        setLoading(false);
    }, [loading, navigate]);

    // 次へ進むボタンが押されたときの処理
    const next = async () => {
        if (!selected && className === "" && Name == "") {
            alert("クラスを入力してください\n同意してください\n氏名を入力してください");
        } else if (className === "") {
            alert("クラスを入力してください");
        } else if (!selected) {
            alert("同意してください");
        } else if (Name === "") {
            alert("氏名を入力してください")
        } else {

            let found = false; // クラス名が見つかったかどうかのフラグ

            for (const department in data.class) {
                for (const key in data.class[department]) {
                    if (data.class[department][key] === className) {
                        console.log("一致するものがありました");
                        found = true; // 見つかったらフラグをtrueに設定
                        break;
                    }
                }
                if (found) break;
            }
            // 一致するものが見つからなかった場合のみアラートを表示
            if (!found) {
                alert("クラスが存在しません");
            } else {

                // const response = await fetch(
                //   // TODO: 登録？
                //   `http://localhost:3000/`,
                // );
                const req = await fetch("/app/agree", {
                    method: "POST",
                    body: JSON.stringify({
                        "Class": className,
                        "Agree": true,
                        "Signature" : Name
                    })
                })

                const res = await req.json()

                console.log(res);
                // if (response.ok) {
                navigate("/registration", { state: { className: className } });
                // } else {
                //   console.error("Registration failed:", response.status);
                //   navigate("/login");
                // }
            }
        }
    };

    return (
        <section className="font-meiryo flex justify-center bg-gray-50">
            <div className="text-custom-black mx-[10%] my-[5%] w-10/12 bg-white p-[5%] shadow-md shadow-slate-200">
                <h1 className="mb-16 text-center text-4xl font-bold">同意書</h1>
                {/* 第1条 */}
                <section>
                    <h2 className="mb-4 mt-16 font-bold">第一条（名誉の保持）</h2>
                    <p>他者に対してIoT部の名誉を損なう行為をしてはならない。</p>
                </section>
                {/* 第2条 */}
                <section>
                    <h2 className="mb-4 mt-16 font-bold">第二条（学業の優先）</h2>
                    <p>
                        授業の総合出席率を80%以上維持し、進級・卒業単位を確保しなければならない。
                    </p>
                </section>
                {/* 第3条 */}
                <section>
                    <h2 className="mb-4 mt-16 font-bold">第三条（IoT Laboについて）</h2>
                    <p>
                        IoT
                        Labo（3501-3502教室）は授業時間外に「IoT部が活動する」名目で顧問が予約をしている。
                        よって、IoT部員であれば授業時間外でも使用することが可能となる。
                    </p>
                    <p>※学内イベントで使用する場合を除く</p>
                </section>
                {/* 第4条 */}
                <section>
                    <h2 className="mb-4 mt-16 font-bold">第四条（備品について）</h2>
                    <ol className="m-6 list-outside list-disc">
                        <li className="py-1">
                            <div className="flex items-start">
                                <span className="whitespace-pre-line">
                                    IoTラボに配置してある備品は使用後、所定の位置に戻し原状復帰をしなければならない。
                                </span>
                            </div>
                        </li>
                        <li className="py-1">
                            <div className="flex items-start">
                                <span className="whitespace-pre-line">
                                    チップソー、レーザーカッターなどの怪我の恐れがある機材は教員または部長の許可なく使用することはできない。
                                </span>
                            </div>
                        </li>
                        <li className="py-1">
                            <div className="flex items-start">
                                <span className="whitespace-pre-line">
                                    機材や工具類を使用する際は刃や熱に十分注意すること。
                                </span>
                            </div>
                        </li>
                        <li className="py-1">
                            <div className="flex items-start">
                                <span className="whitespace-pre-line">
                                    不備が無い場合を除いて、使用者が怪我をした際にIoT部及び学校は一切の責任を負わないものとする。
                                </span>
                            </div>
                        </li>
                    </ol>
                </section>
                {/* 第5条 */}
                <section>
                    <h2 className="mb-4 mt-16 font-bold">第五条（会費について）</h2>
                    <p>
                        IoT部に所属する者には前期（4月1日-9月30日）後期（10月1日-3月31日）ごとに以下の会費を徴収する。
                    </p>
                    <ol className="m-6 list-outside list-disc">
                        <li className="py-1">
                            <div className="flex items-start">
                                <span className="whitespace-pre-line">1年生：1,000円</span>
                            </div>
                        </li>
                        <li className="py-1">
                            <div className="flex items-start">
                                <span className="whitespace-pre-line">
                                    1年生以外：2,000円、ただし前後期分をまとめて支払った場合は1,000円を返還する。
                                </span>
                            </div>
                        </li>
                        <li className="py-1">
                            <div className="flex items-start">
                                <span className="whitespace-pre-line">
                                    会費は同意書を提出した後、部活動に参加した際に部長が個人ごとに徴収する。
                                </span>
                            </div>
                        </li>
                    </ol>
                    <p>
                        徴収した会費の用途は月例会での部員による投票の下、過半数の票を集めた場合に使用される。
                    </p>
                </section>
                {/* 第6条 */}
                <section>
                    <h2 className="mb-4 mt-16 font-bold">第六条（体験入部について）</h2>
                    <p>
                        体験入部者は第5条の会費を支払う義務は無く、部員と同等にIoT Laboを使用できる。
                    </p>
                    <p>
                        ただし、IoT Laboに入室できる体験入部者は最大5名、かつ先着順とする。
                    </p>
                </section>
                {/* 第7条 */}
                <section>
                    <h2 className="mb-4 mt-16 font-bold">第七条（規約違反者の処分）</h2>
                    <p>
                        上記の規約を常習的に違反する者には顧問・部長・副部長（以下、管理者とする）から注意勧告を促す。
                    </p>
                    <p>
                        注意勧告後、同様の違反を繰り返すようであれば管理者の話し合いの下、強制退部処分を施す。
                    </p>
                </section>
                {/* 第8条 */}
                <section>
                    <h2 className="mb-4 mt-16 font-bold">第八条（規約改訂について）</h2>
                    <p>
                        同意書の規約は管理者の話し合いの下、追記・改訂する場合がある。
                    </p>
                    <p>
                        その際、部員に再周知し同意書の再提出を求める。
                    </p>
                </section>
                {/* ここまで */}

                <div className="mt-10">
                    <section className="mt-5 flex justify-center">
                        <input
                            type="text"
                            placeholder="クラス (例: IE2A"
                            className="border-2"
                            onChange={(e) => {
                                setClassName(e.target.value);
                            }}
                        ></input>
                    </section>
                    <section className="mt-5 flex justify-center">
                        <input
                            type="text"
                            placeholder=" 氏名 (例: 山田 太郎"
                            className="border-2"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        ></input>
                    </section>
                </div>
                {/* 同意ボタン */}
                <section className="mt-5 flex justify-center">
                    <input
                        type="checkbox"
                        className="accent-blue-500"
                        id="agreement"
                        onChange={(e) => {
                            console.log(e.target.checked);
                            setSelected(e.target.checked);
                        }}
                    ></input>
                    <label className="ml-2" htmlFor="agreement">
                        上記の項目に同意し、IoT部に入部します。
                    </label>
                </section>
                <section className="mt-24 flex justify-end">
                    <button
                        className="w-24 rounded-md bg-blue-500 font-bold text-white"
                        onClick={next}
                    >
                        次へ進む
                    </button>
                </section>
            </div>
        </section>
    );
};
