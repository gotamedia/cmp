# CMP (Consent Management Platform)
A CMP package dedicated to be used in React + Fluffy applications

## Install

```sh
npm i @gotamedia/cmp
```

## Peer dependencies
CMP requires that you install following depdencies in your own project
```sh
npm i react
    react-dom \
    styled-components
    @gotamedia/fluffy
```

## Usage
```tsx
import CMP, { Provider } from '@gotamedia/cmp'

const App = () => (
    <Provider>
        <CMP {...CMP_PROPS}/>

        {...}
    </Provider>
)
```

## Develop in CMP

CMP uses Storybook to present itself, you can find the the main story in root/src/index.stories.tsx

To start run:
```sh
npm start
```

***In order to see Didomi consent notice you need to be in an alias different than `localhost`***

## Develop with CMP

In order to develop with CMP with your project locally, make sure to have `yalc` installed globally on your machine by running:
```sh
npm install -g yalc
```

### Publish locally

To use CMP in your project locally make sure to build CMP by running:
```sh
npm run build:local
```

This will make sure to build and publish CMP into a local registery on your machine so you can install it as a package in your projects

### Install locally

In your project run the following command:
```sh
yalc add @gotamedia/cmp
npm install
```

After you are done with running CMP locally in your project, make sure to clean up and remove the link from your project's dependencies
```sh
yalc remove @gotamedia/cmp
```

This will make sure to remove the link from your project's dependencies and revert to the old value if there was any

[Read more about yalc](https://www.npmjs.com/package/yalc)

## Build

CMP uses Rollup to build and bundle
```sh
npm run build
```

## Publish

To inspect the package before publishing to npm
```sh
npm run package:details
```

To publish to npm
```sh
npm run package:publish
```

## CMP Development & Contributing

### Trunk based development
This project uses a [trunk based development](https://cloud.google.com/architecture/devops/devops-tech-trunk-based-development) workflow.

### Conventional commits
This project works with [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).