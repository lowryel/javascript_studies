
import React from "react";

const searchBox= ({searchfield, searchChange})=>{
    return (
        <div className="pa1">
            <input 
            className="pa2 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="search images"
            onChange={searchChange}
            />
            
        </div>

    )
}

export default searchBox;

