import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import NewsContextProvider from "./store/NewsContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NewsContextProvider>
      <App />
    </NewsContextProvider>
  </StrictMode>
);
