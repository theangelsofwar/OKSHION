import React,{Component} from "react"

function AuctionItem(props){
  return(
    <div className="auction-item">
      <input  
        type="checkbox"
        checked={props.item.isSold}
        onChange={() => props.handleChange(props.item.id)} 
        />
        <p> {props.item.text} </p>
    </div>
  )
}

export default AuctionItem