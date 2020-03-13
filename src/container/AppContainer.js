import React from "react";
import {connect} from 'react-redux';
import * as actions from "../actions";

import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";

const AppContainer = () => (
    <div className="App">
        <Navbar></Navbar>
        <Gallery></Gallery>
    </div>
);

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);