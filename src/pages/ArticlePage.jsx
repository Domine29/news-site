import React from "react";
import { useParams } from "react-router-dom";
import Article from "../components/Article";

export default function ArticlePage({ getArticle }) {
  let { articleID } = useParams();
  const article = getArticle(articleID-1)

  return (
    <div>
      <Article {...article} />
    </div>
  );
}
