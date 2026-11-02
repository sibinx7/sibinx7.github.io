---
title: October 2026 Javascript Questions
---

### What is Hoisting 

Hoisting in Javascript is a mechanism where Javascript processes declarations before executing the code, making certain variables and functions available earlier in their scope.

In simple terms JavaScript prepare declarations before executing statements

#### Hoisting with `var`

```aiignore
    console.log(name)
    var name = 'John'
```

Answer:  `name` is undefined 

#### Hoisting with `let` and `const`

```aiignore
    console.log(name)
    let name = 'John'
```

Answer:  `name` is not ReferenceError 

#### Hoisting with `functions`

##### Unnamed function
```aiignore
    helloName()
    function helloName() {
        console.log('Hello World')
    }
```

Answer:  `helloName` is executed and prints 'Hello World'

##### Named functions `let` and `var`

Similarly to variable `var` function return TypeError/Undefined, but `let` and `const` return ReferenceError


##### How `JavaScript` handle hoisting internally 

Phase 1: Creation Phase
- Creates the execution context 
- Registers variable and function declarations
- Allocates memory for variables 
- Sets up lexical environments

Phase 2: Execution Phase
- Executes the code line by line
- Assigns values
- Calls functions
- Evaluate expressions

### Constructor in JavaScript 

A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor is defined using the `new` keyword and the `this` keyword. When a constructor is called, it creates a new object and sets the `this` keyword to refer to that object. The constructor can then initialize the object's properties and methods.

```aiignore
 class User {
    #name = '';
    #age  = '';
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
 }
```

### Implements vs Extend

Extend used to inherit other classes 

```aiignore
class Animal{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    eat(){
        console.log('Animal is eating')
    }    
}

class Dog extends Animal{
    constructor(name, age){
        super(name);
        this.#age = age;
    }
    bark(){
        console.log('Dog is barking')
    }
}

```


### MicroTask vs MacroTask

`MicroTask` and `MacroTask` are two categories of asynchronous tasks handled by the `Event Loop`. The key difference is their execution priority. `MicroTasks` run before then next `MacroTask`. 


| Features | MicroTask | MacroTask |
| --- | --- | --- |
| Priority | High | Low |
| Examples | Promises, async/await, queueMicrotask() | setTimeout, setInterval, I/O operations |
| Execution Order | Runs before the next MacroTask | Runs after all MicroTasks |
| Procesing | All queued microtasks are processed before the next MacroTask | One task is processed per event-loop iteration |
 

```aiignore
console.log("1. Start");

setTimeout(() => {
  console.log("2. setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Promise");
});

queueMicrotask(() => {
  console.log("4. queueMicrotask");
});

console.log("5. End");
```

```
1. Start
5. End
3. Promise
4. queueMicrotask
2. setTimeout
```


### What is Event Emitter 

And Event Emitter is design pattern and mechanism that allows one part of the application to  emit ( publish) events and other parts of the application to subscribe to those events and react to them.

```
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Subscribe to an event
emitter.on('userRegistered', (user) => {
  console.log('Welcome:', user.name);
});

// Emit an event
emitter.emit('userRegistered', {
  id: 1,
  name: 'Sibin'
});
```

| Method | Purpose |
| --- | --- |
| `on` | Register an event listener |
| `emit` | Trigger an event |
| `once` | Execute an event listener only once |
| `off` | Remove an event listener |
| `removeListener` | Remove an event listener |
| `removeAllListeners` | Remove all event listeners |
| `listenerCount` | Get the number of listeners for an event |


### What is a `Promise`

A `Promise` is a `JavaScript` object that represents the eventual completion or failure of an asynchronus operation.

#### Stages of `Promise`

- Pending: Operation is still running 
- Fulfilled: Operation completed successfully 
- Rejected: Operation failed 

#### Promise Example 
```
const myPromise = new Promise((resolve, reject) => {
    // Run some operation, async - await, setTimeout 
    const success = true; // some api etc..
    if(success){
        resolve(//data)
    }else{
        reject(//reason)
    }
});

myPromise.then((response) => {
    // Success
}).catch((error) => {
    // Error
}).finally(() => {
    // After complete all
})

```

#### Promise methods 

| Method | Behavior| When to Use |
| -------| --------| ------------|
|`Promise.all` | Resolve when all promises succeeded. Reject immediately if any promise fail |  When all independent tasks must complete successfully |
|`Promise.allSettled`| Waits for all promises to suites and return array of status object | When you need the outcome of every request regardless of individual failures |
|`Promise.race` | Settles as soon as the first Promise settles (success/failure) | Setting timeouts on requests or handling fastest response scenarios |
|`Promise.any` | Resolve as soon as first Promise fullfill, ignore rejections unless all failes | Finding first successful response |



### How do you handle errors in Synchronous and Asynchronouse operations 

Error handling in JavaScript differ between asynchronous and synchronus. Synchronous operation block execution and throw error immediately while asynchronous operations
deals with results and rejections occure later without blocking, non blocking time.

##### Synchronus operation 
```
    try{
        const a = JSON.parse(<STRING DATA>)
    }catch(e){
        console.log('Error', e)
    }
```

#### Asynchromous with `async - await` 
```
try{
    const response = await fetch(')
}catch(e){
    console.log('Error ', e)
}
```

#### Promise .catch

Promise has catch block where error handled 
```
aPromise.then(() => {

}).catch((error) => {
    console.log(error)
})

```

#### Node global error 
```
    process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Perform cleanup and gracefully shut down if necessary
    });

    // Catches truly uncaught synchronous exceptions
    process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception thrown:', error);
    process.exit(1);
    });
```

