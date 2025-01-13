---
title: DOM related questions 
---

## DOM Event bubbling and Capture 

1. Event Capture 
2. Target Phase 
3. Event bubbling 
#### Event Capture 
- Event Capturing: The event starts from the window and travels down to the target element 
- It is also known as the `capture phase`
- Event listeners set with `{capture: true}` are triggered during phase 
```javascript

element.addEventListener(
  "click",
  () => {
    console.log("Element clicked (capturing)");
  },
  { capture: true }
);
```

#### Event bubbling 
- After reaching target event propagate back to the root 

___

## Mata Data 

#### Basic 

- ##### Title
```html
<title>Website Name</title>

```

- ##### Description 
```html
<meta name="description" content="This is website description, shows in search result"/>
```

- ##### Keywords
```html
<meta name="keywords" content="SEO, HTML5, React, Javascript"/>
```

- ##### Author 
```html
<meta name="author" content="John Doe"/>
```

- ##### Viewport
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
```

- ##### Robots: Control how search engine bots index or follow links on the page 
```html
<meta name="robots" content="index, follow"> <!-- Allow indexing -->
<meta name="robots" content="noindex, nofollow"> <!-- Prevent indexing -->
```

- ##### Canonical: Indicate preferred URL for a webpage, avoiding duplicate  content issue 
```html
<link rel="canonical" href="https://example.com/">
```

- ##### Facebook meta tags 
```html
<meta property="og:title" content="Example Title">
<meta property="og:description" content="A detailed description of the page.">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com/">
<meta property="og:type" content="website">
```

- ##### Twitter meta tags
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Example Title">
<meta name="twitter:description" content="A detailed description of the page.">
<meta name="twitter:image" content="https://example.com/image.jpg">
```

- ##### Content Security Policy : Help to prevent XSS attacks 
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">
```

- ##### Charset : Encoding 

```html
<meta charset="UTF-8">
```
- ##### HTTP - Equiv : Provide HTTP headers in meta tags
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Ensure compatibility with IE -->
<meta http-equiv="refresh" content="30"> <!-- Refresh the page every 30 seconds -->

```
- ##### Theme color : Provide toolbar color for mobile 
```html
<meta name="theme-color" content="#000000">
```
- ##### Apple touch icon
```html
<link rel="apple-touch-icon" href="apple-icon.png">
```
- ##### Manifest: For web application/pwa
```html
<link rel="manifest" href="/manifest.json">
```