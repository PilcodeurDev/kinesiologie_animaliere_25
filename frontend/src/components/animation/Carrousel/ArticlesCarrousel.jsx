/* eslint-disable react/prop-types */
/**
 * The internal imports
 */
import "./ArticlesCarrousel.css";
import { articleImages } from "../../../imageManager";
import ArticleCard from "../../ArticleCard";

const articlesData = [
  {
    id: 1,
    title: "Comment sociabiliser mon animal pour vivre en communauté",
    img: articleImages.article_1,
  },
  {
    id: 2,
    title:
      "Les 10 gestes simples pour améliorer le bien-être de votre animal de compagnie",
    img: articleImages.article_2,
  },
  {
    id: 3,
    title: "Les projets de réhabilitation pour animaux sauvages en danger",
    img: articleImages.article_3,
  },
  {
    id: 4,
    title:
      "Le bien-être des animaux de ferme : De l'élevage traditionnel à l'agriculture durable",
    img: articleImages.article_4,
  },
  {
    id: 5,
    title: "Comment prévenir les carries et le tartre de mon chien",
    img: articleImages.article_5,
  },
  {
    id: 6,
    title:
      "La communication animale : Comprendre les besoins de nos compagnons",
    img: articleImages.article_6,
  },
  {
    id: 7,
    title: "L'importance de l'éducation en faveur du bien-être animal",
    img: articleImages.article_7,
  },
  {
    id: 8,
    title: "Les méridients sacrés chez le chien",
    img: articleImages.article_8,
  },
];

function renderArticleCards(articles, scrollDirection) {
  return (
    <div className={`flex ${scrollDirection}`}>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}

function ArticlesCarrousel(props) {
  const scrollDirection = props.fromLeftToRight
    ? "slider-article"
    : props.fromRightToLeft
    ? "slider-article-invers"
    : "";

  return (
    <div className="flex items-center">
      {renderArticleCards(articlesData, scrollDirection)}
      {renderArticleCards(articlesData, scrollDirection)}
    </div>
  );
}
export default ArticlesCarrousel;
