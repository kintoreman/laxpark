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



const Nike:FC = ()=>{

    const classes = useStyles()

    return(
         <Card className={classes.card}>
                                              <CardMedia
                                                className={classes.img}
                                                image="/images/Nike.jpg"
                                              />
                                              <CardContent>
                                                <Typography className={classes.h1} gutterBottom variant="h5" component="h1">
                                                    NIKE
                                                </Typography>
                                                <Typography className={classes.p} variant="body2" color="textSecondary" component="p">
                                                 ナイキは、アメリカ合衆国・オレゴン州に本社を置くスニーカーやスポーツウェアなどスポーツ関連商品を扱う多国籍企業。設立は1968年、ニューヨーク証券取引所に上場。
                                                 社名の由来は、同社社員のジェフ・ジョンソンが夢で見たギリシャ神話の勝利の女神「ニーケー (Nike)」から。
                                                 スウッシュ(Swoosh) は、1971年に商標登録されたナイキのロゴマークである。
                                                 ロゴマークは、勝利の女神であるニーケーの彫像の翼をモチーフにデザインしたとされている。また「勢いよく動く」という意味である。
                                                </Typography>
                                              </CardContent>
                                        
                                        </Card>
    )
}

export default Nike;