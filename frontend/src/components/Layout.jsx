/**
 * The external imports
 */
import { Outlet } from "react-router-dom";

/**
 * The internal imports
 */
import NavbarDefault from "./NavbarDefault";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <NavbarDefault />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Layout;
