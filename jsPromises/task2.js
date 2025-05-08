function fetchData1() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`error`);
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            return null;
        });
}

function fetchData2() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`error`);
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            return null;
        });
}


const promisesCollection = Promise.all([fetchData1(), fetchData2()]).then((values) => {
    return values;
});

console.log(await promisesCollection);

const promisesRaceResult = Promise.race([fetchData1(), fetchData2()]).then((values) => {
    return values;
});

console.log(await promisesRaceResult);