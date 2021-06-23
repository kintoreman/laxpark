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



const Brine:FC = ()=>{

    const classes = useStyles()

    return(
         <Card className={classes.card}>
                                              <CardMedia
                                                className={classes.img}
                                                image="/images/brine.jpg"
                                              />
                                              <CardContent>
                                                <Typography className={classes.h1} gutterBottom variant="h5" component="h1">
                                                    Brine
                                                </Typography>
                                                <Typography className={classes.p} variant="body2" color="textSecondary" component="p">
                                                  ブラインは1950年以来、ラクロスのゲームに没頭しています。
                                                  1922年に設立された元のW.H.ブライン社の後継者であるブラインは、大衆のためにより耐久性のある強力なスティックを作成するパイオニアでした。
                                                  ブラインはラクロスにおいて大切な、ラクロスに対する努力、ラクロスの戦術を熟知しています。そしてラクロス界において、
                                                  最も重要なブランドであることに誇りを持っています。60年以上にわたり、ブラインはラクロスのゲームを革新し、改善してきました.
                                                 スティックはスティックで勝負し、ヘッドはヘッドで勝負をする。そして自然と勝利は近づくと知っている。
                                                </Typography>
                                              </CardContent>
                                        
                                        </Card>
    )
}

export default Brine;