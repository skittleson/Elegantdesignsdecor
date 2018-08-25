
build: node_modules
	node index.js
	cp -r build/. ../

node_modules: package.json
	npm install

.PHONY: build
