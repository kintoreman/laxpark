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



const True:FC = ()=>{

    const classes = useStyles()

    return(
         <Card className={classes.card}>
                                              <CardMedia
                                                className={classes.img}
                                                image="/images/true.jpg"
                                              />
                                              <CardContent>
                                                <Typography className={classes.h1} gutterBottom variant="h5" component="h1">
                                                    TRUE
                                                </Typography>
                                                <Typography className={classes.p} variant="body2" color="textSecondary" component="p">
                                                  ‎100年以上にわたり、私たちはパフォーマンスを向上させるスポーツ製品を革新してきました。
                                                  私たちは、研究、時間、投資を私たちのアイデアに入れました。
                                                  私たちのデザインに血、汗、涙。早朝と深夜は、アスリートがTURE製品で感じる感覚を完成させる。
                                                　私たちは商品が十分ではないことを知っているので、完ぺきを生み出すのは本当に大変と知っているのです。‎
                                                </Typography>
                                              </CardContent>
                                        
                                        </Card>
    )
}

export default True;