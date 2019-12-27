import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Listings from '../components/Listings'
import Header from '../components/Header'
import ListAnItem from '../components/ListAnItem'
import ViewItemAndBid from '../components/ViewItemAndBid'
// import './public/main.css'
import Conditional from "./Conditional"
import randomcolor from "randomcolor"
class App extends Component{

    constructor(props){
        super(props)
        this.state={
        color:"",
        isLoggedIn: false,
        isLoading: false,
        count:0,
        first: "",
        color: "",
        isSold: false,
        items: data,
        icon: {}
        }
        console.log("in App container line 12 props="+props)
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    static getDerivedStateFromProps(props,state){

    }

    componentDidMount(){
        //fetch returns promise JSON object, convert with json to js object
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    icon: data,
                    loading: false
                })
            })
        setTimeout(() => {
            this.setState({
                isLoading: false
            },1500)
        })
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.whatever !== this.props.whatever){

        }
    }

    shouldComponentUpdate(nextProps, nextState){

    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.count !==this.state.count){
            const newColor= randomcolor()
            this.setState({ color: newColor })
        }
    }

    componentWillUnmount(){

    }

    handleChange(id){
        const {name, value} = event.target
        this.setState(prevState => {
            first: event.target.value
            // const updatedItems = prevState.items.map(item => {
            //     if (item.id === id){
            //         return {
            //             ...item, 
            //             isSold: !item.isSold
            //         }
            //     }
            //     return item
            // })
            // return {
            //     items: updatedItems
            // }
        })
    }

    handleClick(){
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render(){
        const text = this.state.loading ? "loading..." : this.state.icon
        let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        let displayText = this.state.isLoggedIn ? "Logged In": "Logged Out"
        return (
            <div id="root" className="app">
                <Header />
                <AuctionItemGenerator/>
                <Conditional isLoading={this.state.isLoading}/>
        <button onClick={this.handleClick}> {buttonText} </button>
        <h1 style={{color: color}}> {displayText} </h1>
                <Header routeProps={this.props}/>
                <Route path={`/viewListings`} component={Listings}/>
                <Route path={`/viewListing/:id`} component={ViewItemAndBid}/>
                <Route path={`/listitem`}  component={ListAnItem}/>
            <form>
                <input type="text" value={this.state.first} name="first" placeholder="First" onChange={this.handleChange}></input>
                <textarea value={"Default value"} />
            </form>
            
            </div>
           
        )
    }
}

export default App