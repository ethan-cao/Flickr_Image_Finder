import React from "react";

const TITLE = "Flickr Image Finder";
const SEARCH_PLACEHOLDER = "Search Image";

class Navbar extends React.Component {
	render() {
		return (
			<div className="navbar">
				<span>{TITLE}</span>
				<input type="text" placeholder={SEARCH_PLACEHOLDER}></input>
			</div>
		);
	}
}

export default Navbar;