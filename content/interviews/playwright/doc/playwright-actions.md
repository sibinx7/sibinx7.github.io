---
title: "Playwright Python Actions Index"

---

# Playwright Python Actions & Inputs

- Playwright can interact with HTML Input elements such as text inputs, checkboxes, radio buttons, select options, mouse clicks, type characters, keys and shortcuts as well as upload files and focus elements.

---

| Topic | Description | Code Example |
| :--- | :--- | :--- |
| **Fill Text** | Clears the field and enters the string immediately. | `page.get_by_label("Name").fill("John")` |
| **Type Sequentially** | Types text character-by-character simulating real keyboard delays. | `page.get_by_role("textbox").press_sequentially("Hello", delay=100)` |
| **Check / Uncheck** | Sets the state of checkboxes or radio buttons. | `page.get_by_label("Agree").check()`<br>`page.get_by_label("Subscribe").uncheck()` |
| **Select Option** | Selects items in a native `<select>` dropdown by value, label, or index. | `page.get_by_label("Color").select_option("blue")`<br>`page.get_by_label("Multi").select_option(["red", "green"])` |
| **Mouse Clicks** | Performs left click, double click, right click, or modifier clicks. | `page.get_by_role("button").click()`<br>`page.get_by_text("Item").dblclick()`<br>`page.get_by_text("Item").click(button="right")`<br/>`page.get_by_text("Item").click(modifiers=["Shift"])`<br/>`page.get_by_text("Item").click(position={ "x": 0, "y": 0})` |
| **Hover** | Hovers mouse over an element to trigger tooltips or menus. | `page.get_by_role("menuitem").hover()` |
| **Key Press** | Sends single keypresses or key combinations. | `page.get_by_label("Search").press("Enter")`<br>`page.get_by_role("textbox").press("Control+a")` |
| **Upload Files** | Sets files on `<input type="file">` elements. | `page.get_by_label("Upload").set_input_files("doc.pdf")` |
| **Focus & Blur** | Sets or removes keyboard focus on an element. | `page.get_by_label("Password").focus()`<br>`page.get_by_label("Password").blur()` |

---

### Actionability Checks (Auto-Waiting)

Before performing any action, Playwright runs actionability checks on the element to ensure the interaction succeeds without flaky waits.

| Action / Method | Attached | Visible | Stable | Receives Events | Enabled | Editable |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| `click()` / `dblclick()` | Yes | Yes | Yes | Yes | Yes | - |
| `fill()` / `clear()` | Yes | Yes | - | - | Yes | Yes |
| `check()` / `uncheck()` | Yes | Yes | Yes | Yes | Yes | - |
| `select_option()` | Yes | Yes | Yes | Yes | Yes | - |
| `hover()` | Yes | Yes | Yes | Yes | - | - |
| `focus()` / `blur()` | Yes | Yes | - | - | - | - |
| `press()` | Yes | Yes | - | - | - | - |
| `set_input_files()` | Yes | Yes | - | - | Yes | - |
| `scroll_into_view_if_needed()` | Yes | - | - | - | - | - |

---

### Actionability Check Definitions

| Check Name | Condition Description |
| :--- | :--- |
| **Attached** | Element is connected to the DOM document. |
| **Visible** | Non-zero bounding box, no `display: none`, `visibility: hidden`, or `opacity: 0`. |
| **Stable** | Element bounding box has stopped moving across consecutive animation frames. |
| **Receives Events** | Element is not obscured by overlay elements at the hit-test point. |
| **Enabled** | Element does not have the `disabled` attribute. |
| **Editable** | Element is not `readonly` and can receive input. |

---

### Web-First Assertions (`expect`)

Playwright provides auto-retrying web-first assertions using `expect()`. They repeatedly check conditions until met or timed out.

| Assertion Type | Code Example | Description |
| :--- | :--- | :--- |
| **Visibility** | `expect(locator).to_be_visible()` | Asserts element is visible in the DOM. |
| **Invisibility** | `expect(locator).to_be_hidden()` | Asserts element is hidden or detached. |
| **Enabled State** | `expect(locator).to_be_enabled()` | Asserts form element is enabled. |
| **Disabled State** | `expect(locator).to_be_disabled()` | Asserts element is disabled. |
| **Checked State** | `expect(locator).to_be_checked()` | Asserts checkbox or radio is checked. |
| **Exact Text** | `expect(locator).to_have_text("Submit")` | Asserts exact inner text matches. |
| **Substring / Regex Text** | `expect(locator).to_contain_text("Welcome")` | Asserts partial text content match. |
| **Input Value** | `expect(locator).to_have_value("admin")` | Asserts input element current value. |
| **Attribute Value** | `expect(locator).to_have_attribute("type", "submit")` | Asserts element attribute value. |
| **CSS Class** | `expect(locator).to_have_class("btn active")` | Asserts element CSS class list. |
| **Count** | `expect(locator).to_have_count(5)` | Asserts number of matching DOM elements. |
| **Page Title** | `expect(page).to_have_title("Dashboard")` | Asserts page title matching exact or regex. |
| **Page URL** | `expect(page).to_have_url("https://example.com/login")` | Asserts active page URL string. |

---

### Interview Questions & Answers

| Question | Answer |
| :--- | :--- |
| **`fill()` vs `press_sequentially()`** | `fill()` inserts text instantly as a batch operation. `press_sequentially()` simulates actual typing by triggering `keydown`, `keypress`, and `keyup` events for every character. |
| **Bypassing Actionability Checks** | By default Playwright waits for elements to be visible, enabled, and stable before clicking. Pass `force=True` to bypass checks (e.g., `click(force=True)`). |
| **Dynamic File Pickers** | Use `page.expect_file_chooser()` context manager when clicking a custom button opens a file picker dialog instead of a standard `<input type="file">`. |
| **What is Auto-Waiting in Playwright?** | Auto-waiting automatically verifies that target elements satisfy actionability conditions (visible, enabled, stable) before executing actions, eliminating manual sleep statements. |
| **How do Web-First Assertions differ from Python `assert`?** | Web-first assertions (`expect(locator)...`) continuously poll the DOM until the condition passes or timeouts. Native `assert` checks once immediately and fails if the state hasn't rendered yet. |
| **How do you invert an assertion in Playwright?** | Use `.not_` before the assertion method, e.g., `expect(locator).not_to_be_visible()`. |
| **How can you bypass auto-waiting checks?** | Pass `force=True` parameter to action methods like `locator.click(force=True)`. |
