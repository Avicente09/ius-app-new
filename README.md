# 🛵 iUS APP 📨

Delivery Service Web App that allows user to send and/or retrieve goods. Types of deliveries supported by the app:

- Store
- Mandadito (objects or packages pick up and delivery)
- Food
- Packages (From online store owners)

## 🛠 Technologies

- [React](https://react.dev/) (with Typescript)
- [Mui](https://mui.com/) (Material UI)
- [React Hook Forms](https://react-hook-form.com/)
- [Fb Login](https://www.npmjs.com/package/@greatsumini/react-facebook-login)
- [Google Login](https://www.npmjs.com/package/@react-oauth/google)
- [Husky](https://typicode.github.io/husky/#/) (Git hooks)
- [Prettier](https://prettier.io/)
- [Lint Staged](https://www.npmjs.com/package/lint-staged)
- [Jest](https://jestjs.io/docs/tutorial-react)

## &#x261D; Requirements

This project is restricted to use a specific node version. (We suggest using a tool like [nvm](https://github.com/nvm-sh/nvm))

```bash
 Node version: 18.12.1
```

## 🏠 Run Locally

Clone the project

```bash
  git clone https://github.com/r10c-technologies/ius-app.git
```

Go to the project directory

```bash
  cd ius-app
```

Install dependencies

```bash
  npm install
```

Create .env file with following configuration

```bash
  REACT_APP_FB_ID="MY_FB_APP_ID"
  REACT_APP_GOOGLE_CLIENT_ID="MY_GOOGLE_CLIENT_ID"
```

Start the app

```bash
  npm run start
```

## 🔍 Overview

#### Folder Structure

In order to understand the basic concepts for this project, it is necessary to read some architecture patterns that generate the layers:

[Atomic Design] - For the UI components
[Hexagonal Architecture] - For the business logic
[Clean Architecture] - For the project structure

Once the basic concepts are understood, it is possible to understand the folder structure of the project:

[tree structure]

```bash
src/
├── config/
│   └── ...
├── domain/
│   ├── entities/
│   │   └── ...
│   ├── repositories/
│   │   └── ...
│   └── use-cases/
│       └── ...
├── implementation/
│   └── ...
├── pages/
│   ├── login
│   ├── home
│   └── ...
├── presentation/
│   ├── components/
│   │   ├── atoms
│   │   ├── molecules
│   │   ├── organisms
│   │   └── templates
│   ├── context
│   ├── hooks
│   └── theming
└── utils/
    └── ...
```

- **config**: This folder contains constants, enumerations and other code static files.
- **domain**: This folder contains the business logic of the app, it is divided in three subfolders:
  - **entities**: This folder contains the entities of the app, it is the core of the business logic.
  - **repositories**: This folder contains the interfaces that define the methods to interact with the entities.
  - **use-cases**: This folder contains the use cases of the app, it is the layer that connects the entities with the repositories and enables behavior without details of the implementation.
- **implementation**: This folder contains the implementation of the repositories defined in the domain layer.
- **pages**: This folder contains the pages of the app. This folder must import artifacts from the presentation layer and use them to build the page.
- **presentation**: This folder contains all the elements that interact with the user. The main aspect here is the [atomic design] pattern inside the components folder, which is used to organize the components in atoms, molecules, organisms and templates.

#### Git hooks

A pre-commit hook was configured to perform code lint, to run tests and build the app. Some of the rules are specified on the following files:

- lint-staged.config.js (lint rules for staged files)
- .eslintrc.json (EsLint rules for staged and non-staged files)
- .prettierrc.json (rules for formatting files with prettier)
- jest.config.js (rules for jest testing)

Also a commit hook was added to set commit message rules, we are using Config Conventional standard rules and we can find it on file:

- commitlint-config.cjs

[atomic design]: https://bradfrost.com/blog/post/atomic-web-design/
[hexagonal architecture]: https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)
[clean architecture]: https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
[tree structure]: https://tree.nathanfriend.io/?s=(%27opti7s!(%27fancy!true~fullPath!false~trailingSlash!true~rootDot!false)~6(%276%27src2c7fig*32domain*8itiA*repositoriA*use-casA2implem532page9login*home*32pres5comp784atom4molecule4organism4template9c7text*hook9theming2util93%27)~versi7!%271%27)*200%20%202%5Cn03...49058ati7*6source!7on8ent9s*Ae43%01A987654320*
