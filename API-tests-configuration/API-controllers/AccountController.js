const BaseController = require('./BaseController');

class AccountController extends BaseController {
	async getAuthToken(userName, password) {
		const response = await this.axiosInstance.post('/Account/v1/GenerateToken', {
			userName: userName,
			password: password,
		});

		return response.data.token;
	}
}

module.exports = new AccountController();
