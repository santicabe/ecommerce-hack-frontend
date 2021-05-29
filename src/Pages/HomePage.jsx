import React from "react";
import ArticleList from "../components/ArticleList";
import Carrousel from "../components/Carrousel";
import Banner from "../components/Banner";

function HomePage() {
  return (
    <div>
      <Carrousel />
      <Banner />
      <ArticleList />
    </div>
  );
}

export default HomePage;
