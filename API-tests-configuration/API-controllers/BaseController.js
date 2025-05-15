const { default: axios } = require('axios');

class BaseController {
	constructor() {
		this.axiosInstance = axios.create({
			validateStatus: function () {
				return true;
			},
			baseURL: 'https://bookstore.toolsqa.com/',
		});
	}
}

module.exports = BaseController;
