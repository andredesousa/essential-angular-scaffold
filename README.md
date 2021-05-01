# Essential Angular Scaffold

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11 and [Node.js](https://nodejs.org/en/about/releases) version 12.
It has a complete development environment configured, including build, test, and deploy scripts as examples.

## Table of Contents

- [Project structure](#project-structure)
- [Available npm scripts](#available-npm-scripts)
- [Code scaffolding](#code-scaffolding)
- [Development server](#development-server)
- [Linting and formatting code](#linting-and-formatting-code)
- [Running unit tests](#running-unit-tests)
- [Running end-to-end tests](#running-end-to-end-tests)
- [Debugging](#debugging)
- [Security, performance and best practices](#security-performance-and-best-practices)
- [Commit messages convention](#commit-messages-convention)
- [Build and deployment](#build-and-deployment)
- [Further help](#further-help)

## Project structure

When working in a large team with many developers that are responsible for the same codebase, having a common understanding of how the application should be structured is vital.
Based on best practices from the community, [Angular coding style guide](https://angular.io/guide/styleguide), other github Angular projects and developer experience, your project should look like this:

```bash
├── e2e
|  ├── src
|  |  ├── app.e2e-spec.ts
|  |  └── app.po.ts
|  ├── protractor.conf.js
|  ├── protractor.conf.override.js
|  └── tsconfig.json
├── src
|  ├── app
|  |  ├── app-routing.module.ts
|  |  ├── app.component.html
|  |  ├── app.component.scss
|  |  ├── app.component.spec.ts
|  |  ├── app.component.ts
|  |  └── app.module.ts
|  ├── assets
|  ├── environments
|  |  ├── environment.prod.ts
|  |  └── environment.ts
|  ├── favicon.ico
|  ├── index.html
|  ├── main.ts
|  ├── polyfills.ts
|  ├── styles.scss
|  └── test.ts
├── .browserslistrc
├── .lintstagedrc
├── .prettierrc
├── .stylelintrc
├── angular.json
├── CHANGELOG.md
├── commitlint.config.js
├── karma.conf.js
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── tslint.json
```

All of the app's code goes in a folder named `src`. The end-to-end tests are in the `e2e` folder.
In Angular, everything is organized in modules, and every application have at least one of them, the `app` root module. The `app` module is the entry point of the application, and is the module that Angular uses to bootstrap the application.
The global styles for the project are placed in a `scss` folder under `assets`.
The `styles.scss` file imports all the partials to apply their styling.

## Available npm scripts

The scripts in [package.json](package.json) file were built with simplicity in mind to automate as much repetitive tasks as possible and help developers focus on what really matters.
There are commands to start the application, code linting and formatting, to run unit tests, to run e2e tests via [Protractor](http://www.protractortest.org/), to generate project documentation and changelog, npm audit and [Lighthouse](https://github.com/GoogleChrome/lighthouse), to build, release and deploy the application to [Docker Swarm](https://docs.docker.com/engine/swarm/), and others.
All the commands should be executed in a console inside the root directory.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component.
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Linting and formatting code

Run `npm run lint` to analyze your code. It includes, `TSLint`, `Prettier`, `stylelint` and other tools.
Many problems can be automatically fixed with `npm run lint:fix`.

Depending on our editor, you may want to add an editor extension to lint and format our code while you type or on-save.
To ensure all files committed to git don't have any TypeScript, linting, or formatting errors, there is a tool called [lint-staged](https://www.npmjs.com/package/lint-staged) that can be used.
When lint-staged is used in combination with [husky](https://www.npmjs.com/package/husky), the linting commands specified with lint-staged can be executed to staged files on pre-commit.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `npm run test:watch` to keep executing unit tests in real time while watching for file changes in the background.

If you want to exclude a specific test, simply use `xit()` or `xdescribe()`.
If you want to run a specific test, use `fit()` or `fdescribe()`.
The `x` means exclude and the `f` stands for focused.

You can see the HTML coverage report opening the [index.html](dist/coverage/index.html) file in your web browser.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
In order to only run the protractor end-to-end tests, assuming the frontend is already running, run `npm run protractor`.
Run `npm run protractor:watch` to keep executing your tests while watching for file changes in the background.
You can see the HTML report opening the [index.html](dist/e2e/index.html) file in your web browser.

## Debugging

You can debug the client-side Angular code, adding breakpoints, inspect variables and see the call stack of the client-side Angular application.
Another tool is [Angular Augury](https://augury.rangle.io/), made by Rangle.io.
`Augury` is an extension for debugging and profiling Angular applications inside the Google Chrome and Mozilla Firefox browsers.
You can use our IDE for debugging unit and end-to-end tests.
These functionalities are provided natively or based on plugins.
You can [debug](https://www.protractortest.org/#/debugging) async/await tests in chrome inspector with `debugger` keyword if you run `npm run protractor:debug`.
When you are using the debug scripts, you need to open the `chrome://inspect` page.
The same is valid when you run `npm run test:debug` script.

## Security, performance and best practices

The `npm audit` command submits a description of the dependencies configured in your package to your default registry and asks for a report of known vulnerabilities
You can also have npm automatically fix the vulnerabilities by running `npm audit fix`.

This project has the [Lighthouse](https://github.com/GoogleChrome/lighthouse) configured.
Lighthouse is an open-source, automated tool for improving the quality of web pages.
It has audits for performance, accessibility, progressive web apps, SEO and more.

## Commit messages convention

In order to have a consistent git history every commit must follow a specific template. Here's the template:

```bash
<type>(<ITEM ID>?): <subject>
```

### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, Jenkins, SauceLabs)
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **revert**: A commit that reverts a previous one
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

### ITEM ID

The related **issue** or **user story** or even **defect**.

- For **user stories**, you shoud use `US-` as prefix. Example: `feat(US-4321): ...`
- For **no related issues** or **defects** you should leave it blank. Example: `feat: ...`

### Subject

The subject contains a succinct description of the change.

## Build and deployment

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/angular11` directory. Use the `--prod` flag for a production build.
In `ci` folder you can find scripts for your [Jenkins](https://www.jenkins.io/) CI pipeline, a Dockerfile, [Nginx](https://www.nginx.com/) configuration and an example for deploying your application with [Ansible](https://www.ansible.com/) to [Docker Swarm](https://docs.docker.com/engine/swarm/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
