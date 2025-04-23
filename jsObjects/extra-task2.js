function deleteKeys(obj, keys) {

    let newObject = {...obj};
    let objKeys = Object.keys(obj);

    for (let key of keys){
        if (objKeys.includes(key)){
            delete newObject[key];
        }
    }

    return newObject;
}

console.log(deleteKeys( { a: 1, b: 2, c: 3 }, ['b', 'c'] ));

