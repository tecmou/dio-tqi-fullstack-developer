function trocaPares(array) {
    if(!array) return -1;
    if(!array.length) return -1;

    for(let i = 0; i < array.length; i++) {
        array[i] = array[i] % 2 === 0 ? 0 : array[i];
    }

    return array;
}

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(trocaPares(array));