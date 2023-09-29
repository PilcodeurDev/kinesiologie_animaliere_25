import "./css/Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const data = [
    { word: "Frustration" },
    { word: "angoisse" },
    { word: "peur" },
    { word: "tristesse" },
    { word: "hyperactivité" },
    { word: "agrésivité" },
    { word: "turbulant" },
    { word: "douleur" },
    { word: "aboiement" },
  ];

  return (
    <div className="container">
      {/* Navbar  */}
      <section>
        <div className="banner">
          <h1>Kinésiologie Animalière 25</h1>
        </div>
      </section>
      <section>
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
                className=" relative px-4 py-2 border hover:border-2 rounded-full text-sm right-0"
                to="/la_kinésiologie"
              >
                En savoir plus{" "}
                <FontAwesomeIcon className="ml-1" icon={faArrowRight} />
              </Link>
            </div>
          </div>
          <div className="circle bg-teal-700 absolute z-0 -right-96 -bottom-[850px]"></div>
        </div>
        {/* 2eme box */}
        <div className=" bg-gray-800 rounded-3xl relative h-60 left-20 -top-24 overflow-hidden z-10">
          <h2 className=" px-14 pt-6 relative ">travail</h2>
          <h2 className=" px-14 pb-8 relative ">sur</h2>
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
      </section>
      <footer className="p-12"></footer>
      {/* Footer  */}
    </div>
  );
}
