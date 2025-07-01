import "./App.css";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/ErrorPage";
import ArticleCont from "./components/ArticleCont";
import LoadingSpinner from "./components/LoadingSpinner";
import { useContext } from "react";
import { NewsContext } from "./store/NewsContextProvider";
import Footer from "./components/Footer";

function App() {
  let { loading, articles, title, error } = useContext(NewsContext);
  return (
    <>
      <Navbar></Navbar>
      {error && <ErrorPage></ErrorPage>}
      {!error && (
        <>
          {!loading && articles.length > 0 && (
            <h2 className="font-bold text-center text-2xl my-3 md:text-4xl">
              {title}
            </h2>
          )}
          {loading && <LoadingSpinner></LoadingSpinner>}
          <ArticleCont></ArticleCont>
        </>
      )}
      <Footer></Footer>
    </>
  );
}

export default App;
