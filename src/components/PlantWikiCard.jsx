import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal'


const useStyles = makeStyles({
    root: {
        borderRadius: 10
    },
    media: {
        height: 300,
    },
    textContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    paper: {
        position: 'absolute',
        backgroundColor: "white",
        border: '2px solid #000',
        boxShadow: 5,
        padding: 1,
    },
    modalContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    plantInfo: {
        maxHeight: 500
    }
});

export default function PlantWikiCard({name}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Card className={classes.root}>
            <CardActionArea onClick={handleOpen}>
                <CardMedia
                    className={classes.media}
                    image={require(`../../static/${name}.jpg`)}
                    title="Contemplative Reptile"
                >
                    <CardContent className={classes.textContainer}>
                        <Typography gutterBottom variant="h2" component="h2" style={{color: "white"}}>
                            {name}
                        </Typography>
                    </CardContent>
                </CardMedia>
            </CardActionArea>
            <Modal open={open}
                   onClose={handleClose}
                   className={classes.modalContainer}
            >
                <div className={classes.paper}>
                    <img src={require(`../../static/${name}Info.jpg`)} className={classes.plantInfo}/>
                </div>
            </Modal>
        </Card>
    );
}

