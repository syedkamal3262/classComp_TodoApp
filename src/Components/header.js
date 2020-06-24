import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Header extends Component {

render(){
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Todo..</h1>
            <h3 style={{textAlign:"center"}}>
                <NavLink to="/">Home</NavLink>
                    |
                <NavLink to="About">About</NavLink>
            </h3>
        </div>
    )
}
}

export default Header; 