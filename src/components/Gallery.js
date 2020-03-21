import React from "react";
import {
	CellMeasurer,
	CellMeasurerCache,
	createMasonryCellPositioner,
	Masonry,
	AutoSizer,
	WindowScroller
} from "react-virtualized";
import ImageMeasurer from "react-virtualized-image-measurer";

import SELECTORS from "../styles/abstracts/_selectors.scss";

const list = [
	{
		image: "https://ichef-1.bbci.co.uk/news/320/cpsprodpb/97BE/production/_98064883_ikea.jpg",
		title: "t1",
		width: 200,
		height: 200
	},
	{
		image: "https://cdn.theatlantic.com/assets/media/img/mt/2017/09/ra_3000x3000-4/facebook.jpg",
		title: "t2",
		width: 200,
		height: 200
	},
	{
		image: "https://i.redd.it/th5enkjgumoz.jpg",
		title: "t3",
		width: 200,
		height: 200
	},
	{
		image: "https://cdn.pixabay.com/photo/2017/05/15/09/59/cat-2314326__480.jpg",
		title: "t4",
		width: 200,
		height: 200
	},
	{
		image: "https://cdn.pixabay.com/photo/2017/05/13/20/53/cat-2310623__480.jpg",
		title: "t5",
		width: 200,
		height: 200
	},
	{
		image: "https://cdn.pixabay.com/photo/2017/03/19/22/09/cat-2157747__480.jpg",
		title: "t6",
		width: 200,
		height: 200
	},
	{
		image: "https://cdn.pixabay.com/photo/2017/03/22/00/13/cat-2163594__480.jpg",
		title: "t7",
		width: 200,
		height: 200
	},
	{
		image: "https://cdn.pixabay.com/photo/2017/02/23/16/26/cat-2092580__480.jpg",
		title: "t7",
		width: 200,
		height: 200
	},
	{
		image: "https://cdn.pixabay.com/photo/2016/05/17/17/16/cat-1398627__480.jpg",
		title: "t7",
		width: 200,
		height: 200
	},
	{
		image: "https://cdn.pixabay.com/photo/2016/07/13/10/34/cat-1514076__480.jpg",
		title: "t7",
		width: 200,
		height: 200
	},
	{
		image: "https://cdn.pixabay.com/photo/2016/12/23/15/58/cat-1927512__480.jpg",
		title: "t7",
		width: 200,
		height: 200
	},
	{
		image: "https://cdn.pixabay.com/photo/2017/02/03/09/26/cat-2034833__480.jpg",
		title: "t7",
		width: 200,
		height: 200
	},
	{
		image: "https://cdn.pixabay.com/photo/2016/07/13/10/34/cat-1514076__480.jpg",
		title: "t7",
		width: 200,
		height: 200
	},
	{
		image: "https://cdn.pixabay.com/photo/2016/12/23/15/58/cat-1927512__480.jpg",
		title: "t7",
		width: 200,
		height: 200
	},
	{
		image: "https://cdn.pixabay.com/photo/2017/02/03/09/26/cat-2034833__480.jpg",
		title: "t7",
		width: 200,
		height: 200
	},
	{
		image: "https://cdn.pixabay.com/photo/2016/07/13/10/34/cat-1514076__480.jpg",
		title: "t7",
		width: 200,
		height: 200
	},
	{
		image: "https://cdn.pixabay.com/photo/2016/12/23/15/58/cat-1927512__480.jpg",
		title: "t7",
		width: 200,
		height: 200
	},
];

// Default sizes help Masonry decide how many images to batch-measure
const cache = new CellMeasurerCache({
	defaultHeight: 200,
	defaultWidth: 200,
	fixedWidth: true
});

// Our masonry layout will use 3 columns with a 10px gutter between
const cellPositioner = createMasonryCellPositioner({
	cellMeasurerCache: cache,
	columnCount: 5,
	columnWidth: 200,
	spacer: 20
});

const cellRenderer = ({ index, key, parent, style }) => {
	const datum = list[index];

	return (
		<CellMeasurer cache={cache} index={index} key={key} parent={parent}>
			<div className={SELECTORS.IMAGE_CONTAINER} style={style}>
				<img
					className={SELECTORS.IMAGE}
					src={datum.image}
					style={{
						width: 200
						// height: 200
					}}
				/>
				<h4>{datum.title}</h4>
			</div>
		</CellMeasurer>
	);
};

class Gallery extends React.Component {
	constructor(props, context) {
		super(props, context);

		this._renderAutoSizer = this._renderAutoSizer.bind(this);
		this._onResize = this._onResize.bind(this);
	}

	_onResize({ width }) {
		console.log("_onResize");
	}

	_renderAutoSizer() {
		return (
			<AutoSizer className={SELECTORS.SIZER}>
				{({ height, width }) => {
					console.log(`W : ${width}, H : ${height}`);

					return (
						<Masonry
							cellCount={list.length}
							height={height}
							width={width}
							cellMeasurerCache={cache}
							cellPositioner={cellPositioner}
							cellRenderer={cellRenderer}
						/>
					);
				}}
			</AutoSizer>
		);
	}

	componentDidMount() {
		console.log("mounted");
	}

	render() {
		return (
			<div className={SELECTORS.GALLERY} style={ {height: 1000}}>
				{this._renderAutoSizer()}
				{/* <WindowScroller>{this._renderAutoSizer}</WindowScroller>; */}
			</div>
		);
	}
}

export default Gallery;