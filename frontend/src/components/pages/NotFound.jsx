import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container w-1/2 mx-auto">
      <p className="text-4xl font-semibold text-center pt-10">
        Cette page n'exite pas 🤖
      </p>
      <Link to="/">
        <button
          type="submit"
          className="my-14 w-full h-9 mx-auto rounded bg-gradient-to-r from-emerald-500 to-teal-800 font-bold text-white"
        >
          Page d'acceuil
        </button>
      </Link>
    </div>
  );
}
export default NotFound;
