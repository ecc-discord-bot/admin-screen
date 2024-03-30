import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Terms } from "./pages/terms";
import { LoginDiscord } from "./pages/LoginDiscord";    // Discordログイン
import { LoginOutlook } from "./pages/LoginOutlook";    // Outlookログイン

export const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Terms />}></Route> */}
          {/* <Route path="/" element={<LoginDiscord />}></Route> */}
          <Route path="/" element={<LoginOutlook />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
