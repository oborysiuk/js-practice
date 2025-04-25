import Book from './Book.js';
import Ebook from './EBook.js';
import Student from './Student.js';

let book1 = new Book('The Bell Jar', 'Sylvia Plath', 1963);
let book2 = new Book('The Seven Husbands of Evelyn Hugo', 'Taylor Jenkins Reid', 2021);
let book3 = new Book('The Little Book of Hygge', 'Meik Wiking', 2016);

book1.printInfo();
book2.printInfo();
book3.printInfo();

book1.title = 'Test';
console.log(book1.title);

book1.author = 'A';
console.log(book1.author);

book1.year = 2028;
console.log(book1.year);


let ebook1 = new Ebook('The Bell Jar', 'Sylvia Plath', 2012, 'txt');
ebook1.printInfo();

ebook1.format = '';
console.log(ebook1.format);

console.log(Book.oldestBook([book1, book2, book3, ebook1]));
console.log(Ebook.addEbookFormat(book2, "txt"));


let student1 = new Student('A', 'B', 98);
let student2 = new Student('C', 'D', 98.043938);
let student3 = new Student('E', 'F', 98);

console.log(Student.getStudentsAverageScore([student1, student2, student3]));
console.log(Student.getStudentsAverageScore([]));

