import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";
import { HomePage } from "../pages/homepage";
import { Dashboard } from "../pages/dashboard";

export const Routes = () => {
    const [authenticated, setAuthenticated] = useState(false)
    const [userData, setUserData] = useState([])
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {authenticated ? <Redirect to="/dashboard" /> : <HomePage setAuthenticated={setAuthenticated} userData={userData} setUserData={setUserData}/>}
                </Route>

                <Route exact path="/dashboard">
                    <Dashboard authenticated={authenticated} userData={userData}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}