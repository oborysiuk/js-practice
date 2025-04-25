import Book from './Book.js';

export default class Ebook extends Book {

    constructor(title, author, year, format) {
        super(title, author, year);
        this.format = format;
    }

    get format() {
        return this._format;
    }
    set format(formatValue) {
        if (formatValue.length < 1) {
            console.log('Ooops! Incorrect format value!');
        }
        else {
            this._format = formatValue;

        }

    }

    printInfo() {
        console.log(`${this.title} is written by ${this.author} in ${this.year}; format is ${this.format}`);
    }

    static addEbookFormat(book, format) {
        let newEbook = new Ebook(book.title, book.author, book.year, format);

        return newEbook;
    }
}