import { Outlet } from "react-router-dom";
import NavbarDefault from "./NavbarDefault";

function Layout() {
  return (
    <div>
      <NavbarDefault />
      <Outlet />
    </div>
  );
}
export default Layout;
