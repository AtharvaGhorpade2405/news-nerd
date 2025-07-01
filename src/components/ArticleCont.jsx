import { useContext } from "react";
import Article from "./Article";
import { NewsContext } from "../store/NewsContextProvider";

function ArticleCont() {
  let { loading, articles } = useContext(NewsContext);

  return (
    <>
      {articles.length === 0 && !loading ? (
        <p className="text-center font-semibold my-4 text-md md:text-xl">
          No articles found!
        </p>
      ) : (
        <div className="flex flex-wrap justify-center items-center my-4 mx-auto gap-3 align-center">
          {articles.map((article, index) => (
            <Article key={index} article={article}></Article>
          ))}
        </div>
      )}
    </>
  );
}
export default ArticleCont;
