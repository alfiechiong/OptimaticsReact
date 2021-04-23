import {Route, Switch } from "react-router-dom"
import Home from '../../pages/Home'
import About from '../../pages/About'
import Contact from '../../pages/Contact'
import Profile from '../../pages/Profile'
import { Grid } from '@material-ui/core'
import Header from '../Header'

import PrivateRoute from './privateRoute'
const Routes = ()=>{
    return (
    <Grid container xs={12} spacing={2}>
        <Grid item xs={12}>
            <Header title="Alfiegraphy"/>
        </Grid>
        <Grid item xs={12}>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/contact" component={Contact}/>
                <PrivateRoute exact path="/about" component={About}/>
                <PrivateRoute exact path="/profile" component={Profile} />
            </Switch>
        </Grid>
    </Grid>
    )
}

export default Routes