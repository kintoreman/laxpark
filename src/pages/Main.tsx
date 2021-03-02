import {FC, useState} from "react";
import List from "./List/List";
import Searchdiv from "./Body/Searchdiv";
import Makerdiv from "./Body/Makerdiv";
import Stickdiv from "./Body/Stickdiv";
import Protectdiv from "./Body/Protectdiv";
import Headdiv from "./Body/Headdiv";
import Footer from "./List/footer"

export type Todo = {
    content: string;
}

const Main:FC = ()=>{
    const [todos, setTodos] = useState<Todo>()
    const addText = (text: string) => {
        setTodos({content: text})
    }

    return(
        <>
        <List />      
        <Searchdiv addText={addText} />
        <Makerdiv />
        <Stickdiv />
        <Headdiv />
        <Protectdiv />
        <Footer />
        </>
    )
}

export default Main;