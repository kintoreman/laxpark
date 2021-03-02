import { makeStyles } from "@material-ui/core";
import {FC} from "react";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

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


const Shortdiv:FC = ()=>{
    const classes = useStyles();

    return(
        <div className={classes.div}>
            <h1 className={classes.h1} ><AccessibilityIcon />シャフト一覧</h1>
                    <div className={classes.div2}>
                        <Paper className={classes.paper} style={{borderRadius:"10px"}} />
                        <Paper className={classes.paper} style={{borderRadius:"10px"}} />
                        <Paper className={classes.paper} style={{borderRadius:"10px"}} />
                    </div>
                        <div className={classes.button}>
                                <Button variant="contained" 
                                        style={{backgroundColor: "gold", color: "#594512", width: "30vw", fontWeight: "bold" }}
                                        >
                                    すべてのシャフトをみる
                                </Button>
                    </div>

        </div>
    )
}

export default Shortdiv;