import React from "react";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArticlesContext } from "../contexts";
import ArticleList from "../components/ArticleList";
import axios from "axios";

export default function SectionPage() {
  const { section_tag } = useParams();
  const [allSectionArticles, setAllSectionArticles] = useState([]);

  const getSectionArticles = async () => {
    let response = await axios.get(
      "http://hn.algolia.com/api/v1/search_by_date",
      {
        params: {
          tags: `${section_tag}`,
          hitsPerPage: 50
          // query: ('computer')
        },
      }
    );

    let apiArticles = response.data.hits.map((article, index) => {
      return {
        key: index,
        id: index + 1,
        title: article.title,
        createdDate: article.created_at,
        url: article.url,
        author: article.author,
        objectID: article.objectID,
        tags: article._tags,
      };
    });
    setAllSectionArticles(apiArticles);
  };

  useEffect(() => {
    getSectionArticles();
  }, [section_tag]);

  return (
    <div>
      SectionPage with tag {section_tag}
      <ArticleList articles={allSectionArticles} />
    </div>
  );
}
