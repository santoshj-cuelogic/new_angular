# AngularJS Boilerplate

### INSTALLATION

Follow all the below steps, in sequential order, to set up your Angular project.

##### Step 1: Install Git

*On Ubuntu*

1. `sudo apt-get update`
2. `sudo apt-get install git`

Ref: https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-14-04

##### Step 2: Install Node (npm)

*On Ubuntu*

1. `sudo apt-get update`
2. `sudo apt-get upgrade`
3. `sudo curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -`
4. `sudo apt-get install -y nodejs`
5. `sudo npm cache clean -f`

##### Step 3: Install Bower

*On Ubuntu*

`sudo npm install -g bower`

##### Step 4: Install Gulp

*On Ubuntu*

`sudo npm install -g gulp`

***

### PROJECT SETUP

##### Step 1: Clone from Git

1. `cd <project-directory>`
1. `git clone https://github.com/shitala-cuelogic/angular-boilerplate.git`
2. `git fetch origin [branch]`
3. `git checkout [branch]`

##### Step 2: Install NPM + Bower packages

1. `cd angular-boilerplate`
2. `sudo npm install`
3. `sudo bower install --allow-root`

##### Step 3: Run Gulp

Command:

`sudo gulp [--env <environment>] [--minify]`

Description:

Builds the Angular project for a specific environment by minifying all files. Final build files are placed in the `build` directory.

Options:
    
* `[--env <environment>]`
  - Build the Angular project for a specific environment. Default is *local*.
  - Ex: local, development, staging, production

* `[--minify]`
  - Minify all HTML, CSS and JS files in the Angular project.

Examples:
    
* `sudo gulp --env production`
* `sudo gulp --env staging --minify`

Note: If successfully built, you will be able to access the Angular project at `http://localhost:3000`.

***

### DIRECTORY STRUCTURE


```
├── app
│    ├── directives
│    │    ├── dashboard
│    │    │     ├── views
│    │    │     │     └──  tabmenu.html
│    │    │     └── tabmenu.js
│    │    └── common
│    │          ├── views
│    │          │     └──  notifications.html
│    │          └── notifications.js
│    ├── services
│    │    ├── base
│    │    │     └── base.js
│    │    ├── common
│    │    │     ├── security.js
│    │    │     └── user.js
│    │    └── login
│    │          └──  login.js
│    │
│    ├── modules
│    │    ├── base
│    │    │     ├── controllers
│    │    │     │      └── base.js
│    │    │     ├── views
│    │    │     │      ├── base.html
│    │    │     │      ├── header.html
│    │    │     │      ├── sidebar.html
│    │    │     │      └── footer.html
│    │    │     ├── route.js
│    │    │     └── index.js
│    │    │
│    │    ├── login
│    │    │     ├── controllers
│    │    │     │      └── login.js
│    │    │     ├── views
│    │    │     │      └── login.html
│    │    │     ├── route.js
│    │    │     └── index.js
│    │    │
│    │    └── dashboard
│    │          ├── controllers
│    │          │      └── dashboard.js
│    │          ├── views
│    │          │      └── dashboard.html
│    │          ├── route.js
│    │          └── index.js
│    └── app.js
│
├── build
│    ├── css
│    │    └── app.css
│    ├── js
│    │    └── app.js
│    └── index.html
├── assets
│    ├── css
│    │    └── app.css
│    └── img
├── config
│    ├── local.js
│    ├── development.js
│    ├── staging.js
│    └── production.js
│
├── bower_components
├── node_modules
├── .gitignore
├── index.html
├── gulpfile.js
├── bower.json
├── package.json
└── server.js

```


| File/Directory | Description |
| --- | --- |
| `/app` | The core directory of the application and it holds all modular files, directives and services files. |
| `/app/directives` | Holds custom made directives used in the specific modules or shared across the application. |
| `/app/directives/common` | Holds directives used across the application. |
| `/app/modules/` | Partitioned into modular functionality, it holds views,routes and controllers |
| `/app/modules/base` | The base module holds all views,routes and processes for base. <ul><li>controllers : Holds all the controllers for base module. </li><li>views: Holds all the templates (view files) for base module.</li><li>base.route.js : Holds routes that are used to access base module.</li><li>base.index.js : The main core file that initiates a module.</li></ul> |
| `/app/services/` | Holds services used in the specific modules or shared across the application. |
| `/app/app.js` | The main javascript file where we declare the app level module which depends on view and components. |
| `/assets/css` | Handles the application level styles. |
| `/assets/images` | Handles the application level images. |
| `bower_components` | Holds all angular components required to run the application. |
| `/build` | Holds all gulp generated files i.e js/html/css |
| `/config` | Holds all environment specific configurable entities. |
| `/node_modules` | Holds all npm packages required to run the application. |
| `/bower.json` | Hold all dependencies required in the application. |
| `/gulpfile.js` | Hold functionality for instructing gulp to perform specific tasks. |
| `/index.html` | The main core file of the application. |
| `/package.json` | Hold all dependencies required in the application. |
| `/README.md` | A help file that describes installation, configuration and other processes to get application up and running. |
| `/server.js` | Servcer file from where the whole application is kickstarted. |

