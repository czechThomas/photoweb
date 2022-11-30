import React, { Component } from "react";
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="mybgimage">
                <section className="sectioncontainer">
                    <div className="motto-container">
                        <div className="motto">
                            <h1 className="motto-text">Dokonale zachytím nejkrásnější momenty vašeho života!</h1>
                            <a href='#photo'><button className="findmore">Chci fotografie</button></a>
                        </div>
                    </div>
                    <div className="wave-header">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </section>
            </div>
        )
    }
};

export default Header;