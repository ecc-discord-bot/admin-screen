import LoginBtn from "../components/LoginBtn";
// ログインアイコン
import { BsDiscord } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
    // TODO: ログインapiにリクエスト送る処理(仮置き)
    try {
      // const response = await fetch(
      //   `http://localhost:3000/auth/discord/login`,
      // );
      // if (response.ok) {
      navigate("/terms", { state: { path: "/login" } });
      // }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <main className="size-full bg-white text-black">
      <h1 className="pt-24 text-center text-2xl tracking-widest md:text-3xl lg:text-5xl">
        IoT入部届け
      </h1>
      <div className="mt-24 flex w-full justify-center">
        <LoginBtn
          name="discord"
          icon={<BsDiscord color="blue" size={36} />}
          onClick={() => handleClick()}
        />
      </div>
    </main>
  );
};

export default Login;
