import "./css/Home.css";
import alix from "../assets/alix_cheval.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const negativeWorlds = [
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

  const elements = [
    {
      name: "air",
      texte:
        "Le Chien AIR aime la collectivité, la vie à plusieurs, le travail d'équipe. Il sait s'adapter à tout interlocuteur et trouver le juste partenaire, que ce soit dans le domaine amoureux ou professionnel. Hélas, il dépend un peu trop de l'autre pour exister. Il peut avoir une certaine sensibilité artistique.",
      bgImgName: "",
      bgImgTexte: "",
    },
    {
      name: "feu",
      texte:
        "Le Chien de FEU brille par son élégance. Il aime plaire. Mais attention, il est prêt à montrer les crocs s'il rencontre une personne mal intentionnée. Il est animé par un besoin d'idéal et rêve d'une société plus juste, plus égalitaire. Toujours affable, il sait charmer son entourage. On apprécie sa présence et ses conversations.",
      bgImgName: "",
      bgImgTexte: "",
    },
    {
      name: "terre",
      texte:
        "Le Chien TERRE est un pragmatique. A quoi bon les belles paroles si les actes ne suivent pas ! Ses conseils sont toujours pertinents. Et pour cause, il tourne toujours sept fois sa langue dans sa gueule avant de s'exprimer. Sa sagesse lui permet de fédérer, de rassembler des personnes aux profils pourtant bien différents. Avec son compagnon de vie, il peut se montrer très exigeant.",
      bgImgName: "",
      bgImgTexte: "",
    },
    {
      name: "métal",
      texte:
        "Le Chien  METAL est, parmi les Chiens, le plus agressif. Il peut employer la manière forte pour obtenir gain de cause. Ses ennemis le savent et évitent de le provoquer. Mais avec celles et ceux qu'il aime, il sait être disponible et se plier en quatre si le besoin se fait ressentir. Il est peut-être un peu trop sérieux. Avec l'expérience, il apprend à devenir plus léger.",
      bgImgName: "",
      bgImgTexte: "",
    },
    {
      name: "eau",
      texte:
        "Le Chien EAU a l'art de cerner la psychologie humaine. Très observateur, il comprend très vite à qui il a affaire. Cette qualité l'amène à être très tolérant avec ses semblables. Cultivé, aimant les idées novatrices, il est très apprécié dans son travail. En amour, il peut être infidèle. Mais puisqu'il connaît le fonctionnement des Hommes et leurs faiblesses, il se refuse à toute culpabilité.",
      bgImgName: "",
      bgImgTexte: "",
    },
  ];

  return (
    <div className="container mx-auto px-24">
      {/* Navbar  */}
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
          <div className="bg-teal-600 rounded-3xl relative h-96 w-10/12 -left-10 overflow-hidden z-0">
            <div className="circle bg-teal-700 absolute z-0 -left-96 -top-[850px]"></div>
            <div className=" w-3/4 border-red-700">
              <h3 className="flex py-12 relative z-10">
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
            {/* animation caroussel */}
            <div className="flex words-slide">
              {negativeWorlds.map((probleme) => (
                <span
                  key="probleme.id"
                  className="border-linear-gradient p-[2px] mx-1 rounded-xl"
                >
                  <div className="word_bg px-7 py-2 rounded-xl">
                    <span className="word">{probleme.word}</span>
                  </div>
                </span>
              ))}
              {negativeWorlds.map((probleme) => (
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
      {/* 3eme section: alix */}
      <section className="about_area_3 relative">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="w-96 ml-20">
              <img src={alix} alt="alix" className="" />
            </div>
            <div className=" mr-48">
              <div className="relative z-50 bg-grey">
                <h3 className="sub-title pt-8 pb-4">SUR MOI</h3>
                <h3 className="text-3xl pb-4 w-[275px] tracking-wider ">
                  PLUS DE 12 ANS D'EXPÉRIENCE À TRAVERS UNE GAMME DIVERSIFIÉE DE
                  DOMAINES DE PSYCHOLOGIE
                </h3>
              </div>
              <div className=" pl-32 pt-6">
                <p className=" text-xs w-[300px]">
                  J'exerce le métier de kinésiologue animalière. Après avoir
                  exercé plusieurs années en tant qu'infirmière hospitalière, je
                  suis retournée à mes aspirations d'enfant: aider les animaux.
                  Passionnée par les médecines alternatives, mes animaux et moi
                  même avons pu bénéficier de médecines douces, notamment de
                  kinésiologie. Fascinée par cette méthode et les bénéfices que
                  je voyais au quotidien, j'ai décidée de changer d'orientation
                  professionnelle et me former à la kinésiologie animalière en
                  Touraine, à l'école Âme Animale en 2021-2022.
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
        <div className="grid grid-cols-2 pt-20">
          <div className="relative flex flex-col w-full h-80">
            <div className="  basis-1/5  w-full flex items-center">
              <p className=" absolute left-5 text-4xl">
                {elements[0].name.toUpperCase()}{" "}
              </p>
            </div>
            <div className="basis-1/5  w-full flex items-center">
              <p className=" absolute left-5 text-4xl">
                {elements[1].name.toUpperCase()}
              </p>
            </div>
            <div className="basis-1/5  w-full flex items-center">
              <p className=" absolute left-5 text-4xl">
                {elements[2].name.toUpperCase()}
              </p>
            </div>
            <div className="basis-1/5  w-full flex items-center">
              <p className=" absolute left-5 text-4xl">
                {elements[3].name.toUpperCase()}
              </p>
            </div>
            <div className="basis-1/5  w-full flex items-center">
              <p className=" absolute left-5 text-4xl">
                {elements[4].name.toUpperCase()}
              </p>
            </div>
          </div>
          <div className="w-full ">
            <div className="w-[80%] pt-16 text-base/7">
              <p>{elements[0].texte}</p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer  */}
    </div>
  );
}
