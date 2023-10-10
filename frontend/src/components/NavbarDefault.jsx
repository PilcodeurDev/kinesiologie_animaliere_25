import { Link } from "react-router-dom";
import logo_titre_ka25 from "../assets/logo_titre_ka25.jpg";

export default function NavbarDefault() {
  return (
    <header className="w-full h-18 bg-gray flex justify-between sticky top-0 z-50 px-14">
      <div className="flex">
        <Link to="/">
          <img
            src={logo_titre_ka25}
            alt="logo et titre kinésiologie Animalière 25"
            className=""
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center px-3 text-teal-600">
          <p className="px-3">La Kinésiologie</p>
          <p className="px-3">Qui Suis-Je</p>
          <p className="px-3">Réservation</p>
          <p className="px-3">Quizz</p>
          <p className="px-3">Blog</p>
        </div>
        <button className="h-8 px-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-800 ">
          <Link to="/login">Se Connecter</Link>
        </button>
      </div>
    </header>
  );
}
