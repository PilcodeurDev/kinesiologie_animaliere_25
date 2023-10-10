import "../css/App.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <section className=" w-2/4 h-full m-auto">
        <div className="w-full border-t-4 border-slate-200 bg-gray-800">
          <h1 className="py-5 pl-9 text-3xl">Connection</h1>
        </div>
        <div className="w-full bg-gray-800">
          <container className="w-10/12 ">
            <div className=" pt-5 w-3/4 m-auto">
              <div className="pb-5">
                <p className="pb-2">Identifiant :</p>
                <form
                  action=""
                  className="w-full h-9 border rounded bg-gray"
                ></form>
              </div>
              <div>
                <p className="pb-2">Mot de passe :</p>
                <form
                  action=""
                  className="w-full h-9 border rounded bg-gray"
                ></form>
                <div className="pt-3">
                  <Link to="/signin" className="lien">
                    Identifiant ou mot de passe oublié ?
                  </Link>
                </div>
                <p className=" pt-2">
                  Pas d’identifiant de compte ?
                  <Link to="/signin" className="pl-1 lien">
                    Créer un compte
                  </Link>
                </p>
              </div>
              <button className=" my-14 w-full h-9 rounded bg-gradient-to-r from-emerald-500 to-teal-800">
                <p className="font-bold">Se Connecter</p>
              </button>
            </div>
          </container>
        </div>
      </section>
    </>
  );
}
