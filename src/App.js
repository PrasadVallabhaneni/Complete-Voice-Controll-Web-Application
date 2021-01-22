import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/newscards/NewsCards";
import { Grid, Grow, Typography } from "@material-ui/core";
// import classes from "*.module.css";
import useStyles from "./styles";
import wordsToNumbers from "words-to-numbers";
import WeatherReport from "./components/WeatherReport/weather";

const alankey =
  "e88057dd40e516e02661bff88b26121c2e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const [weatherReport, setWeatherReport] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ({ command, articles, number, response }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1)
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];
         if (parsedNumber > articles.length) {
           alanBtn().playText("Please try that again...");
         } else if (article) {
           window.open(article.url, "_blank");
           alanBtn().playText("Opening...");
         } else {
           alanBtn().playText("Please try that again...");
         }
        } else if (command === "showWeather") {
          setWeatherReport(response);
          console.log(response);
        }
      },
    });
  }, []);
  return (
    <div>
      <div className={classes.logoContainer}>
        {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Open article number [4]
              </Typography>
            </div>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Go back
              </Typography>
            </div>
          </div>
        ) : null}
        <img
          src="https://files.schudio.com/whitefield/images/news/Latest_news.jpg"
          className={classes.alanLogo}
          alt="alan logo"
        />
      </div>
      <WeatherReport weatherReport={weatherReport}></WeatherReport>
      <NewsCards
        articles={newsArticles}
        activeArticle={activeArticle}
      ></NewsCards>
    </div>
  );
};

export default App;
