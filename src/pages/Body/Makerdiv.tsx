import {FC, useState} from "react";
import { makeStyles } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
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
    paper: {
      height: "50vh",
      width: "20vw",
      marginLeft: "1em",
    },
    card: {
        height: "100%",
        width: "20vw",
        marginLeft: "1em",
    },
    img: {
        width:"200%",
        height: 140,
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
            <h1 className={classes.h1} ><EmojiTransportationIcon />人気メーカー一覧</h1>
                    <div className={classes.div2}>
                        
                                       <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./maker" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image="/images/stringking-86853703.jpg"
                                              />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  STRINGKING
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  大人気だよん
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                        <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./maker" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image=""
                                              />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  WARRIOR
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  大人気だよん
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                         <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./maker" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image=""
                                              />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  EASTCOASTDYES
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  大人気だよん
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                   
                       
                    </div>
                        <div className={classes.button}>
                                <Button variant="contained" 
                                        style={{backgroundColor: "gold", color: "#594512", width: "30vw", fontWeight: "bold" }}
                                        >
                                    すべての道具をみる
                                </Button>
                        </div>
            </div>
        </>
    )

}

export default Makerdiv;