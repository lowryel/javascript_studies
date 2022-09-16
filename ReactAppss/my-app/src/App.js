import React, {Component} from "react";
import CardList from "./CardList";
import {robots} from './robots';
import SearchBox from './SearchBox';
import "./App.css"
import Scroll from './Scroll'
import ErrorBoundary from "./ErrorBoundary";

class App extends Component {
    constructor(){
        super()
        this.state={
            robots:robots,
            searchfield:'',
        }
    };

    onSearchChange=(event)=>{
        this.setState({ searchfield: event.target.value });
    }

    render(){
        const filteredImages=this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        console.log(filteredImages)
        return (

            <div className="tc">
                <h1 className="f1">Reactive Gallery</h1>
                <SearchBox searchChange={this.onSearchChange}/> 
                
                <Scroll>
                    <ErrorBoundary>
                         <CardList robots={filteredImages}/>
                    </ErrorBoundary>
                </Scroll>

            </div>
        );
    }
}

export default App;
