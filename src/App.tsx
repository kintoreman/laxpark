import {FC} from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "./pages/Main";
import Maker from "./pages/Maker";
import College from "./pages/College";
import Popular from "./pages/Popular";
import Country from "./pages/Country";
import Eastcoast from "./pages/Body/Maker/Eastcoast";
import Warrior from "./pages/Body/Maker/Warrior";
import Stringking from "./pages/Body/Maker/Stringking";
import Nike from "./pages/Body/Maker/Nike";
import Brine from "./pages/Body/Maker/Brine";
import Stx from "./pages/Body/Maker/Stx";
import Maverik from "./pages/Body/Maker/Maverik";
import Epoch from "./pages/Body/Maker/Epoch";
import True from "./pages/Body/Maker/True";
import List from "./pages/List/List"

const App:FC= () => {
    return(
        <>
        <BrowserRouter>
            <List />
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/maker" component={Maker}/>
                <Route exact path="/college" component={College}/>
                <Route exact path="/popular" component={Popular}/>
                <Route exact path="/country" component={Country}/>
                
                <Route exact path="/eastcoast" component={Eastcoast}/>
                <Route exact path="/warrior" component={Warrior}/>
                <Route exact path="/stringking" component={Stringking}/>
                <Route exact path="/nike" component={Nike}/>
                <Route exact path="/brine" component={Brine}/>
                <Route exact path="/stx" component={Stx}/>
                <Route exact path="/maverik" component={Maverik}/>
                <Route exact path="/epoch" component={Epoch}/>
                <Route exact path="/true" component={True}/>
            
                

            </Switch>
        </BrowserRouter>
        </> 
    )
}

export default App;