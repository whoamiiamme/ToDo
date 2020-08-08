import { mockData } from '../share/mockData';

export default (state , action) => {
	var i = Math.ceil(Math.random(0, 1) * 4);
	switch (action.type) {
		default:
			return state = [ mockData[i], mockData[i >= 4 ? i - 1 : i <= 0 ? i + 1 : i - 1] ];
	}
};
