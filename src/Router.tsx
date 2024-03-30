import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Terms } from "./pages/terms";
import { LoginDiscord } from "./pages/LoginDiscord";

export const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Terms />}></Route> */}
          <Route path="/" element={<LoginDiscord />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
