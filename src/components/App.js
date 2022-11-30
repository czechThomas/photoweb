import React, { Component } from "react";
import NavMenu from './NavMenu';
import Header from './Header';
import Content from './Content';
import Contact from './Contact';
import Footer from './Footer';
import AboutMe from './AboutMe';


class App extends Component {
    render () {
        return (
            <React.StrictMode>
                <NavMenu />
                <Header />
                <AboutMe />
                <Content />
                <Contact />
                <Footer />
            </React.StrictMode>
        )
    }
};

export default App;