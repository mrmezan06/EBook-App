import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Author from "./pages/author/Author";
import Featured from "./pages/featured/Featured";
import Contact from "./pages/contact/Contact";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/authors" element={<Author />} />
      <Route path="/featured" element={<Featured />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
