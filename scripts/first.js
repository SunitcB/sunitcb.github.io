

function testAnyFunction(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

function max(first, second) {
    if (first > second) {
        return first;
    } else {
        return second;
    }
}

function maxOfThree(first, second, third) {
    if (first > second && first > third) {
        return first;
    } else if (second > first && second > third) {
        return second;
    } else {
        return third;
    }
}

function isVowel(letter) {
    let vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(letter);
}

function sum(arr) {
    if (Array.isArray(arr)) {
        return arr.reduce((acc, x) => acc + x, 0);
    } else {
        return 0;
    }
}

function multiply(arr) {
    if (Array.isArray(arr)) {
        return arr.reduce((acc, x) => acc * x, 1);
    } else {
        return 0;
    }
}

function reverseStr(str){
    return str.split("").reverse().join("");
 }

console.log(reverseStr("Another"));

console.log("TEST RESULT FOR FUNCTION, max : " + testAnyFunction(44, max(33, 44)));
console.log("TEST RESULT FOR FUNCTION, maxOfThree : " + testAnyFunction(44, maxOfThree(33, 44, 22)));
console.log("TEST RESULT FOR FUNCTION, isVowel: " + testAnyFunction(false, isVowel("z")));
console.log("TEST RESULT FOR FUNCTION, sum: " + testAnyFunction(15, sum([1, 2, 3, 4, 5])));
console.log("TEST RESULT FOR FUNCTION, multiply: " + testAnyFunction(120, multiply([1, 2, 3, 4, 5])));
console.log("TEST RESULF FOR FUNCTION, reverse: "+testAnyFunction("abc", reverseStr("cba")));
