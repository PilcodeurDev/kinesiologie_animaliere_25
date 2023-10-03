import "./css/Home.css";
import alix from "../assets/alix_cheval.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const data = [
    { word: "anxiété" },
    { word: "réactivité" },
    { word: "peur" },
    { word: "marquage" },
    { word: "destruction" },
    { word: "aboiement" },
    { word: "tristesse" },
    { word: "fatigue" },
    { word: "protection" },
  ];

  return (
    <div className="container mx-auto px-24">
      {/* Navbar  */}
      <section>
        <div className="banner">
          <h1>Kinésiologie Animalière 25</h1>
        </div>
      </section>
      <section>
        <div>
          {/* 1er box */}
          <div className="bg-teal-600 rounded-3xl relative h-96 -left-10 overflow-hidden z-0">
            <div className="circle bg-teal-700 absolute z-0 -left-96 -top-[850px]"></div>
            <div className=" w-3/4 border-red-700">
              <h2 className="flex  py-12 relative z-10">
                La kinésiologie animalière
              </h2>
              <div className="pl-12 ml-48">
                Retrouver l'harmonie intérieure de votre animal grâce à la
                libération émotionelle en profondeur.
              </div>
              <div className="absolute right-16 bottom-28 z-10">
                <Link
                  className=" relative px-4 py-2 border rounded-full text-sm right-0  hover:border-2 hover:ring-inset hover:font-black"
                  to="/la_kinésiologie"
                >
                  En savoir plus
                  <FontAwesomeIcon
                    className="ml-1 rotate-45"
                    icon={faArrowRight}
                  />
                </Link>
              </div>
            </div>
            <div className="circle bg-teal-700 absolute z-0 -right-96 -bottom-[850px]"></div>
          </div>
          {/* 2eme box */}
          <div className=" bg-gray-800 rounded-3xl relative h-60 left-20 -top-24 overflow-hidden z-10">
            <h2 className=" px-14 pt-6 relative ">TRAVAIL</h2>
            <h2 className=" px-14 pb-8 relative ">SUR</h2>
            {/* animation caroussel */}
            <div className="flex words-slide">
              {data.map((probleme) => (
                <span
                  key="probleme.id"
                  className="border-linear-gradient p-[2px] mx-1 rounded-xl"
                >
                  <div className="word_bg px-7 py-2 rounded-xl">
                    <span className="word">{probleme.word}</span>
                  </div>
                </span>
              ))}
              {data.map((probleme) => (
                <span
                  key="probleme.id"
                  className="border-linear-gradient p-[2px] mx-1 rounded-xl"
                >
                  <div className="word_bg px-7 py-2 rounded-xl">
                    <span className="word">{probleme.word}</span>
                  </div>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="pb-50">
        <div className="container flex justify-between">
          <div>
            <img src={alix} alt="alix" />
          </div>
          <div>
            <div className="text-sm pb-4">Sur moi</div>
            <div className="text-3xl pb-4 w-[250px]">
              Plus de 12 ans d’expérience à travers une gamme diversifiée de
              domaines de psychologie
            </div>
            <div>
              J'exerce le métier de kinésiologue animalière. Après avoir exercé
              plusieurs années en tant qu'infirmière hospitalière, je suis
              retournée à mes aspirations d'enfant : aider les animaux.
              Passionnée par les médecines alternatives, mes animaux et moi même
              avons pu bénéficier de médecines douces, notamment de
              kinésiologie. Fascinée par cette méthode et les bénéfices que je
              voyais au quotidien, j'ai décidée de changer d'orientation
              professionnelle et me former à la kinésiologie animalière en
              Touraine, à l'école Âme Animale en 2021-2022.
            </div>
            <Link to="/qui_suis_je">
              À propos de alix{" "}
              <FontAwesomeIcon className="ml-1 rotate-45" icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>
      {/* Footer  */}
    </div>
  );
}
