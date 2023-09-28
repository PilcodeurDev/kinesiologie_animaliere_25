import "./css/Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
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
        <div className="bg-teal-600 rounded-xl relative h-96 -left-10 overflow-hidden">
          <div className="circle bg-teal-700 absolute z-0 -left-96 -top-[850px]"></div>
          <h2 className="flex justify-center py-12 relative z-10">
            La kinésiologie animalière
          </h2>
          <div className="px-12 ml-64 mb-12 ">
            Retrouver l'harmonie intérieure de votre animal grâce à la
            libération émotionelle en profondeur.
          </div>
          <div className="absolute right-16 z-10">
            <Link
              className=" relative px-4 py-2 border hover:border-2 rounded-full text-sm right-0"
              to="/la_kinésiologie"
            >
              En savoir plus{" "}
              <FontAwesomeIcon className="ml-1" icon={faArrowRight} />
            </Link>
          </div>
          <div className="circle bg-teal-700 absolute z-0 -right-96 -bottom-[850px]"></div>
        </div>
        {/* 2eme box */}
        <div className=" bg-gray-800 rounded-xl relative h-96 left-20 overflow-hidden">
          <h2 className="flex justify-center py-12 relative ">travail sur</h2>
          <div className="px-12 ml-64 mb-12 ">Animation JS liste probleme</div>
        </div>
      </section>
      <footer className="p-12"></footer>
      {/* Footer  */}
    </div>
  );
}
