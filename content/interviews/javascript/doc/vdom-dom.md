---
title: DOM vs Virtual DOM 
---

# DOM (Document Object Model) and V-DOM( Virtual DOM)

### DOM (Document Object Model)

- **Definition**: The DOM is a programming interface for HTML and XML documents. It represents the
structure of the document as a tree of objects that can be manipulated. 
- **Nature**: Real time and browser specific. Changes directly update the UI
- **Performance**: Modifying the DOM can be show because it involves immediate updates to the actual structure
of the page in the browser, including layout recalculations and rendering 

### Virtual DOM (Document Object Model)

- **Definition**: The Virtual DOM is an abstraction of the DOM. It is a lightweight copy of the actual DOM, used
mainly in modern frameworks like React 
- **Nature**: Exists only in memory and never interacts directly with the browser
- **Performance**: Faster updates as changes are computed in memory first. The difference between the previous and updated Virtual DOM are calculated, and only the necessary changes are applied to the real DOM


| Feature              | DOM                                               | Virtual DOM                                          |
|----------------------|---------------------------------------------------|------------------------------------------------------|
| Definition           | Real DOM in the browser                           | In memory abstraction of DOM                         | 
| Performance          | Direct updates, slower                            | Efficient updates, faster                            |
| Repainting/Reflowing | Immediate, often ineffient                        | Batched and optimized                                |
| Ease of use          | Manual updates                                    | Automatic updates via framwork                       |
| Frameworks/Tech      | Native Javascript, jQuery                         | React, Vue, etc                                      |
| Copies               | DOM , only one Copy                               | Two for diffing (old and new) per framework instance |
| Memory Usage         | Heavy, as it includes the full document structure | Lightweight as it's just a Javascript object         |
| Algoritham | No algoritham                                     | Diffing algoritham                                   |


### How Virtual DOM work

DOM is a real and single,  it directly deals with browser rendering engine. When there are changes, whenever changes happen it update 
immediately, every update can potentially trigger expensive operations like **reflow** (layout re calculation) and **repaint** (visual updates).
The **Virtual DOM**, avoids these frequent and costly reflow and repaint by calculating changes in the memory and only applying minimal updated to 
real DOM. It also update in batch and not every single changes. 

##### Why Reflow and Repaints are heavy 

1. Reflow (Layout calculation)
   - Reflow occur when the browser recalculates the positions and dimensions of elements on the page.
     - Elements size (eg, width and height)
     - Layout affecting properties (eg: margin, padding, border)
     - DOM structure (eg, add/remove/modify nodes)
   - Impact 
     - Reflow can cascade, if a parent element's size changes,all child elements must be recalculated 
     - On large, complex pages, this recalculation become costly
2. Repaint (Visual calculation, no layout)
   - A Repaint occur in browser whenever visual elements on the screen change in a way that it doesn't affect layout (color changes, visibility changes, text font changes).Repainting is less expensive that reflow, it still consumes resource
     - Frequent Update: If you frequently change styles and trigger repaints, the browser will repeatedly refresh and affects parts of the screen, consuming CPU, Memory and GPU
     - Large Areas: When repainting affects large portions of the screen or element with complex styles, it becomes more computationally expensive.
     - Inefficient DOM manipulations: Direct DOM updates or uncontrolled rendering can lead to unnecessary repaints.



#### How Virtual DOM solve reflow and repaint 
- Efficient Diffing Algorithm: 
  - React maintain lightweight copy of DOM in memory, which is called Virtual DOM. It available in memory
  - Multiple copies of Virtual DOM at least 2 per instance, when state, props or anything changes , React recalculate the difference by comparing old and new virtual DOM.
  - Only the part of the DOM that have changed are updated in the real DOM, minimizing repaint or reflow 
- Batching Updates:
  - React batches state and props updates to perform the together,reducing number of DOM updates and subsequent repaint 
- Controlled Updates: 
  - React component life cycle methods and hooks allow developers to prevent unnecessary re-renders.
- Reconciliation: 
  - React reconciliation process ensure that the real DOM is updated as efficiently as possible. It minimizes both number and scope of repaints by targeting only the changed element.

#### Advantages of Virtual DOM 
- Improved performance: Reduced costly DOM manipulations by batching updates 
- Simplified Development: Developers focus on component logic, leaving optimization to React 
- Consistent Rendering: Abstract browser specific rendering, ensuring uniform performance 
- Better user experience: Faster updates lead to smoother interaction and enhance user satisfaction.

#### Disadvantages of Virtual DOM 
- Memory overhead: Maintaining Virtual DOM tree consumes additional memory.
- Not always Optimal: For very simple application, like Static Sites, Virtual DOM may introduce unnecessary overload

