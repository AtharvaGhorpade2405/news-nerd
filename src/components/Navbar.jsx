import { useContext } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { NewsContext } from "../store/NewsContextProvider";

function Navbar() {
  let {
    loadTopHeadlines,
    handleSearchByCategory,
    handleSubmit,
    setSearchQuery,
    searchQuery,
    isMenuOpen,
    setIsMenuOpen,
  } = useContext(NewsContext);

  return (
    <nav className="bg-[#0a112b] w-full sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 py-3 md:px-8 w-full">
        {/* Logo */}
        <button onClick={loadTopHeadlines}>
          <h3 className="text-white font-semibold text-xl">NewsNerd</h3>
        </button>

        {/* Toggle (Mobile Only) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-col md:flex-row md:items-center md:justify-center md:gap-6 w-full">
          {/* Category Buttons (Centered) */}
          <div className="flex flex-wrap justify-center gap-2 w-full">
            {[
              "sports",
              "business",
              "entertainment",
              "health",
              "science",
              "technology",
            ].map((category) => (
              <button
                key={category}
                onClick={() => handleSearchByCategory(category)}
                className="text-white bg-[#101d52] rounded-xl px-3 py-1 text-sm hover:bg-[#1b2c70] transition"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 mt-2 md:mt-0 md:ml-4"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[200px] px-3 py-1 rounded-xl bg-white"
            />
            <button type="submit">
              <FaSearch className="text-white text-lg" />
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 w-full">
          <div className="flex flex-wrap gap-2 justify-center mb-3">
            {[
              "sports",
              "business",
              "entertainment",
              "health",
              "science",
              "technology",
            ].map((category) => (
              <button
                key={category}
                onClick={() => handleSearchByCategory(category)}
                className="text-white bg-[#101d52] rounded-xl px-3 py-1 text-sm hover:bg-[#1b2c70] transition"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center gap-2"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[200px] px-3 py-1 rounded-xl bg-white"
            />
            <button type="submit">
              <FaSearch className="text-white text-lg" />
            </button>
          </form>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
