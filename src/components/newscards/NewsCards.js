import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyles from "./styles";

const infoCards = [
  {
    color: "rgba(201, 34, 34, 0.349)",
    backgroundImage:
      "url('https://files.schudio.com/whitefield/images/news/Latest_news.jpg')",
    title: "Latest News",
    text: "Give me the latest news",
  },
  {
    color: " rgb(45, 184, 219)",
    backgroundImage:
      "url('https://bizlib247.files.wordpress.com/2011/06/business-news-picture.jpg')",
    title: "News by Categories",
    info:
      "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    backgroundImage:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBu7ZFruE4O7hBC2_2-XEMVjIkDmKePrp06A&usqp=CAU')",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];
const NewsCards = ({ articles, activeArticle, weatherReport }) => {
  const classes = useStyles();

//   if (!weatherReport.length) {
//    return(
       
//   }

  if (!articles.length ) {
    return (
        
      
      
      <Grow in>
      
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              style={{ display: "flex" }}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{
                  //   backgroundImage: infoCard.backgroundImage,//
                  backgroundColor: infoCard.color,
                }}
              >
                <Typography variant="h5">{infoCard.title}</Typography>
                {infoCard.info ? (
                  <Typography variant="h6">{infoCard.info}</Typography>
                ) : null}
                <Typography variant="h6">
                  Try saying: <br></br> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }
  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard
              article={article}
              activeArticle={activeArticle}
              i={i}
            ></NewsCard>
          </Grid>
        ))}
      </Grid>
    </Grow>
   
  );
};

export default NewsCards;
