import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from './components/newscards/NewsCards'; 

const alankey =
  "e88057dd40e516e02661bff88b26121c2e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);
  return (
    <div>
      <h1>Voice Controll News App</h1>
      <NewsCards articles={newsArticles}></NewsCards>
    </div>
  );
};

export default App;
