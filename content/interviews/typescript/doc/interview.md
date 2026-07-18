---
title: TypeScript
---

# TypeScript Interview Questions (Basic to Intermediate)

## 1. What is TypeScript?

**Answer:**
TypeScript is an open-source programming language developed by Microsoft. It is a superset of JavaScript that adds static typing, interfaces, generics, decorators, and other modern features. TypeScript code is compiled into plain JavaScript.

---

## 2. What are the advantages of TypeScript?

- Static type checking
- Better IDE support (IntelliSense, autocomplete)
- Easier refactoring
- Early error detection
- Improved code maintainability
- Better support for large applications
- Modern ECMAScript features

---

## 3. Difference between TypeScript and JavaScript?

| TypeScript | JavaScript |
|------------|------------|
| Statically typed | Dynamically typed |
| Compiled to JavaScript | Runs directly in browsers |
| Better tooling | Limited tooling |
| Interfaces and Generics | No built-in interfaces or generics |
| Detects errors during compilation | Errors occur at runtime |

---

## 4. How do you install TypeScript?

```bash
npm install -g typescript
```

Check version:

```bash
tsc --version
```

---

## 5. How do you compile a TypeScript file?

```bash
tsc app.ts
```

---

## 6. What is a type annotation?

```typescript
let age: number = 25;
let name: string = "John";
let active: boolean = true;
```

---

## 7. Primitive Types

```typescript
let age: number = 30;
let name: string = "Alex";
let isAdmin: boolean = false;
let data: null = null;
let value: undefined = undefined;
let id: bigint = 100n;
let symbol: symbol = Symbol();
```

---

## 8. What is type inference?

TypeScript automatically determines the type.

```typescript
let name = "John"; // string
let age = 20; // number
```

---

## 9. What is the `any` type?

```typescript
let value: any = 10;
value = "Hello";
value = true;
```

Avoid using `any` unless absolutely necessary.

---

## 10. What is `unknown`?

Safer alternative to `any`.

```typescript
let value: unknown = "Hello";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}
```

---

## 11. Difference between `any` and `unknown`

| any | unknown |
|------|----------|
| No type checking | Type checking required |
| Unsafe | Safe |
| Can access properties directly | Must narrow type first |

---

## 12. What is `never`?

Represents values that never occur.

```typescript
function throwError(message: string): never {
    throw new Error(message);
}
```

---

## 13. What is `void`?

Used when a function doesn't return anything.

```typescript
function printName(name: string): void {
    console.log(name);
}
```

---

## 14. Arrays

```typescript
let numbers: number[] = [1,2,3];

let names: Array<string> = ["A","B"];
```

---

## 15. Tuples

```typescript
let employee: [number, string] = [1, "John"];
```

---

## 16. Enum

```typescript
enum Color {
    Red,
    Green,
    Blue
}

let c = Color.Red;
```

---

## 17. String Enum

```typescript
enum Status {
    Success = "SUCCESS",
    Failed = "FAILED"
}
```

---

## 18. Object Type

```typescript
let user: {
    name: string;
    age: number;
};

user = {
    name: "John",
    age: 30
};
```

---

## 19. Optional Properties

```typescript
interface User {
    name: string;
    age?: number;
}
```

---

## 20. Readonly Properties

```typescript
interface User {
    readonly id: number;
    name: string;
}
```

---

## 21. Interface

```typescript
interface Employee {
    id: number;
    name: string;
}

const emp: Employee = {
    id: 1,
    name: "John"
};
```

---

## 22. Type Alias

```typescript
type Employee = {
    id: number;
    name: string;
};
```

---

## 23. Difference between Interface and Type

| Interface | Type |
|-----------|------|
| Extendable | Supports unions |
| Can merge declarations | Cannot merge |
| Best for object shapes | Best for complex types |

---

## 24. Union Types

```typescript
let value: string | number;

value = "Hello";
value = 100;
```

---

## 25. Literal Types

```typescript
type Direction = "left" | "right" | "up" | "down";
```

---

## 26. Intersection Types

```typescript
type Person = {
    name: string;
};

type Employee = {
    company: string;
};

type Staff = Person & Employee;
```

