import { makeStyles } from "@material-ui/core";
import {FC} from "react";
import Button from '@material-ui/core/Button';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
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
    div2:{
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
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


const Collegediv:FC = ()=>{
    const classes = useStyles();

    return(
        <div className={classes.div}>
            <h1 className={classes.h1} ><AccessibilityIcon />関東学生ラクロス</h1>
                    <div className={classes.div2}>
                        <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./1bu" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image="/images/tatikawa.jpg"
                                              />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                 関東一部リーグ
                                                </Typography>
                                                <Typography style={{fontSize: "0.8em"}} variant="inherit" color="textSecondary" >
                                                  <p>男子１２チーム</p>      
                                                  <p>女子１２チーム</p>
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                        <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./2bu" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image=""
                                              />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  関東二部リーグ
                                                </Typography>
                                                <Typography style={{fontSize: "0.8em"}} variant="inherit" color="textSecondary" >
                                                  <p>男子１２チーム</p>      
                                                  <p>女子１２チーム</p>
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                         <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./3bu" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image=""
                                              />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  関東三部リーグ
                                                </Typography>
                                                <Typography style={{fontSize: "0.8em"}} variant="inherit" color="textSecondary" >
                                                  <p>男子１５チーム</p>      
                                                  <p>女子１９チーム</p>
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                    </div>
                        <div className={classes.button}>
                                <Button variant="contained" 
                                        href="./college"
                                        style={{backgroundColor: "gold", color: "#594512", width: "30vw", fontWeight: "bold" }}
                                        >
                                    すべての大学をみる
                                </Button>
                    </div>

        </div>
    )
}

export default Collegediv;