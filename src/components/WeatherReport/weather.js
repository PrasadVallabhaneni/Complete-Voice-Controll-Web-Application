import React from 'react';
import useStyles from "./styles";

const WeatherReport = (weatherReport) => {
    const classes = useStyles();
        if(!weatherReport.length){
    return (
      <div className={classes.container}>
        <h3>** What's the weather today ? **</h3>
        
      </div>
      
    );
        }else{
            return (
            <div className={classes.container}>
                {weatherReport.temp}
            </div>
            )
        }
        
    
}

export default WeatherReport;
