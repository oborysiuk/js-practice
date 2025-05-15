const BaseController = require('./BaseController.js');

class BooksController extends BaseController {
	async getAllBooks() {
		return await this.axiosInstance.get('/BookStore/v1/Books');
	}

	async addBooks(userId, isbn, token) {
		return await this.axiosInstance.post(
			'/BookStore/v1/Books',
			{
				userId: userId,
				collectionOfIsbns: this.createIsbnCollection(isbn),
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
	}

	async replaceBook(userId, newBookIsbn, oldBookIsbn, token) {
		return await this.axiosInstance.put(
			`/BookStore/v1/Books/${oldBookIsbn}`,
			{
				userId: userId,
				isbn: newBookIsbn,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
	}

	createIsbnCollection(isbn) {
		let isbnArray = new Array();
		for (let i = 0; i < isbn.length; i++) {
			isbnArray.push({ isbn: isbn[i] });
		}
		return isbnArray;
	}

	async removeAllBooks(userId, token) {
		return await this.axiosInstance.delete(`/BookStore/v1/Books?UserId=${userId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}
}

module.exports = new BooksController();
