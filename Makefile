yaml=node_modules/.bin/js-yaml

choices.json: choices.yml | $(yaml)
	$(yaml) $< > $@

$(yaml):
	npm ci

.PHONY: clean

clean:
	rm -f choices.json
