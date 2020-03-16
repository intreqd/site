### baseNUBE, Run IRIS Your Way
baseNUBE Web Site

## Development Workflow

Here is your new script to develop the site. 

This script will create a branch off of your own on github, clone the repo, and open vs code and the terminal so that git commands can be executed.

You will be running this for each feature you implement.

In a root directory where you do all of your work,  you need to put the contents of this file in a script called `basenubedev.sh`:

 ```

if [ -z "$1" ]
  then
    echo "No branch/identifier supplied, please supply one.  "
    echo "Example bash basenubedev.sh <lowercase_name_of_effort>"
fi

mkdir $1 # This creates a directory with what you supplied on the command line
cd $1 # this changes to that directory
git clone https://qtsweeney35@github.com/basenube/site.git # this grabs the basenube repo
cd site # this changes directory to inside the github repo for the site
git checkout -b feature/$1 # this creates a branch just for you
cd ../.. # this goes back a directory
code -n $1 # this opens visual studio code with the branch and name you supplied on command line
cd $1/site # this moves inside the root so the git commands will work
git status # here is the status

echo "You should be ready to get to work now..."
One you have the file created, you then need to run the following command in the terminal.
```

`. basenubedev.sh nav_changes_ron`

You should have a terminal to start developing and vscode opened.

start making your changes in the src directory, and you can view your changes by running the gulp command.

When you are done with your feature and adding your assets to the in the src directory, run the `gulp build` command.  This moves all of your assets to the docs folder and builds the web site.

After build, push the site:

`git push`

Go out to github after you push your changes, you should see a yellow banner with your latest commit and branch.