import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Signin() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  function handleEmailInput(e) {
    setEmailInput(e.target.value);
  }
  function handlePasswordInput(e) {
    setPasswordInput(e.target.value);
  }
  function handleFirstNameInput(e) {
    setFirstNameInput(e.target.value);
  }
  function handleLastNameInput(e) {
    setLastNameInput(e.target.value);
  }
  function handlePhoneInput(e) {
    setPhoneInput(e.target.value);
  }

  return (
    <>
      <section className=" w-2/4 h-full m-auto">
        <div className="w-full border-t-4 border-slate-200 bg-gray-800">
          <h1 className="py-5 pl-9 mb-2 text-3xl">Créer votre identifiant</h1>
        </div>
        <div className="w-full mb-2 bg-gray-800">
          <container className="w-10/12 ">
            <div className=" py-6 w-3/4 m-auto">
              <p className="pb-7 font-bold">Compte utilisateur</p>
              {/* Email */}
              <div className="mb-7">
                <form action="">
                  <label htmlFor="Email">Email</label>
                  <input
                    type="text"
                    id="Email"
                    value={emailInput}
                    onChange={handleEmailInput}
                    className="w-full h-9 border rounded bg-gray px-2 mt-2"
                    autoFocus
                  />
                </form>
              </div>
              {/* Password */}
              <div>
                <form action="">
                  <label htmlFor="password">Mot de passe</label>
                  <input
                    type="password"
                    id="password"
                    value={passwordInput}
                    onChange={handlePasswordInput}
                    className="w-full h-9 border rounded bg-gray px-2 my-2"
                  />
                </form>
                <div className="pt-3">
                  <p className="pb-2">Conseils pour un mot de passe sécurisé</p>
                  {/* condition a mettre en place en fonction du state du champs passworld*/}
                  <div className="flex items-center h-6">
                    <FontAwesomeIcon
                      className="p-1 border border-lime-400 rounded-full"
                      icon={faCheck}
                      size="xs"
                      style={{ color: "#1ad917" }}
                    />
                    <span className="pl-2 pr-7 text-xs">AaBbCc</span>
                    <FontAwesomeIcon
                      className=""
                      icon={faCheck}
                      bounce
                      size="xs"
                      style={{ color: "#ebebeb" }}
                    />
                    <span className="pl-2 pr-7 text-xs">123#&$</span>
                    <FontAwesomeIcon
                      className=""
                      icon={faCheck}
                      bounce
                      size="xs"
                      style={{ color: "#ebebeb" }}
                    />
                    <span className="pl-2 pr-7 text-xs">
                      min. 12 caractères
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </container>
        </div>
        <div className="w-full bg-gray-800">
          <container className="w-10/12 ">
            <div className=" py-6 w-3/4 m-auto">
              <p className="pb-5 font-bold">Informations personnelles</p>
              {/* titre */}
              <fieldset className="mb-7">
                <legend className="pb-1">Titre</legend>
                <div className="flex mt-2">
                  <div className="mr-10">
                    <input
                      type="radio"
                      name="title"
                      id="titleMadame"
                      value="Madame"
                      className="mr-2"
                    />
                    <label htmlFor="titleMadame">Madame</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="title"
                      id="titleMonsieur"
                      value="Monsieur"
                      className="mr-2"
                    />
                    <label htmlFor="titleMonsieur">Monsieur</label>
                  </div>
                </div>
              </fieldset>
              {/* prenom */}
              <div className="mb-7">
                <form action="">
                  <label htmlFor="firstName">Prénom</label>
                  <input
                    type="text"
                    id="FirstName"
                    value={firstNameInput}
                    onChange={handleFirstNameInput}
                    className="w-full h-9 border rounded bg-gray px-2 mt-2"
                  />
                </form>
              </div>
              {/* nom de famille */}
              <div className="mb-7">
                <form action="">
                  <label htmlFor="lastName">Nom de famille</label>
                  <input
                    type="text"
                    id="LastName"
                    value={lastNameInput}
                    onChange={handleLastNameInput}
                    className="w-full h-9 border rounded bg-gray px-2 mt-2"
                  />
                </form>
              </div>
              {/* pays */}
              <div className="pb-7">
                {" "}
                <label htmlFor="country-select">Pays</label>
                <select
                  name="country"
                  id="country-select"
                  className="w-full h-9 border rounded bg-gray px-2 mt-2"
                >
                  {/* itération sur une liste prédéfini */}
                  <option value="">Choisir un pays</option>
                  <option value="france">France</option>
                  <option value="suisse">Suisse</option>
                  <option value="Angleterre">Angleterre</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>
              {/* téléphone */}
              <label htmlFor="phone">Téléphone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={phoneInput}
                onChange={handlePhoneInput}
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                className="w-full h-9 border rounded bg-gray px-6 mt-2"
              />
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
