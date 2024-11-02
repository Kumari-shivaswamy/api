import React, { useEffect, useState } from 'react'
import NewsDetails from './NewsDetails';

const News = () => {
  const [articles,setArticles]=useState([]);

  useEffect(()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=da9c20a76e9a48c2bcea706eec2ac96f`;
   fetch(url).then(response => response.json()).then(data=>setArticles(data.articles));
},[]);
  
  return (
     {articles.map((news,index)=>{
      return news.description&& news.urlToImage? <NewsDetails
      key={index}
      author={news.author}
      title={news.title}
      description={news.description}
      src={news.urlToImage}
      url={news.url}/> : <></> 
      
     })}
    </div>
  )
  }

export default News
