import React, { Component } from 'react'
import './Header.css'

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-container"> 
            <div className="header-logo">
                <h3>Property Listing Website</h3>    
            </div>

            <div className="header-nav">
                <ul>
                    <li><a href="www.google.com">Home</a></li>
                    <li><a href="www.google.com">About</a></li>
                    <li><a href="www.google.com">Contact</a></li>
                    <li><a href="www.google.com">Log In</a></li>
                </ul>
                
            </div>
        
        </div>



      </header>
    )
  }
}

export default Header