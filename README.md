## overview:

- This app is the frontend of [this repository](https://github.com/DonAdam2/backend-socket-io)
- Simple react app which shows how to integrate **socket.io-client** with **@reduxjs/toolkit**

## This app has the following:

- Socket client which has all socket functions (connect, disconnect, emit and on)
- Create a single instance of socket client in **index.jsx** file and use it throughout the app
- Use **createAsyncThunk** from **@reduxjs/toolkit** because it creates the following 3 types automatically (pending, fulfilled, rejected)

## Created using:

- webpack
- react
- @reduxjs/toolkit
- socket.io-client

## Prerequisites:

- nodeJS > 14.X.X or Docker

## Installing / Getting Started:

### Development:

- Clone repo => `git clone git@github.com:DonAdam2/frontend-socket-io.git`
- Navigate to project directory `cd frontend-socket-io`
- Install dependencies => `yarn install`
- Start the development server => `yarn start`

## Configuring Prettier

This build relies on [Prettier formatter](https://prettier.io/) to enforce code style. And [ESLint](https://eslint.org/) for identifying problematic patterns found in the code.

- Setting up prettier:

  1- You can find steps on how to set up prettier formatter with WebStorm/PhpStorm [here](https://prettier.io/docs/en/webstorm.html#running-prettier-on-save-using-file-watcher).

  **Notes**:

    - It's better to use the local `node_modules` version of prettier instead of a global one, to avoid version conflicts (in case the globally installed version does not match the version specified in `package.json`).

  2- Follow the next steps to set up **prettier** and **eslint** in **_VS Code_**:

    - Install `prettier` plugin

    - Install `eslint` plugin

    - Open **_VS Code settings_** `CTRL + ,`:

      a- Search for `formatter` => check **Format on save**

      b- Search for `prettier` => add `.prettierrc` in **_Prettier: Config Path_** section && check **_Prettier: Require Config_**

  3- Please refer to other tutorials if you are using a different IDE.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
It will open [http://localhost:3000](http://localhost:3000) automatically in the browser to see your app.

All changes will be injected automatically without reloading the page.<br>

You will see in the console the following:

- All redux store related changes
- Any of the following errors:
    1. Linting errors.
    2. Code format errors (because of [prettier](https://prettier.io/))

### `yarn build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `yarn build:serve`

Serves the app on `http://localhost:8080/` from the `dist` folder to check the production version.

**_Note:_** Use this script only if you ran the build script `yarn build`.

### `yarn analyze-bundle`

It allows you to analyze the bundle size.