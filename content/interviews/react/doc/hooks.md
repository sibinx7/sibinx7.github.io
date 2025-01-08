---
title: React hooks 
---


# React Hooks 

React hooks are functions that let you use **React State**, **Lifecycle features**, and other React capabilities in functional components. 


### Common Hooks 

#### `useState`

- Manage state in function component 

```react
const [state, setState] = useState(<INITIAL VALUE>);

setState(<UPDATED VALUE>);

```

#### `useEffect` 

- Handles side effects like data fetching, subscriptions, and manual DOM manipulations.

```react
useEffect(() => {
    // mount 
    return () => {
        // unmount
    }
}, [DEPENDANCY ARRAY])

```

#### `useContext`

- Accesses context values without the need for a Consumer component.

```react
    const value = useContext(MyContext)
```


### Performance Hooks 


#### `useMemo`

- Memoizes a value to optimize performance for expensive calculations.

```react
    const [ number, setNumber] = useState(0);
    setNumber(3)
    const doubleNumber = useMemo(() => {
        return number * 2;
    }, [ number])
```

#### `useCallback`

- Memoizes a function to prevent unnecessary re-creations.

```react
    const memoizedFunction = useCallback(() => {
    
    }, [ dependency ])
```

#### `useTransition`

- Helps manage transitions between UI states.

```react
    const [ isPending, startTransition ] = useTransition();
```

Example 

```react

const TransitionExample = () => {

    const initalItems = [...Array(1000000).keys()];

    const [ isPending, startTransition ] = useTransition();
    
    const [ items, setItems ] = useState(initialItems)

    const handleSearchKeyWord = (event) => {
        let value = event?.target?.value || 2;
        startTransition(() => {
            setItem((prevItems) => {
                return initalItems.filter((_, index) => {
                    return _%2value;
                })
            
            })
        })
        
    }

    return (
        <div className='transition-element'>
            <div className=''>
                <input type='text' onChange={ handleSearchKeyWord }/>
            </div>
            { isPending && <div>Loading...</div>}
            { !isPending && <div>
                {
                    items.map((item, index) => {
                        <div key={`${item}-${index}}></div>
                    })                                        
                }
            </div>}
        </div>
    )
}

```

#### `useDeferredValue`

- Defers updates for better responsiveness in UI-heavy apps.

```react 
const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const deferredSelectedImage = useDeferredValue(selectedImage, { timeoutMs: 500 }); 

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      {/* Image Thumbnails */}
      <div>
        {images.map((image) => (
          <img 
            key={image.id} 
            src={image.thumbnail} 
            alt={image.title} 
            onClick={() => handleImageClick(image)} 
          />
        ))}
      </div>

      {/* Large Image Viewer */}
      {deferredSelectedImage && (
        <div>
          <img 
            src={deferredSelectedImage.url} 
            alt={deferredSelectedImage.title} 
          />
        </div>
      )}
    </div>
  );
}

```