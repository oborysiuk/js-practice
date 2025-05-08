async function fetchData1() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
}

async function fetchData2() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    return data;
}

const promisesCollection = Promise.all([fetchData1(), fetchData2()]).then((values) => {
    return values;
});

console.log(await promisesCollection);

const promisesRaceResult = Promise.race([fetchData1(), fetchData2()]).then((values) => {
    return values;
});

console.log(await promisesRaceResult);

