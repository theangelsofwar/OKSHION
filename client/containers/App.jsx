import React from 'react'
import {Route} from 'react-router-dom'
import Listings from '../components/Listings'
import Header from '../components/Header'
import ListAnItem from '../components/ListAnItem'
import ViewItemAndBid from '../components/ViewItemAndBid'
// import './public/main.css'
import Conditional from "./Conditional"

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
        isLoading: false,
        count:0,
        color: "",
        isSold: false,
        items: data
        }
        console.log("in App container line 12 props="+props)
        this.handleChange = this.handleChange.bind(this)
    }

    static getDerivedStateFromProps(props,state){

    }

    componentDidMount(){
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
        this.setState(prevState => {
            const updatedItems = prevState.items.map(item => {
                if (item.id === id){
                    return {
                        ...item, 
                        isSold: !item.isSold
                    }
                }
                return item
            })
            return {
                items: updatedItems
            }
        })
    }

    render(){
        return (
            <div id="root" className="app">
                <Conditional isLoading={this.state.isLoading}/>
                <Header routeProps={this.props}/>
                <Route path={`/viewListings`} component={Listings}/>
                <Route path={`/viewListing/:id`} component={ViewItemAndBid}/>
                <Route path={`/listitem`}  component={ListAnItem}/>
            </div>
        )
    }
}

export default App