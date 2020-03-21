import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Pagenator from "../components/Pagenator";
import SELECTORS from "../styles/abstracts/_selectors.scss";

const AppContainer = () => (
	<div className={SELECTORS.APP}>
		<Navbar></Navbar>
		<Gallery></Gallery>
        <Pagenator></Pagenator>
	</div>
);

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);