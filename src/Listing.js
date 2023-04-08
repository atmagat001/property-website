import React, { Component } from 'react'
import './Listing.css'  
import './App.css'


export class Listing extends Component {
    constructor(props) {
    super(props); 
        this.state = {
            data: []
        }
    
    }

    componentDidMount() {
        fetch('http://localhost:3000/data.json')
        .then(response => response.json())
        .then(data => this.setState({ data }))
    }



  render() {
    return (
      <div>
        <h1>
            {this.state.data.map((item, index) => {
                return (
                    <div className='listing-container'>
                        <div className='wrapper'>
                            <div key={index}>
                            <h1>{item.name}</h1>
                            <h2>{item.classification}</h2>
                            <h3>{item.address}</h3>
                    
                        </div>
                        <table>
                            <tr>
                                <th>
                                    Asset Type
                                </th>
                                <th>
                                    Area
                                </th>
                                <th>
                                    Slots
                                </th>
                                <th>
                                    Value per sqm
                                </th>
                                <th>
                                    Total Value
                                </th>

                            </tr>

                        </table>
                        


                    </div>  
                    </div>
                    
                )
            })}
        </h1>
      </div>


    )



  }
}

export default Listing