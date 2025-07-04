function Article({ article }) {
  return (
    <a href={article.link}>
      <div className="w-70 h-100 my-2 border-2 border-black rounded-xl overflow-y-auto scroll-hidden mx-auto md:w-80 md:h-120">
        {article.image_url ? (
          <img
            src={article.image_url}
            className="w-full"
            alt="Image not available!"
          ></img>
        ) : (
          <p className="text-center py-2">Image not available!</p>
        )}
        <h3 className="text-xl font-semibold my-2 p-2">{article.title}</h3>
        {article.description ? (
          <h4 className="mt-2 p-2">{article.description}</h4>
        ) : (
          <p className="mt-2 p-2 text-center">No description!</p>
        )}
      </div>
    </a>
  );
}
export default Article;
