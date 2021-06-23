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



const Eastcoast:FC = ()=>{

    const classes = useStyles()

    return(
         <Card className={classes.card}>
                                              <CardMedia
                                                className={classes.img}
                                                image="/images/eastcoast.jpg"
                                              />
                                              <CardContent>
                                                <Typography className={classes.h1} gutterBottom variant="h5" component="h1">
                                                   EASTCOASTDYES
                                                </Typography>
                                                <Typography className={classes.p} variant="body2" color="textSecondary" component="p">
                                                  ECDはMDのタウソンに位置し、道具は設計された高品質のラクロスメーカーです。ECDの焦点は、情熱教育と革新を通じてラクロスのスポーツを進めることです。‎
‎                                                  ECDラクロスは双子の兄弟、マイクとグレッグ・ケネリーがラクロスメッシュ市場に進出。2011年に結成‎
‎                                                  されました。今日に早送りし、私たちはグレッグの家の地下で動作する2人の男の会社から、21,000平方フィートの倉庫の、30人の従業員会社に成長しました。
                                                  ECDの製品は、男性と女性のメッシュ、男性と女性のシャフト、男性と女性の防具、および高性能ラクロスボールです。‎
‎                                                  私たちのハードワークペイオフのモットーは、会社全体によって具現化され、あなたが毎日限界を迎えるとき、驚くべき結果が続くことができる役割を果た‎
‎                                                  します。‎会社のモットーは「ハードワークは報われる」である。成功はハードワークなしでは来ないという考え方です。
                                                </Typography>
                                              </CardContent>
                                        
                                        </Card>
    )
}

export default Eastcoast;