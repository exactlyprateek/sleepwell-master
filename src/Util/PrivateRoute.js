import React, { Fragment} from 'react'
;
import { Route, Redirect } from "react-router-dom";
import { getToken } from './Comman';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
            {...rest}
            render={props => {
                return getToken() ? <Component {...props} />
                : <Redirect  to={{pathname: "/login", state: props.location}} />
            }}
        />
    )
}

export default PrivateRoute;