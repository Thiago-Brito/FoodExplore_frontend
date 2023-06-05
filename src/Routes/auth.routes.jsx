import { Routes, Route } from "react-router-dom";

import { SingIn } from "../pages/SingIn";
import { SingUp } from "../pages/SingUp";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/register" element={<SingUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
