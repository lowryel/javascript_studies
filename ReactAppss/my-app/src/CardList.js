import React from "react";
import {Component} from 'react'
import Card from './Card'
import { robots } from "./robots";
import 'tachyons'

class CardList extends Component{
    render(){
        const CardArray= robots.map((user, i)=>{
            return (<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>)

        })
        return(
            <div>
                <h1>Hello React!!!</h1>
                <a href="http://localhost:3000/"><img className="w-10 h-12 ma2 grow " src="https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/0d70200090b21d6e0d3fde7eb894b303.png?200x200" alt="logo"/></a>
                {CardArray}
            </div>
        ) 
    }
}

export default CardList;