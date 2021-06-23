import {FC, useState} from "react";
import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles({
  back:{
    height:"1000px",
    background: "linear-gradient(110deg, #FFFF66 20%, #009efd 100%);"
  },
  back2:{
    height:"1000px",
    background: "linear-gradient(-86deg,  #009efd 5%, #FFFF66 105%);"
  },
  div:{
    marginTop: "5em",
    opacity:0,
    "&:hover":{
        opacity: 1,
        display:"flex",
        transition: "all 5s",
        },
  },
   h1:{
     backgroundColor:"yellow",
   },
   title:{
     width:"fit-content",
     color: "white",
     margin: 0,
     paddingTop: "1.5em",
     paddingLeft: "2em",
     fontSize: "2.5em",
     fontFamily: "serif",
     fontWeight: "bold",
     transition: "all 1s ease-out",
     "&:hover":{
            fontSize : "3em",
            color : "blue",
        },
   },
   word:{
     width:"53vw",
     color: "white",
     margin: 0,
     paddingTop: "2em",
     paddingLeft: "15em",
     fontSize: "1.5em",
     fontFamily: "serif",
     transition: "all 1s ease-out",
     "&:hover":{
            color : "red",
        },
   },
   irekae:{
     width:"735px",
     height: "350px",
     transition: "all 3s",
     marginLeft: "30em",
     borderRadius: "10px",
     opacity: 0,
     "&:hover":{
           marginLeft: 0,
           opacity: 0.8
        },
   },
   menslax:{
     width: "fit-content",
      margin: "0 auto",
      alignSelf: "center",
      fontSize : "1.5em",
      color: "white",
      borderRadius: "5px",
      background: "rgba(255,0,255,0.6)"
      
   },
   aogaku:{
     width:"735px",
     height: "350px",
     transition: "all 3s ",
     marginTop: "3em",
     borderRadius: "10px",
     opacity: 0,
     "&:hover":{
           marginLeft: "30em",
           opacity: 0.8
        },
   }
});


const College:FC = ()=>{
　const classes = useStyles()  
    return(
    <>
       <div className={classes.back}>
          <p　className= {classes.title}>関東学生ラクロス</p>
          <p className= {classes.word}>日本の学生ラクロスで、一番レベルが高いと称されている。1部2部3部の入れ替えが激しく、毎年見どころである。</p>
              <div className={classes.div}> 
                <img className={classes.irekae} src="images/irekae.jpg" />
                    <p className= {classes.menslax}>男子ラクロス</p>
              </div>  
          <img className={classes.aogaku} src="images/aogaku.jpg" />

       </div>
       <div className={classes.back2}>

       </div>
    　<h1 className={classes.h1}>関東学生ラクロスリーグ</h1>    
    </>
    )

}

export default College;