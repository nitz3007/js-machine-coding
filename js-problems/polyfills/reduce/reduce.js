Array.prototype.myReduce = function(callbackFn, initialValue) {
    let arr = this;
    let len = this.length;
    if(initialValue === undefined && len == 0) {
        throw new Error("Type Error");
    }

    let accumulator;
    if(initialValue === undefined && len > 0) {
        accumulator = arr[0];
        for(let i=1; i<len; i++) {
            if(i in arr) {
                accumulator = callbackFn.call(undefined, accumulator, arr[i], i, arr);
            }   
        }
    } else {
        accumulator = initialValue;
        for(let i=0; i<len; i++) {
            if(i in arr) {
                accumulator = callbackFn.call(undefined, accumulator, arr[i], i, arr);
            }       
        }
    }

    return accumulator;
}

//test
// const numbers = [1,2,3,4,5,8];
// const sum = numbers.myReduce((accumulator, current)=> (accumulator+=current), 0);
// console.log(sum);