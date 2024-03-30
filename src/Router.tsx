import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Terms } from "./pages/Terms";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import { useEffect } from "react";

export const Routers = () => {
  useEffect(() => {
    if (window.location.pathname === "/") {
      window.location.pathname = "/login";
    }
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
