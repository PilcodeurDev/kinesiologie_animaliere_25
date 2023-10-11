/**
 * The external imports
 */
import { Link } from "react-router-dom";

/**
 * The internal imports
 */
import article_1 from "../../../../public/assets/images/article_1.jpg";
import article_2 from "../../../../public/assets/images/article_2.jpg";
import article_3 from "../../../../public/assets/images/article_3.jpg";
import article_4 from "../../../../public/assets/images/article_4.jpg";
import article_5 from "../../../../public/assets/images/article_5.jpg";
import article_6 from "../../../../public/assets/images/article_6.jpg";
import article_7 from "../../../../public/assets/images/article_7.jpg";
import article_8 from "../../../../public/assets/images/article_8.jpg";
import "./ArticlesCarrousel.css";

const articlesData = [
  {
    id: 1,
    title: "Comment sociabiliser mon animal pour vivre en communauté",
    img: article_1,
  },
  {
    id: 2,
    title:
      "Les 10 gestes simples pour améliorer le bien-être de votre animal de compagnie",
    img: article_2,
  },
  {
    id: 3,
    title: "Les projets de réhabilitation pour animaux sauvages en danger",
    img: article_3,
  },
  {
    id: 4,
    title:
      "Le bien-être des animaux de ferme : De l'élevage traditionnel à l'agriculture durable",
    img: article_4,
  },
  {
    id: 5,
    title: "Comment prévenir les carries et le tartre de mon chien",
    img: article_5,
  },
  {
    id: 6,
    title:
      "La communication animale : Comprendre les besoins de nos compagnons",
    img: article_6,
  },
  {
    id: 7,
    title: "L'importance de l'éducation en faveur du bien-être animal",
    img: article_7,
  },
  {
    id: 8,
    title: "Les méridients sacrés chez le chien",
    img: article_8,
  },
];

function ArticlesCarrousel(props) {
  const scrollDirection = props.fromLeftToRight
    ? "slider-article"
    : props.fromRightToLeft
    ? "slider-article-invers"
    : "";

  return (
    <div className="flex items-center">
      <div className={`flex ${scrollDirection}`}>
        {articlesData.map((article) => (
          <div
            key={article.id}
            className="relative rounded-xl mx-2 h-52 w-48 bg-secondary"
          >
            <img
              src={article.img}
              alt="image de l'article"
              className="w-full h-1/2 rounded-t-xl"
            />
            <div>
              <p className="my-1 px-3 h-20 text-xxs">{article.title} </p>
              <div className=" h-10">
                <Link className="absolute right-3 bottom-3 h-14 w-14 border rounded-full flex items-center justify-center">
                  <p className="text-3xs font-bold">Lire l'article</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={`flex ${scrollDirection}`}>
        {articlesData.map((article) => (
          <div
            key={article.id}
            className="relative rounded-xl mx-2 h-52 w-48 bg-secondary"
          >
            <img
              src={article.img}
              alt="image de l'article"
              className="w-full h-1/2 rounded-t-xl"
            />
            <div>
              <p className="my-1 px-3 h-20 text-xxs">{article.title} </p>
              <div className=" h-10">
                <Link className="absolute right-3 bottom-3 h-14 w-14 border rounded-full flex items-center justify-center">
                  <p className="text-3xs font-bold">Lire l'article</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ArticlesCarrousel;
