import React from 'react'
import {HashRouter as Router} from 'react-router-dom'
import App from '../containers/App'

export const getRouter = () =>{
    // Router.render((<HashRouter>
    //     <App />
    // </HashRouter>), document.getElementById('root'))
    return (
        <Router>
            <App />
        </Router>
    )
}