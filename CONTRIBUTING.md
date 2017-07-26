# Acceptable Coontributions

You should make a pull request if you want:
- to fix bug for existing functions
- to enhance the API or implementation of an existing function
- to add a function that is a representation of a class in `java.util`
- to implement an issue 

In the case of adding a new function, that function must follow the Definition of Done.

A previous discussion in issues section is preferred before working on a PR, to avoid wasting of time working on something useless.

## Definition of Done

* no build issue
* no lint issue
* at least one spec file per unit
* all tests green
* full code coverage
* full public API documented
* at least one demo scenario per unit

## Set up instructions

First of all, this is a TypeScript project that's distributed on [npmjs.org](https://npmjs.org) and
therefore uses JavaScript tooling based on [Node.js](https://nodejs.org/) with dependencies from npm.
You're going to need to have those things installed to contribute to this project.

1. Fork the repo
2. Clone your fork
3. Create a branch
4. Run `npm install`
5. Run `npm run test:single && npm run build`. If everything works, then you're ready to make changes.
6. If you want, you can run `npm test` and see that it's watching your file system for changes.
7. Run `npm run docs` and generate documentation for your changes, especially if your changes affected functions signature.
8. If you get things working, add your changed files with `git add` and run `npm run commit` to get an interactive prompt for creating a commit message that follows [our standards](https://github.com/apuliasoft/j2se-js/blob/master/conventional-changelog.md).
9. Push your changes to your fork with `git push`
10. Create a pull request.
11. Get merged! 🎉 🎊
