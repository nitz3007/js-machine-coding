# Function.prototype.apply

***The Function.prototype.apply() method calls the specified function with a given this value, and arguments provided as an array (or an array-like object).***

Write a polyfill for Function.prototype.apply
To avoid overwriting the actual Function.prototype.apply, implement the function as Function.prototype.myApply.


### Example:
```
function multiplyAge(multiplier = 1) {
  return this.age * multiplier;
}

const mary = {
  age: 21,
};

const john = {
  age: 42,
};

multiplyAge.myApply(mary); // 21
multiplyAge.myApply(john, [2]); // 84
```

### Approach 1: using bind

### Approach 2: using call

### Approach 3: using symbol