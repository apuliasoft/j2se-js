# Acceptable Coontributions

You should make a pull request if you want:
- to fix bug for existing functions
- to enanche the API or implementation of an existing function
- to add a function that is a rappresentation of a class in `java.util`
- to implement an issue 

In the case of addding a new function, that function must:
- be documented
- be tested (see the `test` directory; we use `mocha` and `chai`)

A previous discussion in issues section is preferred before working on a PR, to avoid wasting of time working on something useless.

## Set up instructions

First of all, this is a TypeScript project that's distributed on [npmjs.org](https://npmjs.org) and
therefore uses JavaScript tooling based on [Node.js](https://nodejs.org/) with dependencies from npm.
You're going to need to have those things installed to contribute to this project.

1. Fork the repo
2. Clone your fork
3. Create a branch
4. Run `npm install`

5. Run `npm run test:single && npm run build`. If everything works, then you're ready to make changes.

6. Run `npm test`. See that it's watching your file system for changes.

linting

7. Run `npm run docs` and generate documentation for your changes, especially if your changes affected functions signature.

8. If you get things working, add your changed files with `git add` and run `npm run commit` to get an interactive prompt for creating a commit message that follows [our standards](https://github.com/stevemao/conventional-changelog-angular/blob/master/convention.md).

9. Push your changes to your fork with `git push`
10. Create a pull request.
11. Get merged! 🎉 🎊


## Commit Message Format

Each commit message consists of a header, a body and a footer. The header has a special format that includes a type, a scope and a subject:

`<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>`

The header is mandatory and the scope of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on GitHub as well as in various git tools.
Revert

If the commit reverts a previous commit, it should begin with revert:, followed by the header of the reverted commit. In the body it should say: This reverts commit <hash>., where the hash is the SHA of the commit being reverted.

## Type

Must be one of the following:

    `feat: A new feature
    fix: A bug fix
    docs: Documentation only changes
    style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    refactor: A code change that neither fixes a bug nor adds a feature
    perf: A code change that improves performance
    test: Adding missing or correcting existing tests
    chore: Changes to the build process or auxiliary tools and libraries such as documentation generation`

### Scope

The scope could be anything specifying place of the commit change. For example $location, $browser, $compile, $rootScope, ngHref, ngClick, ngView, etc...

You can use * when the change affects more than a single scope.
Subject

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

### Body

Just as in the subject, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.
Footer

The footer should contain any information about Breaking Changes and is also the place to reference GitHub issues that this commit closes.

Breaking Changes should start with the word `BREAKING CHANGE`: with a space or two newlines. The rest of the commit message is then used for this.

A detailed explanation can be found in this document.