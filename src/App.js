import React, { Component } from 'react'
import Header from './Header'
/* import { Listing } from './Listing' */
import Filter from './Filter'

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
        <Filter />
        {/* <Listing /> */}
        
      </div>
    )
  }
}

export default App