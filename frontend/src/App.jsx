/**
 * The external imports
 */
import { Routes, Route } from "react-router-dom";

/**
 * The internal imports
 */
import "./components/css/App.css";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signin from "./components/pages/Signin";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
