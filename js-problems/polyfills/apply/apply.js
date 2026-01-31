
// Approach 1 - using bind
Function.prototype.myApply = function(thisArg, argArray=[]) {
    return this.bind(thisArg, ...argArray)();
}

//Approach 2 - using call:
Function.prototype.myApply = function(thisArg, argArray=[]) {
    return this.call(thisArg, ...argArray);
}

//Approach 3 - using Symbol
Function.prototype.myApply = function(thisArg, argArray=[]) {
    const sym = Symbol();
    let wrapperObj = new Object(thisArg);
    Object.defineProperty(wrapperObj, sym, {
        value: this,
        enumerable: false
    });

    return wrapperObj[sym](...argArray);
}