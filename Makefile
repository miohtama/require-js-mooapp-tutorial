# Old-fashioned Makefile to create static copy of us
# with Javascript files minified
TARGET:="dist"

# Define default Makefile command
all: deploy

# Create the folder where our deployment goes
# It will include this folder, CSS, images and merged JS bundle
deployment-folder:
	@rm -rf $(TARGET) > /dev/null
	install -d $(TARGET)

# Copy all files, excluding js files and the deployment itself, as it happens
# be inside the working repo
copy-files:
	rsync -av --exclude $(TARGET) --exclude="*.js" --exclude=".git" . $(TARGET)

# Create a main.js which contains all dependencies
# concatenated and minified.
# r.js can be installed via npm or downloaded from requirejs.org
# http://requirejs.org/docs/optimization.html
# name=mooapp/main <--- entry point module name, as RequireJS dependency
# mainConfigFile <-- Where it will require.config options
# out <-- Where to write the entry
minified-main:
	install -d $(TARGET)/js
	node thirdparty/r.js -o mainConfigFile=mooapp/main.js name=mooapp/main out=$(TARGET)/mooapp/main.js
	# Don't forget to bundle require.js itself
	cp thirdparty/require.js $(TARGET)/thirdparty/require.js

deploy: deployment-folder copy-files minified-main

