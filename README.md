# PolyForm Commercial

build standard commercial software license agreements online

This repository contains the source code for [commercial.polyformproject.org](https://commercial.polyformproject.org).

The main content files are [`terms.md`](./terms.md) and [`order.md`](./order.md).  Markdown files contain [Mustache templating tags](https://mustache.github.io/).

Data for generating the signature pages to the ordering document reside in [`signatures.json`](./signatures.json).  Data for filling blanks in the ordering document reside in [`blanks.json`](./blanks.json).

The application runs entirely on the client side.  The main client side source file is [`index.js`](./index.js).  Data on prompts to users reside in [`prompts.yml`](./prompts.yml).  Prompts data conform to the JSON schema in [`prompts.schema.json`](./prompts.schema.json).

To test and run locally, you will need Node.js, which comes with the npm package manager, as well as Git, `gzip`, and common POSIX programs like `echo` and `du`.  To begin, install dependencies with `npm install`.  To run locally, run `npm start`.  To test, run `npm test`.  Other scripts are available via `npm run`.

All JavaScript is [Standard Style](https://standardjs.com/), which you can check with `npm run lint` and automatically fix with `npm run fix`.

We only use permissively licensed dependencies and build tools.  Run `npm run linceses` to audit.
