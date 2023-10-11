/**
 * The external imports
 */
import { useState } from "react";

/**
 * The internal imports
 */
import bg_air from "../../public/assets/images/bg_elem_0.jpg";
import bg_feu from "../../public/assets/images/bg_elem_1.jpg";
import bg_terre from "../../public/assets/images/bg_elem_2.jpg";
import bg_metal from "../../public/assets/images/bg_elem_3.jpg";
import bg_eau from "../../public/assets/images/bg_elem_4.jpg";

function ElementArray() {
  const elements = [
    {
      name: "air",
      texte:
        "Le Chien AIR aime la collectivité, la vie à plusieurs, le travail d'équipe. Il sait s'adapter à tout interlocuteur et trouver le juste partenaire, que ce soit dans le domaine amoureux ou professionnel. Hélas, il dépend un peu trop de l'autre pour exister. Il peut avoir une certaine sensibilité artistique.",
      bgImgTitle: bg_air,
      bgImgTexte: "",
    },
    {
      name: "feu",
      texte:
        "Le Chien FEU brille par son élégance. Il aime plaire. Mais attention, il est prêt à montrer les crocs s'il rencontre une personne mal intentionnée. Il est animé par un besoin d'idéal et rêve d'une société plus juste, plus égalitaire. Toujours affable, il sait charmer son entourage. On apprécie sa présence et ses conversations.",
      bgImgTitle: bg_feu,
      bgImgTexte: "",
    },
    {
      name: "terre",
      texte:
        "Le Chien TERRE est un pragmatique. A quoi bon les belles paroles si les actes ne suivent pas ! Ses conseils sont toujours pertinents. Et pour cause, il tourne toujours sept fois sa langue dans sa gueule avant de s'exprimer. Sa sagesse lui permet de fédérer, de rassembler des personnes aux profils pourtant bien différents. Avec son compagnon de vie, il peut se montrer très exigeant.",
      bgImgTitle: bg_terre,
      bgImgTexte: "",
    },
    {
      name: "métal",
      texte:
        "Le Chien METAL est, parmi les Chiens, le plus agressif. Il peut employer la manière forte pour obtenir gain de cause. Ses ennemis le savent et évitent de le provoquer. Mais avec celles et ceux qu'il aime, il sait être disponible et se plier en quatre si le besoin se fait ressentir. Il est peut-être un peu trop sérieux. Avec l'expérience, il apprend à devenir plus léger.",
      bgImgTitle: bg_metal,
      bgImgTexte: "",
    },
    {
      name: "eau",
      texte:
        "Le Chien EAU a l'art de cerner la psychologie humaine. Très observateur, il comprend très vite à qui il a affaire. Cette qualité l'amène à être très tolérant avec ses semblables. Cultivé, aimant les idées novatrices, il est très apprécié dans son travail. En amour, il peut être infidèle. Mais puisqu'il connaît le fonctionnement des Hommes et leurs faiblesses, il se refuse à toute culpabilité.",
      bgImgTitle: bg_eau,
      bgImgTexte: "",
    },
  ];

  const [hoveredElementIndex, setHoveredElementIndex] = useState(null);

  const handleMouseOver = (index) => setHoveredElementIndex(index);

  const handleMouseOut = () => setHoveredElementIndex(null);

  return (
    <div className="container mx-auto">
      <h2>L'élément de votre chien</h2>
      <div className="grid grid-cols-2 mt-20 h-[500px]">
        <div className="relative flex flex-col w-full">
          {elements.map((element, index) => (
            <div
              className="basis-1/5 w-full flex items-center"
              key={index}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={handleMouseOut}
            >
              {hoveredElementIndex === index && (
                <img
                  src={elements[index].bgImgTitle}
                  alt="élément de l'animal"
                  className="w-full h-[100px] object-cover object-bottom"
                />
              )}
              <p className="absolute left-5 text-4xl">
                {elements[index].name.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
        {hoveredElementIndex !== null && (
          <div className="w-full bg-slate-900">
            <div className=" pt-24 w-[80%] text-base/9 ">
              <p>{elements[hoveredElementIndex].texte}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default ElementArray;
