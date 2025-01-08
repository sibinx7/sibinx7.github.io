---
title: React Optimization 
--- 


## React Performance Improvements 
___
### React.memo, useMemo, useCallback
___

#### React.memo 

Optimizes functional components by memoizing their output to prevent unnecessary re-renders. If the props of the components don't change, React skips re-rendering it.
Functional components that rely only on props and avoid re-rendering if props remain the same

`Prevents re-renders of functional components`

#### useMemo 

Memoizes a computed value to avoid recalculating it on every renders unless dependencies changes. Caches the result of an expensive calculation

`Prevents expensive calculations from being re-executed`

#### useCallback 

Memoizes a function so that it retains the same references between renderts unless its dependencies changes. Prevent unnecessary recreation of functions, often useful when passing callbacks to child components

`Prevent functions from being recreated unnessarily`


#### React Lazy 
Enable code splitting in react applications by dynamically importing components. This helps in optimizing app performance by loading components only when they are needed.

- Code Splitting: Divides the application into smaller bundles to improve initial load time 
- Dynamic Imports: The compoinent is not loaded until it is rendered 
- Suspense Integration: Work with the `React.Suspense` components to show a falback UI while the lazy loaded components is being fetched.

```react

import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./MyComponent'));

const App = () => {
    return (
        <div className='app'>
            <Suspense fallback={<div>Loading</div>}>
                <LazyComponent/>
            </Suspense>
        </div>
    )
}

```


#### React performance packages 

- react-intersection-observer
- react-lazyload 
- react-virtualized
- react-window 

#### Performce Improvements 

- Avoid inline function definition 
- Throttling and debouncing events 
- Add key to list rendering 
- React SSR 
- Use Web workers 
