---
title: TypeScript
---

# TypeScript

TypeScript is an open-source programming language developed by Microsoft. It is a **superset of JavaScript** that adds **static typing**, **interfaces**, **generics**, and other features to make applications more maintainable and scalable.

---

### Advantages

- Static type checking
- Better IntelliSense and IDE support
- Early error detection
- Easier refactoring
- Improved code maintainability
- Supports latest ECMAScript features
- Excellent for large-scale applications

---

### Installation

```bash
npm install -g typescript
```

Check version

```bash
tsc --version
```

Compile a file

```bash
tsc app.ts
```

---

# Basic Types

### `number`

```typescript
const age: number = 25;
```

---

### `string`

```typescript
const name: string = "John";
```

---

### `boolean`

```typescript
const isAdmin: boolean = true;
```

---

### `null`

```typescript
const value: null = null;
```

---

### `undefined`

```typescript
const value: undefined = undefined;
```

---

### `bigint`

```typescript
const amount: bigint = 100n;
```

---

### `symbol`

```typescript
const id: symbol = Symbol();
```

---

### `any`

- Disables type checking.
- Avoid using unless absolutely necessary.

```typescript

let value: any = 10;

value = "Hello";
value = true;
```

---

### `unknown`

- Safer alternative to `any`.
- Must check the type before using.

```typescript
let value: unknown = "Hello";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}
```

---

### `void`

- Used when a function doesn't return anything.

```typescript
function printName(name: string): void {
    console.log(name);
}
```

---

### `never`

- Represents values that never occur.

```typescript
function throwError(message: string): never {
    throw new Error(message);
}
```

---

# Type Inference

- TypeScript automatically detects the variable type.

```typescript
const name = "John";
const age = 25;
const active = true;
```

---

# Arrays

```typescript
const numbers: number[] = [1, 2, 3];

const names: Array<string> = ["John", "Alex"];
```

---

# Tuple

- Fixed length array with different types.

```typescript
const employee: [number, string] = [1, "John"];
```

---

# Enum

```typescript
enum Status {
    Active,
    Inactive,
    Pending
}

const currentStatus = Status.Active;
```

---

### String Enum

```typescript
enum Role {
    Admin = "ADMIN",
    User = "USER"
}
```

---

# Object Type

```typescript
const user: {
    id: number;
    name: string;
} = {
    id: 1,
    name: "John"
};
```

---

# Union Type

- Variable can have multiple types.

```typescript
let value: string | number;

value = "Hello";
value = 100;
```

---

# Literal Type

```typescript
type Direction = "left" | "right" | "top" | "bottom";
```

---

# Intersection Type

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

# Type Assertion

```typescript
let value: unknown = "Hello";

const text = value as string;
```

---

# Functions

### Function with Types

```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

---

### Optional Parameter

```typescript
function greet(name?: string) {
    console.log(name);
}
```

---

### Default Parameter

```typescript
function greet(name = "Guest") {
    console.log(name);
}
```

---

### Rest Parameter

```typescript
function sum(...numbers: number[]) {
    return numbers.reduce((a, b) => a + b, 0);
}
```

---

### Arrow Function

```typescript
const multiply = (a: number, b: number): number => {
    return a * b;
};
```

---

# Interface

- Defines the structure of an object.

```typescript
interface Employee {
    id: number;
    name: string;
}

const employee: Employee = {
    id: 1,
    name: "John"
};
```

---

### Optional Property

```typescript
interface User {
    name: string;
    age?: number;
}
```

---

### Readonly Property

```typescript
interface User {
    readonly id: number;
    name: string;
}
```

---

# Type Alias

```typescript
type Employee = {
    id: number;
    name: string;
};
```

---

### Interface vs Type

| Interface | Type |
|-----------|------|
| Extendable | Supports unions |
| Declaration merging | No declaration merging |
| Mainly object definitions | Any type |

---

# Classes

### Basic Class

```typescript
class Person {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

}
```

---

### Access Modifiers

```typescript
class Employee {

    public name: string;

    private salary: number;

    protected department: string;

    constructor(name: string) {
        this.name = name;
    }

}
```

---

### Inheritance

```typescript
class Animal {

    move() {}

}

class Dog extends Animal {

    bark() {}

}
```

---

### Abstract Class

```typescript
abstract class Shape {

    abstract area(): number;

}
```

---

### Implement Interface

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

# Generics

### Generic Function

```typescript
function identity<T>(value: T): T {
    return value;
}
```

---

### Generic Interface

```typescript
interface ApiResponse<T> {

    data: T;

    success: boolean;

}
```

---

### Generic Class

```typescript
class Box<T> {

    constructor(public value: T) {}

}
```

---

# Utility Operators

### `keyof`

```typescript
interface User {

    name: string;

    age: number;

}

type UserKeys = keyof User;
```

---

### `typeof`

```typescript
const user = {
    name: "John"
};

type User = typeof user;
```

---

# Utility Types

### `Partial`

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

### `Required`

```typescript
type UserRequired = Required<User>;
```

---

### `Readonly`

```typescript
type ReadonlyUser = Readonly<User>;
```

---

### `Pick`

```typescript
type UserName = Pick<User, "name">;
```

---

### `Omit`

```typescript
type UserWithoutAge = Omit<User, "age">;
```

---

### `Record`

```typescript
type Scores = Record<string, number>;
```

---

# Modern Features

### Optional Chaining

```typescript
const city = user?.address?.city;
```

---

### Nullish Coalescing

```typescript
const username = name ?? "Guest";
```

---

# Type Narrowing

- TypeScript narrows the type after checking.

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

# TypeScript Configuration

### `tsconfig.json`

- Configuration file for the TypeScript compiler.

```json
{
    "compilerOptions": {
        "target": "ES2022",
        "module": "ESNext",
        "strict": true,
        "rootDir": "./src",
        "outDir": "./dist"
    }
}
```

---

# Common Interview Questions

### Difference between `any` and `unknown`

| any | unknown |
|------|----------|
| No type checking | Requires type checking |
| Unsafe | Safe |
| Can access properties directly | Must narrow type first |

---

### Difference between `==` and `===`

| `==` | `===` |
|-------|--------|
| Compares value | Compares value and type |
| Performs type conversion | No type conversion |

---

### What are Generics?

- Allow reusable components while maintaining type safety.

---

### What are Utility Types?

- Partial
- Required
- Readonly
- Pick
- Omit
- Record
- Exclude
- Extract
- ReturnType
- Parameters

---

### What is Strict Mode?

```json
{
    "strict": true
}
```

- Enables all strict type-checking options.
- Helps catch errors during development.

---

# Advanced Topics

- Conditional Types
- Mapped Types
- Template Literal Types
- Type Guards
- Declaration Merging
- Indexed Access Types
- Discriminated Unions
- Recursive Types
- Infer Keyword
- Decorators
- Module Resolution
- Declaration Files (`.d.ts`)