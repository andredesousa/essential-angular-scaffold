# Essential Angular Scaffold

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11 and [Node.js](https://nodejs.org/en/about/releases) version 12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Commit messages convention

In order to have a consistent git history every commit must follow a specific template. Here's the template:

```
<type>(<ITEM ID>?): <subject>
```

### Type

Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, Jenkins, SauceLabs)
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **revert**: A commit that reverts a previous one
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **test**: Adding missing tests or correcting existing tests

### ITEM ID

The related **issue** or **user story** or even **defect**.

* For **user stories**, you shoud use `US-` as prefix. Example: `feat(US-4321): ...`
* For **no related issues** or **defects** you should leave it blank. Example: `feat: ...`

### Subject

The subject contains a succinct description of the change.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
