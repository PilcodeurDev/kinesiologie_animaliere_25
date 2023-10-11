import { useState, useEffect } from "react";
import article_1 from "../../public/assets/images/article_1.jpg";
import article_2 from "../../public/assets/images/article_2.jpg";
import article_3 from "../../public/assets/images/article_3.jpg";
import article_4 from "../../public/assets/images/article_4.jpg";
import article_5 from "../../public/assets/images/article_5.jpg";
import article_6 from "../../public/assets/images/article_6.jpg";
import article_7 from "../../public/assets/images/article_7.jpg";
import article_8 from "../../public/assets/images/article_8.jpg";

const articlesData = [
  {
    id: 1,
    title: "Titre 1",
    img: article_1,
  },
  {
    id: 2,
    title: "Titre 2",
    img: article_2,
  },
  {
    id: 3,
    title: "Titre 3",
    img: article_3,
  },
  {
    id: 4,
    title: "Titre 4",
    img: article_4,
  },
  {
    id: 5,
    title: "Titre 5",
    img: article_5,
  },
  {
    id: 6,
    title: "Titre 6",
    img: article_6,
  },
  {
    id: 7,
    title: "Titre 7",
    img: article_7,
  },
  {
    id: 8,
    title: "Titre 8",
    img: article_8,
  },
];

function HomeArticles() {
  return <div>hello home articles</div>;
}
export default HomeArticles;
