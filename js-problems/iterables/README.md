# Iterables

Iterables are objects that implement the Symbol.iterator method.
Refer the example in iterable.js

How iterables work in a for...of ?
When for..of starts, it calls the method first. The method returns an iterator object with a next method.
Onwards, the for...of olny works with this iterator object.
Whenever it needs the next value in eah iteration, it calls the next() method.
the next() object must return an object in this format:- {done: boolean vale: any}
where, done = true means the iteration is over. done = false means iteration is going on and a value property is accompanied with it containing the value for next iteration.


