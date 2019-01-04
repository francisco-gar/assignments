import React from "react";

import Nav from "./Nav";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Footer from "./Footer";

import './assets/styles.css'

const App = () => (
    <div>
        <Nav />
        <Main />
        <Sidebar />
        <Content />
        <Footer />
    </div>
)

export default App
