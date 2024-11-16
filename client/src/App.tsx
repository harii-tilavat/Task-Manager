import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import TaskDetails from "./pages/TaskDetails";
import Trash from "./pages/Trash";
import Users from "./pages/Users";

function Layout() {
  const user = "123";
  const location = useLocation();

  return user ? (
    <div className="layout w-full h-screen flex flex-column md:flex-row ">
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block ">SIDEBAR</div>
      {/* MOBILE SIDEBAR */}
      <div className="layout-right flex-1 overflow-y-auto ">
        <div>NAVBAR</div>
        <div className="p-4 2xl:px-10 ">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
}

function App() {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6]">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to={"/dashboard"} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
          <Route path="/completed/:status" element={<Tasks />} />
          <Route path="/in-progress/:status" element={<Tasks />} />
          <Route path="/todo/:status" element={<Tasks />} />
          <Route path="/trashed" element={<Trash />} />
          <Route path="/team" element={<Users />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
