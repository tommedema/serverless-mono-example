#! /bin/sh

# this is assumed to run from a sls-package, e.g. at packages/sls-random
# see https://github.com/yarnpkg/yarn/issues/6293#issuecomment-414779476
cwd=$PWD

# install production deps for the entire workspace
cd ../..
yarn install --production
cd $cwd

# dupe node_modules
mkdir -p dist
rm -fr dist/node_modules
cp -RL node_modules dist/node_modules

# cleanup .bin
rm -rf dist/node_modules/.bin

 # back to development
cd ../../
yarn install
cd $cwd

# prepare artifact
cd dist
zip -r artifact.zip *
cd ..