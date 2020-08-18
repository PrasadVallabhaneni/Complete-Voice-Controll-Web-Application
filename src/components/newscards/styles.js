import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
  },
  weather:{

  },
  logo1: {
    height:'20vh',
    width:'100%',
    backgroundSize: "300px 170px",
    backgroundRepeat: "no-repeat",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "45vh",
    padding: "10%",
    borderRadius: 10,
    color: "white",
    backgroundSize: "300px 170px",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "60px",
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
});

 