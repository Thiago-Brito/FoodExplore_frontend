import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Create } from "../pages/Create";
import { Edit } from "../pages/Edit";
import { Preview } from "../pages/Preview";
import { useAuth } from "../hooks/auth";
import { NotFound } from "../pages/NotFound";

export function AppRoutes() {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/preview/:id" element={<Preview />} />
      <Route path="*" element={<NotFound />} />

      {user.role == "admin" && <Route path="/edit/:id" element={<Edit />} />}
      {user.role == "admin" && <Route path="/create" element={<Create />} />}
    </Routes>
  );
}
