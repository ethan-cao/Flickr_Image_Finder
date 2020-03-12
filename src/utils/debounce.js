const debounce = (fx, timeout, leading) => {
	let __timeout;

	return function() {
		let context = this;
		let args = arguments;

		let later = function() {
			__timeout = null;

			if (!leading) {
				fx.apply(context, args);
			}
		};
		
		let callNow = leading && !__timeout;
		clearTimeout(__timeout);
		__timeout = setTimeout(later, timeout);

		if (callNow) {
			fx.apply(context, args);
		}
	};
}

export default debounce;