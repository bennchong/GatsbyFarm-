import React from "react"
import Login from "../components/Login"
import { makeStyles } from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql} from "gatsby";

const useStyles = makeStyles({
    cover: {
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: `100vh`,
    }
})

const Index = () => {
    const classes = useStyles();
    const data = useStaticQuery(graphql`
        query{
            file(relativePath: {eq: "coverLanding.jpg"}) {
              childImageSharp {
                fluid {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                }
              }
            }
          }
    `)
    return (
            <BackgroundImage fluid={data.file.childImageSharp.fluid} alt="A Plant Picture" className={classes.cover}>
                <Typography variant={"h1"} gutterBottom> HydroHDB </Typography>
                <Login />
            </BackgroundImage>
        )
}

export default Index
