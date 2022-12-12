Array.prototype.bubbleSort = function () {
    let intArr = this;
    console.log("Before sorting, the unsorted array received on the function is: " + intArr);
    for (let i in intArr) {
        for (let j = 0; j < (intArr.length - i - 1); j++) {
            if (intArr[j] > intArr[j + 1]) {
                let temp = intArr[j];
                intArr[j] = intArr[j + 1];
                intArr[j + 1] = temp;
            }
        }
    }
    console.log("After bubble sorting, the output is:");
    return intArr;
};

console.log([6, 4, 0, 3, -2, 1].bubbleSort());
