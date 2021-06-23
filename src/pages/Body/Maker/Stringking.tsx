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
        backgroundColor: "rgba(200,200,250,0.2)",
    },
    img: {
        height: "25%",
        width:"100%",
    },
    h1: {
        fontSize: "3em",
        color: "darkslategrey",
    },
    p:{
        fontSize: "1.2em",
        letterSpacing: "0.2em",
    }
})



const String:FC = ()=>{

    const classes = useStyles()

    return(
         <Card className={classes.card}>
                                              <CardMedia
                                                className={classes.img}
                                                image="/images/stringking.jpg"
                                              />
                                              <CardContent>
                                                <Typography className={classes.h1} gutterBottom variant="h5" component="h1">
                                                    STRINGKING
                                                </Typography>
                                                <Typography className={classes.p} variant="body2" color="textSecondary" component="p">
                                                  男性と女性のラクロスオンラインのための最高のラクロスギアを買い物をさせるStringKing!
                                                </Typography>
                                              </CardContent>
                                        
                                        </Card>
    )
}

export default String;