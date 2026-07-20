---
title: "Playwright Python index"

---

# Playwright Python

### Core Concepts

- Cross-Browser & Engine Support: Automates Chromium, Firefox, and WebKit (Safari engine) with a single API
- Auto-Waiting: Automatically waits for elements to be actionable (visible, enabled, attached) before interacting
- Isolated Browser Contexts: Fast test isolation by spinning up fresh, incognito-like contexts without needing separate browser instances
- Sync & Async APIs: Supports both synchronous (`sync_playwright`) and asynchronous (`async_playwright` via `asyncio`) execution models
- Network Interception: Easily mock, modify, or block network requests and responses during test runs

#### Popular Tools

- Codegen (Test Generator)
- Trace Viewer
- Pytest Plugin (`pytest-playwright`)

#### Communication & Capabilities

- Browser events and network monitoring
- Browser storage and state reuse
- Multi-tab and multi-context management
- Web-first assertions with auto-retry

### Context vs Page

It is an architectural pattern in Playwright that separates the browser instance from execution contexts and pages. This guarantees isolated state management without the heavy performance overhead of opening multiple browser instances.

##### Browser Context

A BrowserContext is an isolated incognito-like session within a Browser instance. Contexts are lightweight and fast to create, making them ideal for test isolation.

##### Page

A Page represents a single browser tab or window inside a BrowserContext.

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    context = browser.new_context() # Creates isolated session
    page = context.new_page()       # Opens a tab in that session
```

### Installation Steps

##### 1. Basic Library Setup

Install the Playwright Python package and download the required browser binaries:

```bash
pip install playwright
playwright install
```

##### 2. Pytest Integration Setup

If using Playwright with Pytest for automated testing:

```bash
pip install pytest-playwright
playwright install
```

### Script Examples

##### Synchronous API

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    page = browser.new_page()
    page.goto("https://playwright.dev/python/")
    print(page.title())
    page.screenshot(path="example.png")
    browser.close()
```

##### Asynchronous API

```python
import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.firefox.launch()
        page = await browser.new_page()
        await page.goto("https://playwright.dev/python/")
        print(await page.title())
        await browser.close()

asyncio.run(main())
```

##### Pytest Test Case

```python
import re
from playwright.sync_api import Page, expect

def test_homepage_has_title(page: Page):
    page.goto("https://playwright.dev/python/")
    expect(page).to_have_title(re.compile("Playwright"))

def test_get_started_link(page: Page):
    page.goto("https://playwright.dev/python/")
    page.get_by_role("link", name="Get started").click()
    expect(page.get_by_role("heading", name="Installation")).to_be_visible()
```

### Locators vs Element Handles

Locators are the central piece of Playwright's auto-waiting and retry mechanism. Unlike element handles, locators are strictly lazy—they do not find the element on declaration, but rather right when an action is executed.

###### Role Locators

```python
page.get_by_role("button", name="Submit").click()
```

###### Text Locators

```python
page.get_by_text("Welcome back").is_visible()
```

###### Form Controls

```python
page.get_by_label("Username").fill("admin")
page.get_by_placeholder("Enter password").fill("secret")
```

### Handling Authentication State

Save storage state (cookies and local storage) to re-use across multiple tests without logging in repeatedly.

###### Save State

```python
# Perform login steps...
context.storage_state(path="auth.json")
```

###### Reuse State

```python
context = browser.new_context(storage_state="auth.json")
page = context.new_page()
```

### Interview Questions & Answers

##### Q: What is the difference between Browser, BrowserContext, and Page?

A Browser is the overhead process (Chromium/Firefox/WebKit). A BrowserContext is an isolated session inside the browser (like an incognito window). A Page is an individual tab within a context.

##### Q: How does Playwright handle waiting for elements?

Playwright auto-waits for elements to satisfy actionability checks (visible, attached, stable, enabled) before performing actions like `click()` or `fill()`. This removes the need for manual sleeps.

##### Q: Why are Locators preferred over ElementHandles (`query_selector`)?

Locators are lazy and automatically re-query the DOM at the time of action, making them resilient to dynamic rendering and DOM shifts. `query_selector` returns a static reference that can quickly become stale.

##### Q: How do you record tests in Playwright?

Using the built-in CLI command: `playwright codegen <url>`, which opens a browser and auto-generates Python code as you interact with the UI.
