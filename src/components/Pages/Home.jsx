import React from "react";
import Footer from "../extra_components/Footer";
import ArticleList from "../extra_components/ArticleList";
import Carrousel from "../extra_components/Carrousel";

function Home() {
  return (
    <div>
      <Carrousel />
      <ArticleList />
      <Footer />
    </div>
  );
}

export default Home;
