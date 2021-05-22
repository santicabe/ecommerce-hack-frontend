import React from "react";
import ArticleList from "../components/ArticleList";
import Carrousel from "../components/Carrousel";
import Categorias from "../components/Categorias";

function HomePage() {
  return (
    <div>
      <Carrousel />
      <Categorias />
      <ArticleList />
    </div>
  );
}

export default HomePage;
