spec:
	@./node_modules/.bin/mocha -R spec
tap:
	@./node_modules/.bin/mocha -R tap

.PHONY: spec
