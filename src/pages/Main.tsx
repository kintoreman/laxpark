import {FC, useState} from "react";
import List from "./List/List";
import Searchdiv from "./Body/Searchdiv";
import Makerdiv from "./Body/Makerdiv";
import Collegediv from "./Body/Collegediv";
import Countrydiv from "./Body/Countrydiv";
import Populardiv from "./Body/Populardiv";
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
        <Searchdiv addText={addText} />
        <Makerdiv />
        <Collegediv />
        <Populardiv />
        <Countrydiv />
        <Footer />
        </>
    )
}

export default Main;