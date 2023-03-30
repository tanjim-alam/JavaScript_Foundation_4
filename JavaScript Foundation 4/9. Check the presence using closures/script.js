function numberChecker(numbers){
    return function(anothernumber){
        return numbers.includes(anothernumber);
    }
}

const numbers = [1,2,3,4,5];
const checkNumber = numberChecker(numbers);
console.log(checkNumber(3)); // true
console.log(checkNumber(6)); // false