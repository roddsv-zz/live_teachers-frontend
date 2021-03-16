import Home from "./Home";
import Classes from "./Classes";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";

function Routes() {
    return(
        <BrowserRouter>
        <Navbar />
            <Switch>
                <Route path="/classes">
                    <Classes />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;