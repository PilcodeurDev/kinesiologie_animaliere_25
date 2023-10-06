import "../css/App.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <section className=" w-2/4 h-full">
        <div className="w-full border-t-4 border-slate-200 bg-gray-800">
          <h1 className="py-5 pl-9 text-3xl">Connection</h1>
        </div>
        <div className="w-full bg-gray-800">
          <container className="w-10/12">
            <div className=" pt-5 w-3/4">
              <div className="pb-5">
                <p className="pb-2">Identifiant :</p>
                <form action="" className="w-full h-9 border rounded"></form>
              </div>
              <div className="pb-5">
                <p className="pb-2">Mot de passe :</p>
                <form action="" className="w-full h-9 border rounded"></form>
                <p className=" pt-2 italic text-blue-600">
                  identifiant ou mot de passe oublié ?
                </p>
                <p className=" pt-2">
                  Pas d’identifiant de compte ?
                  <Link to="/signin" className="italic text-blue-600">
                    Créer un compte
                  </Link>
                </p>
              </div>
              <button className=" my-14 w-full h-9 border rounded">
                <Link>Se Connecter</Link>
              </button>
            </div>
          </container>
        </div>
      </section>
    </>
  );
}
