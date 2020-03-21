import React from "react";
import SELECTORS from "../styles/abstracts/_selectors.scss";

import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

class Pagenator extends React.Component {
	render() {
		return (
			<div className={SELECTORS.PAGENATOR}>
				<Pagination
					className="ant-pagination"
					defaultCurrent={1}
					total={100}
				/>
			</div>
		);
	}
}

export default Pagenator;