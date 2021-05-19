import React from "react";
import ArticleList from "../extra_components/ArticleList";
import Carrousel from "../extra_components/Carrousel";
import Categorias from "../extra_components/Categorias";

function Home() {
  return (
    <div>
      <Carrousel />
      <Categorias />
      <ArticleList />
    </div>
  );
}

export default Home;
