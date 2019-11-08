import React from 'react'
import {Route} from 'react-router-dom'
import Listings from '../components/Listings'
import Header from '../components/Header'
import ListAnItem from '../components/ListAnItem'
import ViewItemAndBid from '../components/ViewItemAndBid'
// import './public/main.css'

class App extends React.Component{
    constructor(props){
        super(props)
        console.log("in App container line 12 props="+props)
    }
    render(){
        return (
            <div id="app" className="sss">
                <Header routeProps={this.props}/>
                <Route path={`/viewListings`} component={Listings}/>
                <Route path={`/viewListing/:id`} component={ViewItemAndBid}/>
                <Route path={`/listitem`}  component={ListAnItem}/>
            </div>
        )
    }
}

export default App