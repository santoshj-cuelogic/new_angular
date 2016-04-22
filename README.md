#AngularJs boilerplate

### INSTALLATION

Follow all the below steps, in sequential order, to set up your client environment with needed software and packages.

##### Step 1: Install Git

1. `sudo apt-get update`
2. `sudo apt-get install git`

Configure Git

* `git config --global user.name "Your Name"`
* `git config --global user.email "youremail@domain.com"`

OR

* `nano ~/.gitconfig`

Reference: https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-14-04

##### Step 2: Install Node (npm)

1. `sudo apt-get update`
2. `sudo apt-get upgrade`
3. `curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -`
4. `sudo apt-get install -y nodejs`
5. `sudo npm cache clean -f`

##### Step 3: Install Bower

`sudo npm install -g bower`

##### Step 4: Install Gulp

`sudo npm install -g gulp`

***

### CODE SETUP

##### Step 1: Git cloning

1. `cd path-to-clone-code`
1. `git clone https://github.com/shitala-cuelogic/angular-boilerplate.git`
2. `git fetch origin [branch]`
3. `git checkout [branch]`

##### Step 2: Install NPM + Bower packages

1. `cd angular-boilerplate`
2. `sudo npm install`
3. `sudo bower install --allow-root`

##### Step 3: Run Gulp

1. `cd angular-boilerplate`
2.  If you want to provide different configuration file depending on different environment i.e (production, staging, development and local) then use -

    `sudo gulp --env [environment_name]`,

    Example `sudo gulp --env local` OR `sudo gulp --env development` etc.

3. If you want to minify files,

    `sudo gulp --env [environment_name] --minify`

4. Run `http://localhost:3000`


***

### FOLDER STRUCTURE


```
angular-biolerplate
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
│    │    │     ├── base.route.js
│    │    │     └── base.index.js
│    │    │
│    │    ├── login
│    │    │     ├── controllers
│    │    │     │      └── login.js
│    │    │     ├── views
│    │    │     │      └── login.html
│    │    │     ├── login.route.js
│    │    │     └── login.index.js
│    │    │
│    │    └── dashboard
│    │            ├── controllers
│    │            │      └── dashboard.js
│    │            ├── views
│    │            │      └── dashboard.html
│    │            ├── dashboard.route.js
│    │            └── dashboard.index.js
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
│    └── images
├── config
│    ├── local.js
│    └── development.js
│
├── bower_components
├── node_modules
├── .gitignore
├── index.html
├── gulpfile.js
├── bower.json
├── package.json
└── web_server.js

```

### FOLDER STRUCTURE DESCRIPTION

| File/Directory | Description |
| --- | --- |
| `/app` | The core directory of the application and it holds all modular files, directives and services files. |
| `/app/directives` | Holds custom made directives used in the application. |
| `/app/directives/common` |  |
| `/app/modules/` | Partitioned into modular functionality, it holds views,routes and controllers |
| `/app/modules/base` |  |
| `/app/modules/base/controllers` |  |
| `/app/modules/base/views` |  |
| `/app/modules/dashboard` |  |
| `/app/modules/dashboard/controllers` |  |
| `/app/modules/dashboard/views` |  |
| `/app/modules/login` |  |
| `/app/modules/login/controllers` |  |
| `/app/modules/login/views` |  |
| `/app/modules/user` |  |
| `/app/modules/user/controllers` |  |
| `/app/modules/user/views` |  |
| `/app/services/` |  |
| `/app/app.js` | The main javascript file where we declare the app level module which depends on view and components. |
| `/assets/css` | Handles the application level styles. |
| `/assets/images` | Handles the application level images. |
| `bower_components` | Holds all angular components required to run the application. |
| `/build` |  |
| `/build/index.html` |  |
| `/build/static/app.js` |  |
| `/build/css` |  |
| `/build/js` |  |
| `/config` | Holds all environment specific configurable entities. |
| `/node_modules` | Holds all npm packages required to run the application. |
| `/bower.json` | Hold all dependencies required in the application. |
| `/gulpfile.js` |  |
| `/index.html` | The main core file to start the application. |
| `/package.json` | Hold all dependencies required in the application. |
| `/README.md` | A help file that describes installation, configuration and other processes to get application up and running. |
| `/web_server.js` |  |
