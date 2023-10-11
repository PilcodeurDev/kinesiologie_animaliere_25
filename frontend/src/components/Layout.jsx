/**
 * The external imports
 */
import { Outlet } from "react-router-dom";

/**
 * The internal imports
 */
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
