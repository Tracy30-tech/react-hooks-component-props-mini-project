import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

function ArticleList(){
    const articleList = blogData.posts.map((article)=>{
        return <Article key={article} title= {article.title} date={article.date} preview={article.preview} minutes={article.minutes}/>
    })

  return(
    <main>
        {articleList}
    </main>
  )

}