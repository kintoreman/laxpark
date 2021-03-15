import {FC} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        width: "40%",
        height: "1000px",
        margin: "auto",
        paddingTop: "5%",
        backgroundColor: "aliceblue",
    },
    img: {
        height: "25%",
        width:"100%",
    },
    h1: {
        fontSize: "3em",
        color: "red",
    },
    p:{
        fontSize: "1.2em",
        letterSpacing: "0.2em",
    }
})



const Warrior:FC = ()=>{

    const classes = useStyles()

    return(
         <Card className={classes.card}>
                                              <CardMedia
                                                className={classes.img}
                                                image="/images/Warrior.jpg"
                                              />
                                              <CardContent>
                                                <Typography className={classes.h1} gutterBottom variant="h5" component="h1">
                                                    WARRIOR
                                                </Typography>
                                                <Typography className={classes.p} variant="body2" color="textSecondary" component="p">
                                                 革新的で高性能な道具。あらゆる年齢、人々に合うラクロスとホッケー選手のためのアパレルの業界最高のメーカー
                                                </Typography>
                                              </CardContent>
                                        
                                        </Card>
    )
}

export default Warrior;