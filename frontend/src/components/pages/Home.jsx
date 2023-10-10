/* eslint-disable react/no-unescaped-entities */
import "../css/Home.css";
import alix from "../../assets/alix_cheval.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ElementArray from "../ElementArray";
import HomeArticles from "../HomeArticles";
import Carrousel from "../animation/Carrousel/Carrousel";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto px-24">
        {/*  1er section : La banner */}
        <section>
          <div className="banner">
            <h1>Kinésiologie Animalière 25</h1>
          </div>
        </section>
        {/* 2eme section : La Kinésiologie */}
        <section>
          <div>
            {/* 1er box */}
            <div className="bg-teal-600 rounded-3xl relative h-96 w-10/12 -left-10 overflow-hidden">
              <div className="circle bg-teal-700 absolute -left-96 -top-[850px]"></div>
              <div className=" w-3/4 border-red-700">
                <h3 className="flex py-12 pl-16 relative">
                  La kinésiologie animalière
                </h3>
                <div className="pl-12 ml-48 text-xl">
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
            <div className=" bg-gray-800 rounded-3xl relative h-60 w-10/12 left-20 -top-24 overflow-hidden z-10">
              <h3 className="px-14 pt-6 relative ">TRAVAIL</h3>
              <h3 className="px-14 pb-8 relative ">SUR</h3>
              <Carrousel />
            </div>
          </div>
        </section>
        {/* 3eme section: alix */}
        <section className="about_area_3 relative">
          <div className="container">
            <div className="grid grid-cols-2">
              <div className="w-96 ml-20">
                <img src={alix} alt="alix" className="" />
              </div>
              <div className=" mr-48">
                <div className="relative z-10 bg-gray">
                  <h3 className="sub-title pt-8 pb-4">SUR MOI</h3>
                  <h3 className="text-3xl pb-4 w-[275px] tracking-wider ">
                    PLUS DE 12 ANS D'EXPÉRIENCE À TRAVERS UNE GAMME DIVERSIFIÉE
                    DE DOMAINES DE PSYCHOLOGIE
                  </h3>
                </div>
                <div className=" pl-32 pt-6">
                  <p className=" text-xs w-[300px]">
                    J'exerce le métier de kinésiologue animalière. Après avoir
                    exercé plusieurs années en tant qu'infirmière hospitalière,
                    je suis retournée à mes aspirations d'enfant: aider les
                    animaux. Passionnée par les médecines alternatives, mes
                    animaux et moi même avons pu bénéficier de médecines douces,
                    notamment de kinésiologie. Fascinée par cette méthode et les
                    bénéfices que je voyais au quotidien, j'ai décidée de
                    changer d'orientation professionnelle et me former à la
                    kinésiologie animalière en Touraine, à l'école Âme Animale
                    en 2021-2022.
                  </p>
                  <div className="flex items-center justify-center w-32 h-32 -ml-2 pt-11">
                    <Link
                      to="/qui_suis_je"
                      className="flex items-center justify-center w-28 h-28 border rounded-full text-xs  text-teal-400"
                    >
                      <span className="font-bold">À propos de alix</span>
                      <FontAwesomeIcon
                        className="ml-1 rotate-45"
                        icon={faArrowRight}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 4eme section: element de votre animal */}
        <section>
          <h3>L'élément de votre chien</h3>
          <ElementArray />
        </section>
        {/* 5eme section: article du moment */}
        <section>
          <HomeArticles />
        </section>
        {/* Footer  */}
      </div>
    </div>
  );
}
