import {FC, useState} from "react";
import { makeStyles } from "@material-ui/core";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    div: {
        background :"#f9f5ec",
        height: "1500px",
        width: "100%",
        paddingTop: "4%",
        paddingLeft: "8%",
    },
    h1:{
        fontSize:"1.2em",
        padding: "0.5em",
        paddingLeft: "7em",
        color: "#594512",
    },
    div2: {
        height: "50vh",
        display: "flex",
        width: "85%",
        flexWrap: "wrap",//親要素の幅を越えた時点で改行される。
        paddingTop: "1%",
        justifyContent: "center",
    },
    h2: {
      width: "0.3em",
      borderRadius: "15px",
      paddingLeft: "0.8rem",
      
    },
    card: {
        height: "100%",
        width: "20vw",
        borderRadius: "20px",
        marginLeft: "1em",
        marginBottom: "1em",
        transition : " 0.5s ",
        "&:hover": {
          width: "20.5vw",
          height: "103%",
          marginLeft: "0.5em",
          marginBottom: "0.5em",
          
        },
    },
    img: {
        width:"100%",
        height: "50%",
    },
});


const College:FC = ()=>{
    const classes = useStyles();

    return(
    <>    
        <div className={classes.div}>
            <h1 className={classes.h1} ><EmojiPeopleIcon />関東大学一覧</h1>
                    <div className={classes.div2}>
                        
                                       <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./waseda" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image=""
                                              />
                                              <CardContent>
                                                <Typography className={classes.h2} gutterBottom variant="h5" component="h2">
                                                    Waseda 
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                 Red buts
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                        <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./warrior" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image=""
                                              />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  KO
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                 日吉いいな
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                        
                                         <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./eastcoast" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image=""
                                              />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  DOKKYO
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  成功はハードワークなしでは来ないという考え方です。
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                           

                                         <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./eastcoast" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image=""
                                                />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  CHUO
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  Banditsu
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                         <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./eastcoast" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image=""
                                                />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  TOKYO
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  nihon1
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                         <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./eastcoast" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image=""
                                                />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  RIKKYO
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  Setten
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                   
                              

                                         <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./eastcoast" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image=""
                                                />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  MUSASHI
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                 Family
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                         <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./eastcoast" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image=""
                                                />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  MEIJI
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  chocolate
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                         <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./eastcoast" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image=""
                                                />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  HITOTSUBASHI
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  We are daijya
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                        <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./eastcoast" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image=""
                                                />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  GAKUSHUIN
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  fenics
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                        <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./eastcoast" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image=""
                                                />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  MEIJIGAKUIN
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  Hepbands
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                        <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./eastcoast" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image=""
                                                />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  NITTAI
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  All Blue
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                   
                                </div>
                       
            </div>
        </>
    )

}

export default College;