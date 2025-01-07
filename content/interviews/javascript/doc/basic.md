---
title: Javascript Software Design
---


### Design Pattern
Software design pattern

##### 1.    Singleton Pattern
Ensures that a class has only one instance and provides a global point of access to it. Often used for shared resources such as configuration settings or database connections.

##### 2.    Factory Pattern
Provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created. Useful for creating instances dynamically based on specific requirements.

##### 3.    Observer Pattern
Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically. Commonly used in event-driven architectures.

##### 4.    Decorator Pattern
Allows behavior to be added to individual objects, either statically or dynamically, without affecting the behavior of other objects from the same class. Useful for extending functionality without modifying the base class.

##### 5.    Strategy Pattern
Enables selecting an algorithm's behavior at runtime. Defines a family of algorithms, encapsulates each one, and makes them interchangeable.

##### 6.    Middleware Pattern
Processes requests and responses in a chain-like manner. Often used in web frameworks like Express.js to apply a sequence of reusable processing logic.

##### 7.    Module Pattern
Encapsulates code and organizes it into reusable, self-contained components. It hides internal implementation details while exposing specific public methods.

##### 8.    Proxy Pattern
Provides a surrogate or placeholder object to control access to another object. Useful for lazy initialization, access control, and logging.

##### 9.    Command Pattern
Encapsulates a request as an object, allowing you to parameterize objects with different requests, delay execution, or queue requests. Often used in task scheduling and undo operations.

##### 10.   MVC Pattern (Model-View-Controller)
Separates application logic into three interconnected components:
    
    - Model: Handles data and business logic.
    - View: Manages the presentation layer.
    - Controller: Handles user input and updates the model or view accordingly.
##### 11.   Repository Pattern
Abstracts data access logic, providing a clean API to interact with the database or other storage layers. Useful for separating the business logic from data access concerns.

##### 12.   Builder Pattern
Provides a way to construct complex objects step by step. It separates the construction process from the representation, allowing the same construction process to create different representations.

##### 13.   Adapter Pattern
Allows incompatible interfaces to work together. It acts as a bridge between two objects, making them compatible without altering their existing code.

##### 14.   Composite Pattern
Composes objects into tree structures to represent part-whole hierarchies. Treats individual objects and compositions of objects uniformly, making them easier to work with.

##### 15.   Template Pattern
Defines the skeleton of an algorithm in a superclass, allowing subclasses to override specific steps without changing its overall structure.

##### 16.   Prototype Pattern
Creates new objects by copying an existing object, known as the prototype. Useful when object creation is expensive, and new objects share many properties with existing ones.

##### 17.   Chain of Responsibility Pattern
Allows a request to be passed along a chain of handlers until it is processed. Each handler decides either to process the request or pass it to the next handler.

##### 18.   Flyweight Pattern
Minimizes memory usage by sharing as much data as possible between similar objects. Particularly useful for large numbers of similar objects.

##### 19.   State Pattern
Allows an object to alter its behavior when its internal state changes. It appears as if the object changed its class dynamically.

##### 20.   Observer-Mediator Pattern
Centralizes communication between objects in a system. Instead of objects communicating directly, a mediator handles interactions to reduce dependencies.

##### 21.   Bridge Pattern
Decouples an abstraction from its implementation so that the two can vary independently. It is especially useful for systems that might need to switch between different implementations at runtime.

##### 22.   Visitor Pattern
Separates algorithms from the objects on which they operate. Useful for adding new operations to existing object structures without modifying their code.

##### 23.   Iterator Pattern
Provides a way to access elements of a collection sequentially without exposing its underlying representation. Useful for traversing data structures.

##### 24.   Dependency Injection Pattern
Allows a class to receive its dependencies from an external source rather than creating them internally. Promotes loose coupling and testability.

##### 25.   Service Locator Pattern
Centralizes the logic for locating services. It acts as a registry for services that can be accessed globally, reducing the complexity of dependency management.

##### 26.   Publish-Subscribe Pattern
Facilitates communication between multiple components in a loosely coupled way. Publishers send messages, and subscribers listen for them, often through an event bus or message queue.

##### 27.   Data Mapper Pattern
Separates the database schema from the application logic by mapping database records to application objects. Simplifies data transformations.

##### 28.   Active Record Pattern
Encapsulates database operations within an object. The object directly corresponds to a database table and handles CRUD operations.

##### 29.   Lazy Initialization Pattern
Delays the creation or calculation of a resource until it is actually needed. Useful for optimizing resource usage.

##### 30.   Object Pool Pattern
Maintains a pool of objects ready for use rather than creating and destroying them repeatedly. Useful for managing expensive resource allocation.

___


### Memory management in Javascript 
Memory management is the process of allocating and deallocating memory in your program to ensure efficient use of resources. JavaScript handles memory automatically using garbage collection. Here’s a detailed explanation:

- ##### Memory Lifecycle
  - *Allocate Memory* - When you create variables, objects or functions, memory is allocated to store data.
  - *Use Memory* - The program accesses and manipulated the allocated memory during execution.
  - *Release Memory* - When the memory is no longer needed, it should be deallocated to avoid memory leaks.
- ##### Typeof Memory 
  - *Heap*  
    - Use for storing object and functions 
    - Dynamically allocated memory 
  - *Stack*
    - Used for storing primitive values and execution contexts (function only)
    - Operates in a Last-In-First-Out (LIFO) manner 
- ##### Garbage Collection 
  Javascript uses an automatic garbage collection mechanism to free up memory that is no longer in use. The most common algorithm used is _*mark-and-sweep*_
    - The GC starts from the "root", (eg: windows in browser)
    - It marks all objects that are reachable are considered unused 
    - The unused objects are removed, and their memory is reclaimed 
- ##### Memory Leaks 
  
  - **Global Variables**: Variable unintentionally remain accessible throughout the program, preventing GC 
  - **Event Listeners**: Un-removed event listeners can retain references to DOM elements, preventing then from being garbage collected 
  - **Closures**: A Closures can inadvertently retain references to variables or objects that are no longer needed.
  - **Detached DOM Elements**: If a DOM element is removed from the DOM tree but still references in javascript, it won't be garbage collected.
  - **Circular References**: When two objects references each other, GC may not be able to determine that they are no longer need.

- ##### Best Practice for effective Memory management 
  - **_Avoid Global variable_**: Use _let_ or _const_ to ensure variable block scoped 
  - **_Nullify References_**: Set variable to _null_ when you are not using them, especially for large object 
  - **_Remove Event Listeners_**: Use _removeEventListener()_ to clean up unused listeners 
  - **_User weak references_**: Use _WeakMap_ or _WeakSet_
  - **_Optimize DOM Manipulation_**: Avoid creating unnecessary DOM elements and cleanup unused nodes 
  - **_Avoid circular references_**: Avoid creating mutual references 
