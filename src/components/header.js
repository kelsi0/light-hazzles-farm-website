import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top py-3 bg-primary" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <Link className="navbar-brand" to="/light-hazzles-farm-website">Home</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0">
                            <li className="nav-item"><Link className="nav-link" to="/light-hazzles-farm-website/about-us">About Us</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/light-hazzles-farm-website/services">Services</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/light-hazzles-farm-website/members">Members</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/light-hazzles-farm-website/contact-us">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Header;
