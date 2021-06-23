import {FC, useState} from "react";
import { makeStyles } from "@material-ui/core";
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
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


const Maker:FC = ()=>{
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
                                                  ECDラクロスは双子の兄弟、マイクとグレッグ・ケネリーがラクロスメッシュ市場に進出。2011年に結成された。
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                           
                                         <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./nike" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image="/images/nike.jpg"
                                                />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  NIKE
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  ナイキは、アメリカ合衆国オレゴン州に本社を置く、スニーカーやスポーツウェアなどスポーツ関連商品を扱う多国籍企業。
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                         <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./brine" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image="/images/brine.jpg"
                                                />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  BRINE
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  1922年に設立された元のW.H.ブライン社の後継者であるブラインは、大衆のために耐久性のある強力なスティックを作成するパイオニアでした。
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                         <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./stx" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image="/images/stx.jpg"
                                                />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  STX
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  ‎STXは、メリーランド州ボルチモアに拠点を置く世界的なスポーツ用品メーカーです。
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                                                 
                                         <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./maverik" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image="/images/maverik.jpg"
                                                />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  MAVERIK
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  Maverik Lacrosseは、ニューヨーク市に拠点を置くラクロス機器とアパレルのメーカーです.
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                         <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./epoch" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image="/images/epoch.jpg"
                                                />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  EPOCK
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  エポックは、性能を最大化するように設計された最高級の製造されたラクロスの道具を提供します。
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                         <Card className={classes.card}>
                                            <CardActionArea style={{height: "100%"}}　 href="./true" >{/*CardActionAreaはonclick的な役割*/ }
                                              <CardMedia
                                                className={classes.img}
                                                image="/images/true.jpg"
                                                />
                                              <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                  TRUE
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                  100年以上にわたり、私たちはパフォーマンスを向上させるスポーツ製品を革新してきました。
                                                </Typography>
                                              </CardContent>
                                            </CardActionArea> 
                                        </Card>
                                   
                                </div>
                       
            </div>
        </>
    )

}

export default Maker;