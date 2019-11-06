import React from 'react'
import { apiGetAllListings } from '../api'

class Listings extends React.Component{
    constructor(props){
        super(props)
        this.state={
            items:[]
        }
        this.viewisting=this.viewListing.bind(this);
    }

    componentDidMount(){
        apieGetAllListings((err,items)=>{
            console.log(itmems)
            this.setState({
                items:items.listings
            })
        })
        console.log(this.state)
    }

    viewListing(id){
        this.props.history.push(`/viewlisting/${id}`)
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
                                <p> Curent bid: {item.current_bid}</p>
                                <p> Auction finished {new Date(item.finish_date).toLocaleTimeString('en-GB')+'\n' +new Date(item.finish_date).toLocaleDateString('en-GB')}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Listings

