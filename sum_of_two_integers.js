/**
 * Returns the sum of the integers whose index is between i1 and i2.
 * 
 * @param array 
 * @param i1 
 * @param i2 
 * @returns {Int} result 
 */
function calc(array, i1, i2){
    let result = 0;

    array.slice(i1, (i2 + 1)).forEach(element => {
        result += element;
    });

    return result;
}

let array = [0,1,2,3,4,5,3];

console.log(calc(array, 0, 1));