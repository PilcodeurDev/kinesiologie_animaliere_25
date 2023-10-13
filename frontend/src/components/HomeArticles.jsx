/**
 * The external imports
 */

/**
 * The internal imports
 */
import ArticlesCarrousel from "./animation/Carrousel/ArticlesCarrousel";

const fromLeftToRight = "slider-article";
const fromRightToLeft = "slider-article-invers";
function HomeArticles() {
  return (
    <div className="relative overflow-hidden z-10">
      <p className="absolute right-[530px]">Article du moment</p>
      <div className="h-40"></div>
      <ArticlesCarrousel fromLeftToRight={fromLeftToRight} />
      <div className="h-10"></div>
      <ArticlesCarrousel fromRightToLeft={fromRightToLeft} />
      <div className="absolute right-[530px]"></div>
    </div>
  );
}
export default HomeArticles;
