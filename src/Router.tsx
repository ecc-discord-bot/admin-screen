import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Terms } from "./pages/Terms";

export const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Terms />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
