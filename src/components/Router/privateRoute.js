import {Redirect, Route} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react'
export const PrivateRoute = ({Component, ...rest})=>{
    const {isAuthenticated} = useAuth0()

    return <Route 
        render={props => isAuthenticated ? (
            <Component {...props} />
        ):
            <Redirect to={{pathname:"/"}} />
    }
    />
}

export default PrivateRoute
