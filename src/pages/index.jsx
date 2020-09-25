import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import View from "../components/View"
import Status from "../components/Status"
import Login from "../components/Login"
import { makeStyles } from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const coverImage = require('../assets/coverLanding.jpg')
const useStyles = makeStyles({
    cover: {
        backgroundSize: "cover",
        backgroundImage: `url(${coverImage})`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: `100vh`,
    }
})

const Index = () => {
    const classes = useStyles();

    return (
        <div className={classes.cover}>
            <Typography variant={"h1"} gutterBottom> HydroHDB </Typography>
            <Login />
        </div>
        )
}

export default Index
