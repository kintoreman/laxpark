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



const Epoch:FC = ()=>{

    const classes = useStyles()

    return(
         <Card className={classes.card}>
                                              <CardMedia
                                                className={classes.img}
                                                image="/images/epoch.jpg"
                                              />
                                              <CardContent>
                                                <Typography className={classes.h1} gutterBottom variant="h5" component="h1">
                                                    EPOCH
                                                </Typography>
                                                <Typography className={classes.p} variant="body2" color="textSecondary" component="p">
                                                  ‎エポックは、世界クラスの材料と技術を利用して、パフォーマンスを高め、性能を最大化するように設計された最高級の製造されたラクロス道具を提供します。
                                                  すべてのエポックラクロスシャフトは、利用可能な最高峰なグレードの材料から作られています。
                                                </Typography>
                                              </CardContent>
                                        
                                        </Card>
    )
}

export default Epoch;