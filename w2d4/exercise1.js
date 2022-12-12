String.prototype.filtering = function (...banned) {
    let before = this;
    console.log("Before the filtering the string received in the filtering function, " + before + " with banned words: " + banned);
    let strArr = this.split(' ');
    console.log("Output:");
    return strArr.filter(x => !banned.includes(x)).reduce((acc, y) => acc + " " + y);
}

console.log("I am not Sunit!".filtering('not', 'a'));
