function loop (arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(Math.pow(2, arr[i]));
    }
    return result;
}
var inputArray = [1, 2, 3];
var outputArray = loop(inputArray);
console.log(outputArray); 
// ----------------------------------------
function ForEach (arr) {
    var result = [];
    arr.forEach(function(element) {
        result.push(Math.pow(2, element));
    });
    return result;
}
var inputArray = [1, 2, 3];
var outputArray = ForEach (inputArray);
console.log(outputArray); 
// ----------------------------------------
function Map(arr) {
    return arr.map (function(element) {
        return Math.pow(2, element);
    });
}
var inputArray = [1, 2, 3];
var outputArray = Map(inputArray);
console.log(outputArray); 
// ----------------------------------------
function Numbers(arr) {
    return arr.map(function(element) {
        if (typeof element === 'number' && !isNaN(element)) {
            if (element % 2 === 0) {
                return 'even';
            } else {
                return 'odd';
            }
        } else {
            return 'N/A';
        }
    });
}
var inputArray = [1, 2, 3, "Rawan"];
var resultArray = Numbers(inputArray);
console.log(resultArray); 
// ----------------------------------------
var names = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];
names.forEach(function(name){
console.log(name)
});
// ----------------------------------------
function fizzbuzz(numbers) {
    return numbers.map(function(number) {
        if (number % 3 === 0 && number % 5 === 0) {
            return "Fizz Buzz";
        } else if (number % 3 === 0) {
            return "Fizz";
        } else if (number % 5 === 0) {
            return "Buzz";
        } else {
            return number;
        }
    });
}
var inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15];
var outputArray = fizzbuzz(inputArray);
console.log(outputArray);
