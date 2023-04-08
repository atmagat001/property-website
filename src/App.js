import React, { Component } from 'react'
import Header from './Header'
import { Listing } from './Listing'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }




  render() {
    return (
      <div>
        <Header />
        <Listing />
        <h1>React App</h1>
      </div>
    )
  }
}

export default App