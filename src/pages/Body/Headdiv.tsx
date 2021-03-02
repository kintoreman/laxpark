import { makeStyles } from "@material-ui/core";
import {FC} from "react";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


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
    button: {
        padding: "2em",
        textAlign :"center",
        
    }
});


const Headdiv:FC = ()=>{
    const classes = useStyles();

    return(
        <div className={classes.div}>
            <h1 className={classes.h1} ><EmojiPeopleIcon />ヘッド一覧</h1>
                    <div className={classes.div2}>
                        <Paper className={classes.paper} style={{borderRadius:"10px"}} />
                        <Paper className={classes.paper} style={{borderRadius:"10px"}} />
                        <Paper className={classes.paper} style={{borderRadius:"10px"}} />
                    </div>
                        <div className={classes.button}>
                                <Button variant="contained" 
                                        style={{backgroundColor: "gold", color: "#594512", width: "30vw", fontWeight: "bold" }}
                                        >
                                    すべてのヘッドをみる
                                </Button>
                    </div>
        </div>
    )
}

export default Headdiv;