---

## 27. Type Assertion

```typescript
let value: unknown = "Hello";

let str = value as string;
```

---

## 28. Function with Types

```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

---

## 29. Optional Parameters

```typescript
function greet(name?: string) {
    console.log(name);
}
```

---

## 30. Default Parameters

```typescript
function greet(name = "Guest") {
    console.log(name);
}
```

---

## 31. Rest Parameters

```typescript
function sum(...numbers: number[]) {
    return numbers.reduce((a,b)=>a+b);
}
```

---

## 32. Function Type

```typescript
let multiply: (a:number,b:number)=>number;

multiply = (x,y)=>x*y;
```

---

## 33. Arrow Functions

```typescript
const square = (n:number):number => n*n;
```

---

## 34. Classes

```typescript
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
```

---

## 35. Access Modifiers

```typescript
class Employee {

    public name: string;

    private salary: number;

    protected department: string;

    constructor(name:string){
        this.name=name;
    }
}
```

---

## 36. Inheritance

```typescript
class Animal {
    move() {}
}

class Dog extends Animal {
    bark() {}
}
```

---

## 37. Abstract Class

```typescript
abstract class Shape {
    abstract area(): number;
}
```

---

## 38. Interface Implementation

```typescript
interface Animal {
    sound(): void;
}

class Dog implements Animal {
    sound() {
        console.log("Bark");
    }
}
```

---

## 39. Generic Function

```typescript
function identity<T>(value: T): T {
    return value;
}
```

---

## 40. Generic Interface

```typescript
interface ApiResponse<T> {
    data: T;
    success: boolean;
}
```

---

## 41. Generic Class

```typescript
class Box<T> {
    constructor(public value: T) {}
}
```

---

## 42. keyof Operator

```typescript
interface User {
    name: string;
    age: number;
}

type Keys = keyof User;
```

---

## 43. typeof Operator

```typescript
const user = {
    name: "John"
};

type User = typeof user;
```

---

## 44. Partial Utility Type

```typescript
interface User {
    name: string;
    age: number;
}

const user: Partial<User> = {
    name: "John"
};
```

---

## 45. Required Utility Type

```typescript
type UserRequired = Required<User>;
```

---

## 46. Readonly Utility Type

```typescript
type ReadonlyUser = Readonly<User>;
```

---

## 47. Pick Utility Type

```typescript
type UserName = Pick<User, "name">;
```

---

## 48. Omit Utility Type

```typescript
type UserWithoutAge = Omit<User, "age">;
```

---

## 49. Record Utility Type

```typescript
type Users = Record<string, number>;
```

---

## 50. What is tsconfig.json?

The configuration file for TypeScript.

Example:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

---

# Frequently Asked Interview Questions

### What is strict mode?

Enables all strict type checking.

```json
{
  "strict": true
}
```

---

### What is optional chaining?

```typescript
user?.address?.city;
```

---

### What is nullish coalescing?

```typescript
const name = userName ?? "Guest";
```

---

### Difference between `==` and `===`

- `==` compares values after type coercion.
- `===` compares both value and type.

---

### What are Generics?

Generics allow reusable components that work with different data types while maintaining type safety.

---

### What are Utility Types?

Built-in helper types such as:

- Partial
- Required
- Readonly
- Pick
- Omit
- Record
- Exclude
- Extract
- NonNullable
- ReturnType
- Parameters

---

### What is Declaration Merging?

Interfaces with the same name are automatically merged.

```typescript
interface User {
    name: string;
}

interface User {
    age: number;
}

const user: User = {
    name: "John",
    age: 30
};
```

---

### Explain Type Narrowing.

TypeScript reduces a union type based on runtime checks.

```typescript
function print(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}
```

---

# Senior-Level Topics

- Conditional Types
- Mapped Types
- Indexed Access Types
- Template Literal Types
- Infer Keyword
- Decorators
- Module Resolution
- Declaration Files (`.d.ts`)
- Namespaces vs Modules
- Type Guards
- Discriminated Unions
- Exhaustive Checking
- Recursive Types
- Generic Constraints
- Variadic Tuple Types
- Async Generics
- Advanced Utility Types