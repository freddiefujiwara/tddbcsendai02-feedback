SHELL := /bin/bash
spec:
	@. ~/.nvm/nvm.sh && nvm use v0.8.7 && ./node_modules/.bin/mocha -R spec
tap:
	@. ~/.nvm/nvm.sh && nvm use v0.8.7 && ./node_modules/.bin/mocha -R tap
coverage:
	@jscoverage --no-highlight lib lib-cov
	@. ~/.nvm/nvm.sh && nvm use v0.8.7 && EXAMPLE_COV=1 ./node_modules/.bin/mocha -R json-cov
	@rm -rf lib-cov
coverage_html:
	@jscoverage --no-highlight lib lib-cov
	@. ~/.nvm/nvm.sh && nvm use v0.8.7 && EXAMPLE_COV=1 ./node_modules/.bin/mocha -R html-cov > coverage.html
	@rm -rf lib-cov
setup:
	@if [ ! -d ~/.nvm ] ; then git clone git://github.com/creationix/nvm.git ~/.nvm;source ~/.nvm/nvm.sh;nvm install v0.8.7;nvm use v0.8.7; fi;npm install

.PHONY: spec
