import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from './components/newscards/NewsCards'; 
// import classes from "*.module.css";
import useStyles from './styles';

const alankey =
  "e88057dd40e516e02661bff88b26121c2e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const classes=useStyles();

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
      <div className={classes.logoContainer}>
        <img
          src="https://files.schudio.com/whitefield/images/news/Latest_news.jpg"
          className={classes.alanLogo}
          alt="alan logo"
        />
      </div>
      <NewsCards articles={newsArticles}></NewsCards>
    </div>
  );
};

export default App;
