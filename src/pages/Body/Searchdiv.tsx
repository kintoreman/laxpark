import { makeStyles } from "@material-ui/core";
import {FC, useState} from "react";
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

type Props = {
    addText: (text:string) =>void;
}


const useStyles = makeStyles({
    div: {
        width: "100vw",
        height: "70vh" ,
        textAlign: "center",
        position: "relative",
        background: "rgba(255,268,0,0.5)",
        
    },
    div2:{
        position: "absolute",
        top: "23%",
        right: 0,
        bottom: 0,
        left: 0,
    },
    h1:{
        fontSize:"3em",
        fontFamily: "cursive",
    },
    p: {
        margin: 0
    },
    form: {
        marginTop: "2%",
    },
    input: {
        border: "2px solid silver",
        borderRadius: "10px",
        fontSize: "1em",
    },
    button: {
        border: "2px solid slategrey",
        borderRadius: "5px",
    }
});


const Searchdiv: FC<Props> = ({addText})=>{
    const classes = useStyles();
    const [text, setText] = useState("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(text.length === 0) {
            alert("文字を入力してyo")
            return;
        }
        addText(text);
        setText("")
    }

    return(
        <div className={classes.div}>
             <div className={classes.div2}>
                <SupervisedUserCircleIcon style={{color:"darkorchid", fontSize:"6.0em"}} />
                <h1 className={classes.h1}>Lacrosse Park</h1>
                <p className={classes.p}>-ラクロス情報を提供するラクロスパーク-</p>
                <form className={classes.form} onSubmit={handleSubmit} >
                            <input className={classes.input}　placeholder={"ラクロス道具を検索"}
                            value={text} 
                            onChange={(e)=>setText(e.target.value)}
                            />
                        <button className={classes.button}>検索</button>
                </form> 
            </div>
        </div>
    )
}

export default Searchdiv;