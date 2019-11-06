import React from 'react'
import {Route} from 'react-router-dom'
import Listings from '../components/Listings'
import Header from '../components/Header'
import ListAnItem from '../components/ListAnItem'
import ViewItemAndBid from '../components/ViewItemAndBid'

class App extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return (
            <div className="sss">
                <Header routeProps={this.props}/>
                <Route path={'./viewListings/'} compoennt={Listings}/>
                <Route path={'/viewListing/:id'} component={ViewItemAndBid}/>
                <Route path={'/listitem'}  component={ListAnItem}/>
            </div>
        )
    }
}

export default App