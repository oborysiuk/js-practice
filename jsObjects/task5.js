const people = [
    { name: 'Ann', email: 'ann-c@gmail.com', age: 30 },
    { name: 'Jane', email: 'jane-k.d@gmail.com', age: 25 },
    { name: 'Stephanie', email: 'steph930@gmail.com', age: 40 }
];

for (const { name, email, age } of people) {
    console.log(`${name} is ${age} years old & their email is ${email}`);
}