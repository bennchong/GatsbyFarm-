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
  return (
    <View>
      <p> this is dashboard </p>
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
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sm={3} className={classes.gridItem}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <FaChartPie size={"2em"} />
              <Typography align="center"> Nutrient Content </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sm={3} className={classes.gridItem}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <WiHumidity size={"2em"} />
              <Typography> Humidity </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sm={3} className={classes.gridItem}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <RiTestTubeFill size={"2em"} />
              <Typography align="center"> Water Level </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
       <p>
                {error && <strong>Error: {JSON.stringify(error)}</strong>}
                {loading && <span>Document: Loading...</span>}
                {value && <span>Document: {JSON.stringify(value)}</span>}
       </p>
    </View>
  );
};

export default Dashboard;
