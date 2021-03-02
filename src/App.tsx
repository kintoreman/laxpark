import {FC} from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "./pages/Main";
import Maker from "./pages/Maker";
import Stick from "./pages/Stick";
import Head from "./pages/Head";
import Protect from "./pages/Protect";

const App:FC= () => {
    return(
        <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/maker" component={Maker}/>
                <Route exact path="/stick" component={Stick}/>
                <Route exact path="/head" component={Head}/>
                <Route exact path="/protect" component={Protect}/>
            </Switch>
        </BrowserRouter>
        </> 
    )
}

export default App;