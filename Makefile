# Old-fashioned Makefile to create static copy of us
# with Javascript files minified
TARGET:="dist"

# Create the folder where our deployment goes
# It will include this folder, CSS, images and merged JS bundle
deployment-folder:
	@rm -rf $(TARGET) > /dev/null
	@install -d $(TARGET)

# Copy all files, excluding js files and the deployment itself, as it happens
# be inside the working repo
copy-files:
	@rsync -av --exclude $(TARGET) --exclude="*.js" --exclude=".git" . $(TARGET)

# Create a main.js which contains all dependencies
# concatenated and minified
minified-main:
	@install -d $(TARGET)/js
	npm install r

production: deployment-folder copy-files

all: production