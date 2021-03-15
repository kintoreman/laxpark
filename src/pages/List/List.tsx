import {FC} from "react";
import {makeStyles} from "@material-ui/core/styles";
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const useStyles = makeStyles({
    ul:{
        position: "fixed",
        background: "#fff",
        zIndex: 1,
        width: "100%",
        height: "7vh",
        display: "flex",
        alignItems: "center",
        fontWeight: "bold",
        textShadow: "1px 1px 2px silver",
        paddingRight: "10%",
    },
    p: {
        marginRight: "auto",
        marginLeft: "auto",
    },
    list:{
        marginLeft: "3%",
        fontSize: "0.8em",
        "&:hover":{
            background: "pink",
            border: "1px solid pink",
            borderRadius: "10px",
        },
    }
});

const List:FC = ()=>{
    const classes = useStyles();
    return(
        <>
            <ul className={classes.ul}>
                <p className={classes.p}><a href="./" ><SupervisedUserCircleIcon style={{color:"gold"}} />Lacrosse Park</a></p>
                <li className={classes.list}><a href="./maker" ><EmojiTransportationIcon /> メーカー一覧 </a></li>
                <li className={classes.list}><a href="./college" ><AccessibilityIcon />関東大学一覧</a></li>
                <li className={classes.list}><a href="./popular" ><EmojiPeopleIcon />有名人一覧</a></li>
                <li className={classes.list} style={{marginRight: "10%"}}><a href="./country" ><LocalHospitalIcon />主要国一覧</a></li>
            </ul>

            
        </>
    )
}

export default List;