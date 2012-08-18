spec:
	@./node_modules/.bin/mocha -R spec
tap:
	@./node_modules/.bin/mocha -R tap
coverage:
	@jscoverage --no-highlight lib lib-cov
	@EXAMPLE_COV=1 ./node_modules/.bin/mocha -R json-cov
	@rm -rf lib-cov
coverage_html:
	@jscoverage --no-highlight lib lib-cov
	@EXAMPLE_COV=1 ./node_modules/.bin/mocha -R html-cov > coverage.html
	@rm -rf lib-cov
setup:
	@npm install

.PHONY: spec
