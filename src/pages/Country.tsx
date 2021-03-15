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
        height: "1000px",
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
      background: "linear-gradient(135deg, #ffd600 0%, #ffa800 100%)",
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


const Country:FC = ()=>{
    const classes = useStyles();

    return(
    <>    
        <div className={classes.div}>
            <h1 className={classes.h1} ><EmojiPeopleIcon />主要国一覧</h1>
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
                           

                                         <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./eastcoast" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image="/images/eastcoast.jpg"
                                                />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  ~~~~~~
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  会社のモットーは「ハードワークは報われる」である。成功はハードワークなしでは来ないという考え方です。
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
                                                  ~~~~~~~~
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  会社のモットーは「ハードワークは報われる」である。成功はハードワークなしでは来ないという考え方です。
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
                                                  ~~~~~~~~
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  会社のモットーは「ハードワークは報われる」である。成功はハードワークなしでは来ないという考え方です。
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
                                                  ~~~~~~
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  会社のモットーは「ハードワークは報われる」である。成功はハードワークなしでは来ないという考え方です。
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
                                                  ~~~~~~~~
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  会社のモットーは「ハードワークは報われる」である。成功はハードワークなしでは来ないという考え方です。
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
                                                  ~~~~~~~~
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  会社のモットーは「ハードワークは報われる」である。成功はハードワークなしでは来ないという考え方です。
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                   
                                </div>
                       
            </div>
        </>
    )

}

export default Country;