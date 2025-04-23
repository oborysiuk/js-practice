//Порівняння об'єктів: Імплементуйте функцію isObjectsEqual, 
// яка порівнює два об'єкта і повертає true, якщо вони мають 
// однакові ключі та значення, і false в іншому випадку. 

function isObjectsEqual(obj1, obj2) {

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length != keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!keys2.includes(key)) {
            return false;
        }

        if (typeof (obj1[key]) === 'string') {
            if (obj1[key].toLowerCase() !== obj2[key].toLowerCase()) {
                return false;
            }

        } else if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;

}


const person = {
    firstName: 'Ann',
    lastName: 'Green',
    age: 22
};

const car2 = {
    firstName: 'ksk',
    lastName: 'Green',
    age: 22
};

isObjectsEqual(person, car2);