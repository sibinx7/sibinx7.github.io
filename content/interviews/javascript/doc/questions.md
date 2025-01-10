---
title: Interview logical questions
---


### Predict output
1. Question 
```javascript
    function example() {
        var x = 1;
        let y = 2;
        const z = 3;
    
        if (true) {
            var x = 10; 
            let y = 20; 
            const z = 30;
            console.log(x, y, z); 
        }
    
        console.log(x, y, z); 
    }

```

Answer:
```javascript

10,20,30
10,2,3

```
___ 

2. Question 
```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Rejected');
  }, 200)
  setTimeout(() => {
    resolve('Resolved');
    // console.log('Hello')
  }, 300);
});

myPromise
.then(e => console.log('Success', e))
.catch(e => console.log('Failed', e))
.finally(e => console.log('Final', e))
```

Answer

```javascript
Failed, Rejected
Final, undefined
```

___ 

3. Question 
```javascript
const promiseX = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise X resolved"), 1000);
});
const promiseY = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise Y resolved"), 500);
});
Promise.race([promiseX, promiseY])
    .then(result => {
        console.log(result); 
    })
    .catch(error => console.error('Error:', error));
```
Answer 
```javascript
Promise Y resolved
```
___ 
4. Question 
```javascript
 async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
}

async function processData() {
  console.log("Start processing");
  const data = await fetchData();
  console.log(data);
  console.log("Processing complete");
}

console.log("Begin");

processData().then(() => {
  console.log("Done");
});

console.log("End");
```

Answer 

```javascript
Begin
Start processing
End
Data fetched
Processing complete
Done
```
___ 
5. Question

```javascript
const { x: a = 10, y: b = 20 } = { x: undefined, y: null };
console.log(a, b);
```

Answer 
```javascript
10 null
```
___ 
6. Question 

```javascript
async function test() {
  console.log('Start');
  const p1 = new Promise((resolve) => setTimeout(() => resolve('P1'), 1000));
  const p2 = new Promise((resolve) => setTimeout(() => resolve('P2'), 500));
  console.log(await p1);
  console.log(await p2);
  console.log('End');
}
test();
```

Answer 

```javascript
Start 
P1
P2 
End
```
___ 

7. Question 

```javascript
console.log('Hello ' + 5);       
console.log(5 + '5');             
console.log(null + 'text');       
console.log(1 == '1');           
console.log(null == undefined);
```

Answer 

```javascript
Hello 5
55
nulltext
true
true
```
___ 