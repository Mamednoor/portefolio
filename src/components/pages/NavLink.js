import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaAlignRight } from 'react-icons/fa'
import '../stylesheet/NavLink.css'

class NavLink extends Component {
state = {
    toggle:false
}
Toggle = () => {
    this.setState({toggle:!this.state.toggle})
}
render() {
    return (
    <header className="header-navlink">
        <div className="navBar">
            <button className="navlink-btn" onClick={this.Toggle}>
                <FaAlignRight />
            </button>
            <ul className={this.state.toggle ? "links show-nav" : "links"}>
                <li className="link-li">
                    <Link className="header-a" to="/">Home</Link>
                </li>
                <li className="link-li">
                    <Link className="header-a" to="/about">Présentation</Link>
                </li>
                <li className="link-li">
                    <Link className="header-a" to="/dashboard">Porte Folio</Link>
                </li>
                <li className="link-li">
                    <Link className="header-a" to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </header>
    );
}
}

export default NavLink;