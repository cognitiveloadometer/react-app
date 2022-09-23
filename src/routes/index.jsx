import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useState } from "react";
import { HomePage } from "../pages/homepage";
import { Dashboard } from "../pages/dashboard";
import { Form } from "../pages/form";
import { FormInfo } from "../pages/formInfo";

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
                    <Dashboard authenticated={authenticated} setAuthenticated={setAuthenticated} userData={userData}/>
                </Route>

                <Route exact path="/teams/:id">
                    <Form />
                </Route>

                <Route exact path="/teams/:id/info">
                    <FormInfo />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}