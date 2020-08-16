import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alankey =
  "e88057dd40e516e02661bff88b26121c2e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
         console.log(articles)
        }
      },
    });
  }, []);
  return <div>Voice Controll New App</div>;
};

export default App;
