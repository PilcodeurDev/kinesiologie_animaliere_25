/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/**
 * The external imports
 */
import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
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
  );
}
export default ArticleCard;
