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
