const person = {
    firstName: 'Ann',
    lastName: 'Green',
    age: 22
};

person.email = 'anna.green@gmail.com';
delete person.age;

console.log(person);