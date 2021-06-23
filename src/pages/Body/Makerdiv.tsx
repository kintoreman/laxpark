import {FC, useState} from "react";
import { makeStyles } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    div: {
        background :"#f9f5ec",
    },
    h1:{
        fontSize:"1.2em",
        padding: "0.5em",
        paddingLeft: "10em",
        color: "#594512",
    },
    div2: {
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    h2: {
      width: "0.3em",
      borderRadius: "15px",
    },
    card: {
        height: "100%",
        width: "20vw",
        marginLeft: "1em",
    },
    img: {
        width:"100%",
        height: "50%",
    },
    button: {
        padding: "2em",
        textAlign :"center",
        
    }
});


const Makerdiv:FC = ()=>{
    const classes = useStyles();

    return(
    <>    
        <div className={classes.div}>
            <h1 className={classes.h1} ><EmojiTransportationIcon />メーカー一覧</h1>
                    <div className={classes.div2}>
                        
                                       <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./stringking" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image="/images/stringking.jpg"
                                              />
                                              <CardContent>
                                                <Typography className={classes.h2} gutterBottom variant="h5" component="h2">
                                                    STRINGKING
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  男性と女性のラクロスオンラインのための最高のラクロスギアを買い物をさせるStringKing!
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                        <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./warrior" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image="/images/Warrior.jpg"
                                              />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  WARRIOR
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                 革新的で高性能な道具。あらゆる年齢、人々に合うラクロスとホッケー選手のためのアパレルの業界最高のメーカー
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                         <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./eastcoast" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image="/images/eastcoast.jpg"
                                              />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  EASTCOASTDYES
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  会社のモットーは「ハードワークは報われる」である。成功はハードワークなしでは来ないという考え方です。
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                   
                       
                    </div>
                        <div className={classes.button}>
                                <Button variant="contained" 
                                        href="./maker"
                                        style={{backgroundColor: "gold", color: "#594512", width: "30vw", fontWeight: "bold" }}
                                        >
                                    すべてのメーカーをみる
                                </Button>
                        </div>
            </div>
        </>
    )

}

export default Makerdiv;