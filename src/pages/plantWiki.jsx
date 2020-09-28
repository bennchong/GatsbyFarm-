import React from 'react';
import View from '../components/View'
import Grid from '@material-ui/core/Grid'
import PlantWikiCard from "../components/PlantWikiCard";

const PlantWiki = () => {
    const plantArr = ["BakChoy", "Bayam", "KaiLan", "KangKong", "Lettuce", "Tomato"];

    return (
        <View>
            <Grid container spacing={4} justify={"space-evenly"}>
                {plantArr.map((name, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={4}>
                            <PlantWikiCard name={name}/>
                        </Grid>
                    );
                })}
            </Grid>
        </View>
    );
};

export default PlantWiki;
