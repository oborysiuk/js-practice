const car1 = {
    brand: 'Volkswagen',
    model: 'Tiguan',
    year: 2013
};

const car2 = {
    brand: 'Audi',
    model: 'Q7',
    owner: 'Ann Green'
};

const car3 = { ...car1, ...car2 };

console.log(car3);