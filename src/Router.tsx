import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Terms } from "./pages/Terms";
import Registration from "./pages/Registration";

export const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/terms" element={<Terms />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
