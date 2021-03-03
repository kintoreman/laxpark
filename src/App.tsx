import {FC} from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "./pages/Main";
import Maker from "./pages/Maker";
import Stick from "./pages/Stick";
import Head from "./pages/Head";
import Protect from "./pages/Protect";
import Eastcoast from "./pages/Body/Maker/Eastcoast";
import Warrior from "./pages/Body/Maker/Warrior";
import Stringking from "./pages/Body/Maker/Stringking";

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
                <Route exact path="/eastcoast" component={Eastcoast}/>
                <Route exact path="/warrior" component={Warrior}/>
                <Route exact path="/stringking" component={Stringking}/>

            </Switch>
        </BrowserRouter>
        </> 
    )
}

export default App;