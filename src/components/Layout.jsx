import { Outlet } from "react-router";
import NavbarApp from "./NavbarApp";
import FooterApp from "./FooterApp";

const Layout = () => {
  return (
    <div className="min-h-screen bg-blue-950 text-white flex flex-col justify-between">
      <NavbarApp />
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 py-6">
        <Outlet />
      </main>
      <FooterApp />
    </div>
  );
};

export default Layout;