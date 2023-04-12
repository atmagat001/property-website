import React from "react";
import { Component } from "react";


class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Filter",
           
        }
    }


    componentDidMount() { 
        fetch('http://localhost:3000/data.json')
        .then(response => response.json())
        .then(data => this.setState({name: data}))
    }
 

render() { 
    if ({this.state.name}.length === 0 ) {
        <div>
            Loading...
        </div>
    } else {

        return (
            <div>
                {
                    this.state.name.map((property)=>{
                        return <div>
                            <h3>
                                {property.name}
                            </h3>
                        </div>
                    })
                }
    
                {/* 
                <h1>Property Number {this.state.name[1].index}</h1>
                <p>{this.state.name[1].name}</p> */}
            </div>
        )

    }


   
    
}
}



export default Filter

