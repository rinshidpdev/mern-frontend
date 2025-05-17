// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { SearchProvider } from "./context/SearchContext";

// createRoot(document.getElementById('root')).render(
//   <SearchProvider>
//     <App />
//   </SearchProvider>
// )
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { SearchProvider } from "./context/SearchContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <App />
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>
);
