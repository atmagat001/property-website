import React, { Component } from 'react'
import './Listing.css'  
import './App.css'


export class Listing extends Component {
    constructor(props) {
    super(props); 
        this.state = {
            data: [],
            offset: 0
        }
    
    }

    componentDidMount() {
        fetch('http://localhost:3000/data.json')
        .then(response => response.json())
        .then(data => this.setState({ data }))
    }


    handleNext = () => { 
        if  (this.state.offset === this.state.data.length - 1) { 
            this.setState({ offset: 0 })
        } else {
        this.setState({ offset: this.state.offset + 1 })}
    }

    handlePrevious = () => { 
        if (this.state.offset === 0) { 
            this.setState({ offset: this.state.data.length - 1 })
        } else {
        this.setState({ offset: this.state.offset - 1 }) }
    }


  render() {
    if (this.state.data.length === 0) { 
        return <div>Loading...</div>
    } else {

    
    return (
        
        <div className="listing">
            <div>
                <h3>{this.state.data[this.state.offset].name}</h3>
                <p>{this.state.data[this.state.offset].classification}</p>
                <p>{this.state.data[this.state.offset].address}</p>
            </div>
            
            <button onClick={this.handlePrevious}> 
                Previous
            </button>
            <button onClick={this.handleNext} > 
                Next
            </button>
        </div>


    )
  }}
}

export default Listing