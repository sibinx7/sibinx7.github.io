---
title: "Livereload for Ruby on Rails Application"
path: "/2017-08-08/live-reload-for-ruby-on-rails"
date: "2017-04-08T09:40:42.000Z"
tags: Ruby On Rails, Frontend, Livereload
author: Sibin Xavier
draft: false 
---


Every web designers like live reloading plugins. Most of the 
frontend framework now support live reloading. Live reloading 
is when we edit or modify page, website will automatically reload. So
Web developers can edit code on one Monitor and can see changes on another screen without any browser interaction.

I use live reload on `Middleman` application, it has built in support for live reload. Recently i have a chance to work with a **E-Commerse**
application at [Radon5](#), where i need to do more frontend works 
than backend, especially on UI design. I had tried **gurad** and **livereload** plugin with --Rails--, but it didn't work. So i started everything again and it working fine. It is very simple, just follow these steps.


### Gems 

- Install `guard`, `guard-livereload`, `rack-livereload` gems 

---
### Browser Extension 

Install **Chrome**, **Firefox** browser extenstion.  

- Chrome [livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)
- Firefox [livereload](https://addons.mozilla.org/en-US/firefox/addon/livereload/)

> 
	If these plugin not available on these url, Please search on Google

---
### Configure Ruby application 

- Create a `Guardfile`, run this command `guard init livereload`
- Add these lines to your **development.rb** file (`config/environments/development.rb`)

```
	config.middleware.insert_after ActionDispatch::Static, Rack::LiveReload
	# config.middleware.insert_before Rack::Lock, Rack::LiveReload
```

- Open newly created `Guardfile` and edit to set host, you can also include custom folders to livereload watch like this.

```
	watch(%r{app/views/.+\.(#{rails_view_exts * '|'})$})
	watch(%r{app/controller/.+\.rb})
	watch(%r{app/assets/.+\.[scss|js]})
	watch(%r{app/helpers/.+\.rb})
	watch(%r{config/locales/.+\.yml})
```

- Run server using `rails s`, run `bundle exec guard`  to watch changes

> 
	If you use `ngRock` anyother tools, add those port on `Guardfile`

---
Change files, it will automatically reload your page.
