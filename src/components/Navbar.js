import React from "react";
import SELECTORS from "../styles/abstracts/_selectors.scss";

const TITLE = "Flickr Image Finder";
const SEARCH_PLACEHOLDER = "Search"; 

class Navbar extends React.Component {
	render() {
		return (
			<div className={SELECTORS.NAVBAR}>
				<span className={SELECTORS.TITLE}>{TITLE}</span>
				<form className={SELECTORS.SEARCH_BOX} action="">
					<button type="submit"><i class="material-icons">search</i></button>
					<input type="text" placeholder={SEARCH_PLACEHOLDER} name="search"></input>
				</form>
			</div>
		);
	}
}

export default Navbar;