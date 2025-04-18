//Імплементуйте функцію `filterGreaterThanValue`, 
// яка приймає число minValue та масив з числами numbersList.
//  Функція має повертати новий масив який містить лише числа більші 
// за передане minValue.

const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
const filteredArray = new Array();

function filterGreaterThanValue(minValue, numbersList) {
    for (let i = 0; i < numbersList.length; i++) {
        if (numbersList[i] > minValue) {
            filteredArray.push(numbersList[i]);
        }
    }
}


filterGreaterThanValue(2, numbers);
console.log(filteredArray);
