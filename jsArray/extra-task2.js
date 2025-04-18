//Імплементуйте функцію getNumbersAverage, яка приймає масив з числами.
//  Задача: вирахувати та повернути середнє значення чисел у масиві. 
// Очікуваний результат: Середнє значення - сума всіх чисел у масиві 
// поділена на кількість цих чисел у масиві Примітка: Якщо середнє 
// значення не є цілим числом - його треба округлити до найближчого 
// цілого числа

const numbers = [10, 20, 25];
let averageValue = 0;

function getNumbersAverage(numbersList) {
    for (let i = 0; i < numbersList.length; i++) {
        averageValue += numbersList[i];
    }
    averageValue = Math.round(averageValue / numbersList.length);
}

getNumbersAverage(numbers);
console.log(averageValue);

