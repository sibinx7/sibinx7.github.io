---
title: "Javascript index"

---

# JavaScript 

### MicroFrontend 
-	Independent Deployment : Each microfrontend (MFE) is an independent application
-	Integration: MEFs can be  composed to create a cohesive user experience
-	Technology Agnostic:  Any modern JS Framework can be used
-	Routing: Typically managed by shell, host or main application
-	Communication: MEFs communicate using events, props, shared state management, web storage, Server session

#### Popular Tools 
- Webpack modular federation 
- Single SPA 

#### Communication
- Browser events 
- Browser storage 
- Shared state management 
- Server APIs and session 
- URL queries 


### Singleton 
It is a design pattern that ensures a class or module has only one instance and provides a global of access to that instance. This is useful when you want to maintain a single shared state or configuration
Example: Redux, Global State 


### Promise, Async- Await 

##### Promise 
A promise in Javascript is a way to handle asynchronous operations. It can be in one of three states: 
pending, resolved or rejected 

```javascript

const myPromise = new Promise((resolve, reject) => {
	const success = true;
	if(success){
		resolve('Success')
    }else{
		reject('Error')
    }
})

```

- Chaining `.then()`

`.then()`, used to chain promises 

- **Promise.all()**:  Handling multiple promises with `Promise.all()`
- **Promise.allSettled()**: Resolved when all promises settled(fulfilled or rejected)
  ```javascript
    const responseAll = await Promise.allSettled([new Promise(), new Promise(), new Promise()]);
    responseAll.forEach((result, reject) => {
      if(result.status === 'fulfilled'){
        // Success 
      } else {
        // Error 
      }
    })
  ``` 
- **Promise.race()**: Resolves/Rejects as soon as the first promise settles 
- **Promise.any()**: Resolves as soon as the first promise resolves; reject if all promise reject 

##### Prototype 
In Javascript, a prototype is an object that acts as a blueprint for other projects. Every Javascript object has a prototype
from which it can inherit properties and methods. This mechanism is part of Javascript's prototype inheritance, which
allows objects to share properties and methods without duplication


##### Closure 
A closure in JavaScript is a feature that allows a function to "remember" the variables from its surrounding scope, even after the outer function has finished executing. Closures are created every time a function is defined inside another function, and the inner function accesses variables from the outer function's scope.

Key Concepts
- Function within a function: A closure is created when a function is defined inside another function.
- Access to outer variables: The inner function can access variables declared in the outer function, even after the outer function has returned.
- Encapsulation: Closures allow you to create private variables that cannot be accessed from outside the enclosing function.
```javascript
function outerFunction() {
  let outerVariable = "I'm from outer function!";

  function innerFunction() {
    console.log(outerVariable); // Accesses the outer function's variable
  }

  return innerFunction;
}

const myClosure = outerFunction(); // Returns the inner function
myClosure(); // Logs: "I'm from outer function!"
```


##### Currying 
Currying in JavaScript is a functional programming technique where a function is transformed into a series of functions, each taking a single argument. Instead of taking all arguments at once, the function takes one argument, then returns another function that takes the next argument, and so on, until all arguments have been provided.

- Reusability: You can create specialized functions by providing some of the arguments upfront.
- Readability: Currying can make code more declarative and expressive.
- Avoiding repetition: Useful for scenarios where a function is frequently called with the same initial arguments.

##### Handle Memory Leak in JavaScript
A memory leak in JavaScript occurs when memory that is no longer needed is not released, preventing the garbage collector from reclaiming it. This leads to increased memory usage over time, which can cause performance degradation or even application crashes.

###### Global Variables
Unintentionally declared variables are added to the global scope and persist for the lifetime of the application.
```javascript

function someEvents(){
	isItAGlobalVariable = 'Some thing '; // no var, let, const, it will act as global variable 
}

someEvents()

```

###### Clear Timers or Intervals 
Unused `setInterval` and `setTimeout` references keep running even after they are no longer needed.
```javascript
let intervalId = setInterval(() => console.log('Still running'), 1000);
clearInterval(intervalId)
```

###### Detached DOM Events 
Retaining references to DOM elements that are removed from the document
```javascript
let node = document.createElement('div');
document.body.appendChild(node);
document.body.removeChild(node);
node = null; 
```


###### Event listener
Event listeners attached to elements can prevent garbage collection if not removed 
```javascript
  const button = document.getElementById("myButton");
  function handleClick() {
      console.log("Clicked!");
  }
  button.addEventListener("click", handleClick);
  button.removeEventListener("click", handleClick); // Clean up when done
```

###### Use `WeakMap` and `WeakSet` for object reference 
Unlike Map or Set, these structures do not prevent garbage collection of keys.
```javascript
  const weakMap = new WeakMap();
  let obj = {};
  weakMap.set(obj, "value");
  obj = null; // Now the object can be garbage collected
```

###### Use a Garbage Collection Controller
Trigger garbage collection manually (only for debugging purposes) using
```javascript
  if (window.gc) {
      gc(); // Requires the browser to be started with special flags
  }
```

###### Best Practices 
- Minimize Long-Lived References: Avoid keeping objects alive longer than necessary.
- Use Weak References: Replace Map or Set with WeakMap or WeakSet for objects.
- Monitor Application Performance: Regularly check memory usage in development.
- Test for Memory Leaks: Use tools like Chrome DevTools or libraries like leak-canary for testing.