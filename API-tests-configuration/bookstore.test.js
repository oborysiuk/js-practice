const { log } = require('wd/lib/commands');
const axios = require('axios').default;
const BooksController = require('./API-controllers/BooksController');
const AccountController = require('./API-controllers/AccountController');

const isbn = ['9781593275846', '9781593275846', '9781491950296', '9781491904244'];
const newIsbn = '9781449365035';
let token;
const user = {
	userName: 'olha-test-user',
	password: 'HV7mXkG5c6wKEy!',
	userId: '83030366-f91b-4eba-ad95-1cdae4148258',
};

describe('Books tests', () => {
	beforeAll(async () => {
		token = await AccountController.getAuthToken(user.userName, user.password);
	});

	test('Get all books [BookStore/v1/Books] and verify number', async () => {
		const response = await BooksController.getAllBooks();
		const responseBody = response.data;
		expect(responseBody.books).toHaveLength(8);
	});

	test('Verify the 8th book title [/BookStore/v1/Books]', async () => {
		const response = await BooksController.getAllBooks();
		const responseBody = response.data;
		expect(responseBody.books[7].title).toBe('Understanding ECMAScript 6');
	});

	test('Add new books to user [/BookStore/v1/Books] & verify if added', async () => {
		const response = await BooksController.addBooks(user.userId, isbn, token);
		expect(response.status).toBe(201);
		expect(JSON.stringify(response.data.books)).toBe(JSON.stringify(BooksController.createIsbnCollection(isbn)));
	});

	test('Replace one book with another [/BookStore/v1/Books/{ISBN}] & verify it`s replaced', async () => {
		const response = await BooksController.replaceBook(user.userId, newIsbn, isbn[2], token);
		expect(response.status).toBe(200);
		expect(response.data.books[0].isbn).toBe(newIsbn);
	});

	test('Remove all books [/BookStore/v1/Books] from user profile', async () => {
		const response = await BooksController.removeAllBooks(user.userId, token);
		expect(response.status).toBe(204);
	});

	afterAll(async () => {
		const response = await BooksController.removeAllBooks(user.userId, token);
		expect(response.status).toBe(204);
	});
});
