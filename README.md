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

#### Custom Font Families
Two custom font families (Urbani and Nexa) were added to the mui theme. Each one is divided in three sets as follows:

Name: Urbani
Font Weight: 400
File: @presentatio/theming/fonts/urbani-regular.woff2

Name: Urbani-Light
Font Weight: 300
File: @presentatio/theming/fonts/urbani-light.woff2

Name: Urbani-Regular
Font Weight: 400
File: @presentatio/theming/fonts/urbani-regular.woff2

Name: Urbani-Bold
Font Weight: 700
File: @presentatio/theming/fonts/urbani-bold.woff2

Name: Nexa
Font Weight: 400
File: @presentatio/theming/fonts/nexa-regular.woff2

Name: Nexa-Light
Font Weight: 400
File: @presentatio/theming/fonts/nexa-light.woff2

Name: Nexa-Regular
Font Weight: 400
File: @presentatio/theming/fonts/nexa-regular.woff2

Name: Nexa-Bold
Font Weight: 700
File: @presentatio/theming/fonts/nexa-bold.woff2

**Note:** Nexa and Urbani make reference to the Regular type of each font.
##### Priority Order
There were loaded to MUI theme in the following priority order:
1. Urbani
2. Nexa
3. Helvetica (as a fallback)

##### MUI Typography Variants Customization
MUI typography comes with a predefined set of variants which are:
* h1
* h2
* h3
* h4
* h5
* h6
* subtitle1
* subtitle2
* body1
* body2
* button
* caption
* overline

These variants were modified to use the fonts as follows:
```bash
h1: {
    fontFamily: 'Urbani-Bold',
  },
  h2: {
    fontFamily: 'Urbani-Bold',
  },
  h3: {
    fontFamily: 'Urbani-Bold',
  },
  h4: {
    fontFamily: 'Urbani',
  },
  h5: {
    fontFamily: 'Urbani',
  },
  h6: {
    fontFamily: 'Urbani',
  },
  subtitle1: {
    fontFamily: 'Nexa',
  },
  subtitle2: {
    fontFamily: 'Nexa',
  },
  body1: {
    fontFamily: 'Nexa',
  },
  body2: {
    fontFamily: 'Nexa',
  },
  button: {
    fontFamily: 'Nexa',
  },
  caption: {
    fontFamily: 'Nexa',
  },
  overline: {
    fontFamily: 'Nexa',
  },
```
##### Usage:

```bash
<Box fontFamily="Urbani" fontWeight="900">Example of Urbani with Fontweight 900</Box>
<Box fontFamily="Urbani-Light">This is an example of Urbani-Light</Box>
<Box fontFamily="Urbani-Regular">This is an example of Urbani-Regular</Box>
<Box fontFamily="Urbani-Bold">This is an example of Urbani-Bold</Box>
<Box fontFamily="Nexa" fontWeight="900">Example of Nexa with Fontweight 900</Box>
<Box fontFamily="Nexa-Light">This is an example of Nexa-Light</Box>
<Box fontFamily="Nexa-Regular">This is an example of Nexa-Regular</Box>
<Box fontFamily="Nexa-Bold">This is an example of Nexa-Bold</Box>
```

[atomic design]: https://bradfrost.com/blog/post/atomic-web-design/
[hexagonal architecture]: https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)
[clean architecture]: https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
[tree structure]: https://tree.nathanfriend.io/?s=(%27opti7s!(%27fancy!true~fullPath!false~trailingSlash!true~rootDot!false)~6(%276%27src2c7fig*32domain*8itiA*repositoriA*use-casA2implem532page9login*home*32pres5comp784atom4molecule4organism4template9c7text*hook9theming2util93%27)~versi7!%271%27)*200%20%202%5Cn03...49058ati7*6source!7on8ent9s*Ae43%01A987654320*
