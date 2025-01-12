---
title: Angular basics
---

## Angular 

Angular applications are structured into several key concept.

- `Modules`: The building blocks of an Angular application, containing related components, directives, pipes and services 
- `Components`: Define views (HTML templates) and behavior
- `Templates`: HTML views with angular specific syntax to bind dara and handle events.
- `Services`: Classes that handle business logic and data fetching

### Starting point of an Angular application 

```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

```

### Difference between JIT(Just in Time) and AOT(Ahead of Time)

| Feature | JIT            | AOT   |
| --------|----------------|-------|
|Compilation| At runtime     | At build time|
|Use case | Development    | Production|
|Inital Load Time | Slower         | Faster |
| Build Time | Faster         | Slower |
| Bundle size | Larger         | Smaller |
| Error detection | At runtime     | At build time |
| Code optmization | Less optimized | More optimized |
| Security | Less secure    | More secure |
| Compiled included | Yes            | No |



### Angular Life cycle hooks 

#### 1. `ngOnChanges`
Use `ngOnChanges` when, you want to use whenever a components `@Input()` property changes. You need to compare the new and previous values of the input properties.You want to trigger side effects based on the changes in the input properties.

```typescript
ngOnChanges(changes: SimpleChannges): void {
  // console.log(changes)
  // changes.property.previousValue 
  // changes.property.currentValue
  // changes.property.firstChange
}
```

#### 2. `ngOnInit`

It is a lifecycle hook in Angular that is called once after the component is initialized and the input properties are set.

#### 3. ngDoCheck
It is a lifecycle hook in Angular that allows developers to implement custom change detection logic. It is triggered during every change detection cycle, whether or not the data bound properties have changed 


#### 4. ngAfterContentInit 

It is a lifecycle hook in Angular that is called once after the component's projected content has been fully initialized. It is part of Angular **Content Projection Lifecycle**

#### 5. ngAfterViewInit 

It is lifecycle hook in Angular that is called once after the component view has been initialized. This includes any child components and elements that are part of the component template

```typescript
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `<p>Example works!</p>`,
})
export class ExampleComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
  }
}

```


#### 6. ngDestroy 

It is a lifecycle hook in Angular that is called just before a component, directive or service is destroyed. It allows developers to perform cleanup tasks such as unsubscribing from observables, detaching event listeners, stopping timers or releasing other resources to avoid memory leaks.
```typescript
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `<p>Example Component</p>`,
})
export class ExampleComponent implements OnDestroy {
  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
}
```

##### Angular lifecycle hooks
- ngOnChanges
- ngOnInit
- ngDoCheck
- ngAfterContentInit
- ngAfterContentChecked
- ngAfterViewInit
- ngAfterViewChecked
- ngDestroy



### Signal vs Public variable 

| Features         | Signal  | Public Property  |
|------------------| ------- |------------------|
| Reactivity       | Reactive and triggers automatic updates for dependencies | Non-reactive does not notify when changed |
| Change Detaction | Optimized, only updates where the signal us used | Relies on Angular default change detection |
| Purpose          | For state that needs to be reactive | For simple data storage without reactivity |
| Usage | Useful for managing component state or derived values | Suitable for static data or properties |
| Performance | Fine grained reactivity ensure minimal updates | Can cause unnecessary re-renders if large data is passed |
| Example | Uses `signal()` from Angular core | Declared as a polain Typescript property |

#### Signal 

```typescript

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-example',
  template: `
    <p>Count: {{ count() }}</p>
    <button (click)="increment()">Increment</button>
  `,
})
export class SignalExampleComponent implements OnInit{
  count = signal(0); // A reactive signal
  
  ngOnInit(){
	  count.set(5)
  }

  increment() {
    this.count.update((current) => current + 1);
  }
}
```


#### `boostrapModule` vs `bootstrapApplication`

- `bootstrapModule`: Normal angular module application 
- `bootstrapApplication`: Standalone angular application 

| Feature          | `boostrapApplication` | `boostrapModule` |
|------------------| -----                 | -----            |
| Introduced in    | Angular 14 | Angular 2|
| Require ngModule | No | Yes |
| Bootstrap with   | Standalone | RootModule |
| Bundle size      | Smaller | Larger |
| Complexity       | Simple | Complex |
| Lazy loading     | Limited | Full Support |
| Use cases | Minimal, Modern | Full Fledged application |


#### Pure and Impure Pipes 

A pure pipes only processes its input when angular detects a change in the value or references of the input. Pure pipe are optimized for performance because they avoid unnecessary execution during change detection. An impure pipe run on very detection cycle, regardless of whether the input data changes.
Impure pipe are resource intensive as re-execute for every detection change in the application.

| Feature                  | Pure Pipe                                                    | Impure Pipe                                           |
|--------------------------|--------------------------------------------------------------|-------------------------------------------------------|
| Execution                | Runs only when the input value or reference changes          | Runs on every change detection cycle                  |
| Performance              | More efficient and optimized for static or predictable data  | Less efficient, suitable for dynamic or external data |
| Change detection trigger | Triggered by changes in primitive value or object references | Triggered by every change detection cycle             |
| Syntax                   | ```@Pipe({name: 'PIPE NAME'})```                             | ```@Pipe({name: 'PIPE NAME', pure: false})```         |


