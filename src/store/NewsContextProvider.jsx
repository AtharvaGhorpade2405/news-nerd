import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const NewsContext = createContext();

function NewsContextProvider({ children }) {
  let [articles, setArticles] = useState([]);
  let [searchQuery, setSearchQuery] = useState("");
  let [title, setTitle] = useState("");
  let [loading, setLoading] = useState(true);
  let [isMenuOpen, setIsMenuOpen] = useState(false);
  let [error, setError] = useState(false);

  function handleSearchByCategory(category) {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}?category=${category}`, {
        headers: {
          "x-api-key": import.meta.env.VITE_FRONTEND_SECRET,
        },
      })
      .then((res) => {
        setError(false);
        setArticles(res.data);
        setLoading(false);
        setTitle("Top results for " + category);
      })
      .catch((err) => setError(true));
  }

  function loadTopHeadlines() {
    axios
      .get(import.meta.env.VITE_BACKEND_URL, {
        headers: {
          "x-api-key": import.meta.env.VITE_FRONTEND_SECRET,
        },
      })
      .then((res) => {
        setError(false);
        setArticles(res.data);
        setLoading(false);
        setTitle("Top Headlines");
      })
      .catch((err) => setError(true));
  }

  function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/search`, {
        params: {
          searchQuery: searchQuery,
        },
        headers: {
          "x-api-key": import.meta.env.VITE_FRONTEND_SECRET,
        },
      })
      .then((res) => {
        setError(false);
        setArticles(res.data);
        setLoading(false);
      })
      .catch((err) => setError(true));
    setSearchQuery("");
    setTitle("Showing results for " + searchQuery);
  }
  useEffect(loadTopHeadlines, []);

  return (
    <>
      <NewsContext.Provider
        value={{
          title,
          setTitle,
          articles,
          setArticles,
          searchQuery,
          setSearchQuery,
          handleSearchByCategory,
          handleSubmit,
          loading,
          setLoading,
          isMenuOpen,
          setIsMenuOpen,
          loadTopHeadlines,
          error,
        }}
      >
        {children}
      </NewsContext.Provider>
    </>
  );
}
export default NewsContextProvider;
