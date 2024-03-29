# CMP (Consent Management Platform)
A CMP package dedicated to be used in React + Fluffy applications

## Install

```sh
npm i @gotamedia/cmp
```

### Peer dependencies
CMP requires that you install following depdencies in your own project
```sh
npm i react
    react-dom \
    styled-components
    @gotamedia/fluffy
```

## Usage
```tsx
import { createRoot } from 'react-dom/client'
import { CMP } from '@gotamedia/cmp'

const Component = () => (
    <CMP {...CMP_PROPS}>
        <App />
    </CMP>
)

const root = createRoot(document.getElementById('app'))

root.render(<Component />)
```

## Develop in CMP

CMP uses Storybook to present itself, you can find the the main story in root/src/index.stories.tsx

To start run:
```sh
npm start
```

***In case you can't see the Didomi consent notice then try to be in an alias different than `localhost`***

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

## Release

### Package
* Commit all your changes with messages follows Conventional commits
* Merge all your changes to trunk branch
* Push to remote

That's it 🎉 
You just trigered a release action and Github will take care of the rest 🙃 

This will run build workflow in Github Actions and once it's successfully done it will trigger a publish workflow to publish the package to NPM registery.

### Docs
* Navigate to Github Actions on the repo page
* Click on `Storybook - Build & Deploy` on the left sidebar
* Click on the menue `Run workflow` on the top right
* Choose the env to build and deploy the Docs to ***"available dev & prod"***
* Click on `Run workflow` button

This will run Storybook Docs build and once it's successfully done it will trigger a deploy to S3 and revalidate all the files in the associated CloudFront.

## CMP Development & Contributing

### Trunk based development
This project uses a [trunk based development](https://cloud.google.com/architecture/devops/devops-tech-trunk-based-development) workflow.

### Conventional commits
This project works with [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).
