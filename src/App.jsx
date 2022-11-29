import { useState, useEffect } from "react";
import "./App.css";
import AppNav from "./components/AppNav";
// import newsData from "./assets/data/news.json";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";

import { ArticlesContext } from "./contexts";
import SectionPage from "./pages/SectionPage";

import axios from "axios";

// useContext -- allows a child component to recieve information from any parent component that specifies context
// createContext --

function App() {
  const [allArticles, setAllArticles] = useState([]);
  // const [allSearchArticles, setAllSearchArticles] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  
  const callAPI = async () => {
    let response = await axios.get(
      "http://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=50"
    );

    const apiArticles = response.data.hits.map((article, index) => {
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
    setAllArticles(apiArticles)
  };

  useEffect(() => {
    callAPI()
  }, []);

  function getOneArticle(index) {
    return allArticles[index];
  }

  const handleSearch = (event) => {
    const userInput = event.target.value;
    setSearchTitle(userInput);
  };

  const getSearchArticle = async () => {
    let response = await axios.get(
      "http://hn.algolia.com/api/v1/search_by_date",
      {
        params: {
          query: `${searchTitle}`,
          tags: "story",
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
    setAllArticles(apiArticles);
  };

  useEffect(() => {
    getSearchArticle()
  }, [searchTitle]); 

  return (
    <div className="App">
      <ArticlesContext.Provider value={allArticles}>
        <AppNav handleSearch={handleSearch}   />

        <Router>
          <Routes>
            <Route path="/" element={<HomePage articles={allArticles} />} />
            <Route
              path="/article/:articleID"
              element={<ArticlePage getArticle={getOneArticle} />}
            />
            <Route path="/sections/:section_tag" element={<SectionPage />} />
          </Routes>
        </Router>
      </ArticlesContext.Provider>
    </div>
  );
}

export default App;
