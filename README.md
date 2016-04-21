#AngularJs boilerplate

***

### INSTALLATION

Follow all the below steps, in sequential order, to set up your client environment with needed software and packages.

##### Step 1: Install Node (npm)

1. `sudo apt-get update`
2. `sudo apt-get upgrade`
3. `curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -`
4. `sudo apt-get install -y nodejs`
5. `sudo npm cache clean -f`

##### Step 2: Install Bower

`sudo npm install -g bower`

##### Step 3: Install Gulp

`sudo npm install -g gulp`

***

### CODE SETUP

##### Step 1: Git cloning

1. `cd project folder`
1. `git clone https://github.com/shitala-cuelogic/angular-boilerplate.git (change this path after moving to cuelogic repo)`
2. `git fetch origin [branch]`
3. `git checkout [branch]`

##### Step 2: Install NPM + Bower packages

1. `cd angular-boilerplate`
2. `sudo npm install`
3. `sudo bower install --allow-root`

##### Step 3: Run Gulp

1. `cd tandem-client/Auth/app`
2. `sudo gulp --env development`

Note: If the you wish to run diffrent environment then use- `sudo gulp --env [environment name]` (production, staging, development and local).