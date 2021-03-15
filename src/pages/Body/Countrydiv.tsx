import { makeStyles } from "@material-ui/core";
import {FC} from "react";
import Button from '@material-ui/core/Button';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
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


const Countrydiv:FC = ()=>{
    const classes = useStyles();

    return(
        <div className={classes.div}>
            <h1 className={classes.h1} ><LocalHospitalIcon />主要国一覧</h1>
                    <div className={classes.div2}>
                       <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./globe" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image=""
                                              />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  USA
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  全員うますぎ
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                        <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image=""
                                              />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  canada
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                 発祥国
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                         <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./chest" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image=""
                                              />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  日本
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  SUshi
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                    </div>
                        <div className={classes.button}>
                                <Button variant="contained"
                                        href="./country" 
                                        style={{backgroundColor: "gold", color: "#594512", width: "30vw", fontWeight: "bold" }}
                                        >
                                    すべての主要国をみる
                                </Button>
                    </div>
        </div>
    )
}

export default Countrydiv;