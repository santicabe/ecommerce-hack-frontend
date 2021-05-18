import React from "react";
import ArticleList from "../extra_components/ArticleList";
import Carrousel from "../extra_components/Carrousel";

function Home() {
  return (
    <div>
      <Carrousel />
      <ArticleList />
    </div>
  );
}

export default Home;
