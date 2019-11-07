import React from 'react'
import { apiGetAllListings } from '../api'

class Listings extends React.Component{
    constructor(props){
        super(props)
        this.state={
            items:[]
        }
        this.viewListing=this.viewListing.bind(this);
    }

    componentDidMount(){
        apiGetAllListings((err,items)=>{
            console.log(itmems)
            this.setState({
                items:items.listings
            })
        })
        console.log(this.state)
    }

    viewListing(id){
        this.props.history.push(`./listings`)
    }




    render(){
        return(
            <div> 
                <h2> CurrentListings</h2>
                <div className="listings-container">
                    {this.state.items.map((item,key)=>{
                        return (
                            <div key={key} className="listing">
                                <img src={item.picture_url} />
                                <h2 onClick={e => this.viewListing(item.id)}>{item.name}</h2>
                                <p> Current bid: {item.current_bid}</p>
                                <p> Aution finished {new Date(item.finish_date).toLocaleTimeString('en-GB')+'\n' +new Date(item.finish_date).toLocaleDateString('en-GB')}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Listings

