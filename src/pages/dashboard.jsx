import React from "react";
import View from "../components/View";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { FaTemperatureHigh, FaChartPie } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { RiTestTubeFill } from "react-icons/ri";
import { makeStyles } from "@material-ui/core/styles";
import useFirebase from "../utils/useFirebase";
import { useObject } from 'react-firebase-hooks/database';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  gridContainer: {
    marginTop: 40,
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 200,
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Dashboard = () => {
  const classes = useStyles();
   const firebase = useFirebase();
    const [value, loading, error] = useObject(firebase.database().ref('sensors'));
    console.log(loading)
  console.log(error)
  return (
    <View>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="space-evenly"
        alignItems="center"
        className={classes.gridContainer}
      >
        <Grid item xs={4} sm={3} className={classes.gridItem}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <FaTemperatureHigh size={"2em"} />
              <Typography> Temperature </Typography>
              { !loading? <Typography> {value.val().Temperature} </Typography> : <CircularProgress />}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sm={3} className={classes.gridItem}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <FaChartPie size={"2em"} />
              <Typography align="center"> Nutrient Content </Typography>
              { !loading? <Typography> {value.val().EC} </Typography> : <CircularProgress />}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sm={3} className={classes.gridItem}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <WiHumidity size={"2em"} />
              <Typography> Humidity </Typography>
              { !loading? <Typography> {value.val().Humidity}% </Typography> : <CircularProgress />}

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sm={3} className={classes.gridItem}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <RiTestTubeFill size={"2em"} />
              <Typography align="center"> Water Level </Typography>
              { !loading? <Typography> {value.val().WaterLevel}% </Typography> : <CircularProgress />}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <p style={{alignSelf: "flex-end", fontSize: 10}}> Last Updated: {!loading? value.val().DateTime : "Loading"}</p>
    </View>
  );
};

export default Dashboard;
