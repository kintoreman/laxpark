import {FC} from "react";
import {makeStyles} from "@material-ui/core/styles";
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles({
    div: {
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "#594512",
        },
    ul:{
        width: "18vw",
        fontWeight: "bold",
        display: "flex",
        flexWrap: "wrap",
        fontSize: "0.5em",
        color: "#fff",
        margin: "0 ",
        marginTop: "3em",
        marginRight: "15em",
    },
    p: {
        width:"30vw",
        color: "#fff",
        marginLeft: "5em", 
    },
    p1:{
            width:"100%",
            color: "#fff",
            backgroundColor: "black",
            fontSize: "0.5em",
            margin: "0",
            textAlign: "center",
        },
    list:{
        width: "fit-content",
        margin: "3.0em",
        fontSize: "0.8em",
        "&:hover":{
            color: "gold",
        },
    }
});

const Footer:FC = ()=>{
    const classes = useStyles();
    return(
        <>
            
        <div className={classes.div}>
            <p className={classes.p}><a href="./" ><SupervisedUserCircleIcon style={{color:"gold"}} />Lacrosse Park</a></p>
                <ul className={classes.ul}>
                    <p>menu  -------------------------------</p>
                    <li className={classes.list}><a href="./maker" > メーカー一覧 </a></li>
                    <li className={classes.list}><a href="./stick" >関東大学一覧</a></li>
                    <li className={classes.list}><a href="./popular" >有名人一覧</a></li>
                    <li className={classes.list}><a href="./country" >主要国一覧</a></li>
                </ul>

                 <ul className={classes.ul}>
                    <p>About us  -------------------------------</p>
                    <li className={classes.list}><a href="https://www.instagram.com/suke_lax/" ><InstagramIcon style={{fontSize: "2em"}} /> @suke_lax </a></li>
                    <li className={classes.list}><a href="https://twitter.com/dokkyolax" ><TwitterIcon style={{fontSize: "2em"}} />@dokkyolax</a></li>
                </ul>
        </div>
        <p className= {classes.p1}>
            @2021 Laceosse Park
        </p>
            
        </>
    )
}

export default Footer;