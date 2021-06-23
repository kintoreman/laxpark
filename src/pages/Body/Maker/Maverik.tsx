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



const Maverik:FC = ()=>{

    const classes = useStyles()

    return(
         <Card className={classes.card}>
                                              <CardMedia
                                                className={classes.img}
                                                image="/images/maverik.jpg"
                                              />
                                              <CardContent>
                                                <Typography className={classes.h1} gutterBottom variant="h5" component="h1">
                                                    Brine
                                                </Typography>
                                                <Typography className={classes.p} variant="body2" color="textSecondary" component="p">
                                                  ‎エクセターに拠点を置き、2005年に全米プロのラクロスプレーヤーによって設立された。
                                                  Maverikは、ヘッド、シャフト、完全なスティック、保護具の完全なライン、アクセサリーの主要なラクロスメーカーです。
                                                  クラス最高のデザインチームとゲームのトッププレーヤーからのインプットを持つMaverik Lacrosseは、市場をリードする製品を作成、テスト、開発し、あらゆるレベルのアスリートが最高のプレーをすることができます。
                                                  NCAA全体の製品のリーディングプロバイダーとして、Maverikは「プレイヤーによって動力を与えられている」と誇りに思っています
                                                </Typography>
                                              </CardContent>
                                        
                                        </Card>
    )
}

export default Maverik;