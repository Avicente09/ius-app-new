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
```bash
├───business
│   ├───models
│   └───services
├───components
│   ├───form-input-text
│   ├───info-modal
│   └───layout
│       ├───content
│       ├───footer
│       ├───header
│       └───navbar
├───context
├───hooks
└───pages
```
#### Git hooks
A pre-commit hook was configured to perform code lint, to run tests and build the app. Some of the rules are specified on the following files:
- lint-staged.config.js (lint rules for staged files)
- .eslintrc.json (EsLint rules for staged and non-staged files)
- .prettierrc.json (rules for formatting files with prettier)
- jest.config.js (rules for jest testing)

Also a commit hook was added to set commit message rules, we are using Config Conventional standard rules and we can find it on file:
- commitlint-config.cjs