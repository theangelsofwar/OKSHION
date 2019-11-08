import React from 'react'
import { apiGetAllListings } from '../api/'
//our imported superagent and Hash React Router acts as a controller middleware but is client side
class Listings extends React.Component{
    constructor(props){
        super(props)
        this.state={
            items:[]
        }
        this.viewListings=this.viewListings.bind(this)
    }

    componentDidMount() {
        apiGetAllListings((err,items) => {
            console.log(items)
            this.setState({
                items:items.listings
            })
        })
        console.log("in component did mount of Listings.jsx line 20 with state"+this.state)
    }

    viewListings(){
        this.props.history.push({pathname: `{/viewListings}`,search: '?query=abc', state: { detail: this.state }})
        console.log(this.props.history+"history Listings line 25")
    }




    render(){
        return(
            <div> 
                <h2> Current Listings </h2>
                <div className="listings-container">
                    {this.state.items.map((item,key)=>{
                        return (
                            <div key={key} className="listings">
                                <img src={item.picture_url} />
                                <h2 onClick={e => this.viewListings}>{Listings}</h2>
                                <p> Current bid: {item.current_bid}</p>
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

