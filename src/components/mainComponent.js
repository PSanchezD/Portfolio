import  { Component } from "react";
import Nav from './navComponent'
import Home from './homePage'
import Footer from './footer'

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"pedro"
        }
    }

    render(){
        return(
            <div>
                <Nav/>
                <Home/>
                <Footer/>
            </div>
        )
    }
}

export default Main;