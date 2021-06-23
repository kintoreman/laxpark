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



const Stx:FC = ()=>{

    const classes = useStyles()

    return(
         <Card className={classes.card}>
                                              <CardMedia
                                                className={classes.img}
                                                image="/images/stx.jpg"
                                              />
                                              <CardContent>
                                                <Typography className={classes.h1} gutterBottom variant="h5" component="h1">
                                                    STX
                                                </Typography>
                                                <Typography className={classes.p} variant="body2" color="textSecondary" component="p">
                                                  STXは、メリーランド州ボルチモアに拠点を置く世界的なスポーツ用品メーカーです。
                                                  Wm. T. バーネットのCO.STXの子会社で、ラクロス機器、フィールドホッケー機器、アイスホッケー用品を製造していますが、
                                                  主な事業はグローブ、防具、女性用アイウェアを含む男女のラクロススティックと保護具の製造にあります。
                                                  同社は1970年にSTX Inc.STX社の最初のスティックとしてリチャード・B.Cタッカーによって設立されました。
                                                </Typography>
                                              </CardContent>
                                        
                                        </Card>
    )
}

export default Stx;