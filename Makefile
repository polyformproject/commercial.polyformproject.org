yaml=node_modules/.bin/js-yaml

choices.json: choices.yml | $(yaml)
	$(yaml) $< > $@

.PHONY: clean

clean:
	rm -f choices.json
