# Spa Webpack

A full featured starter for modern front-end single page applications. Uses Webpack 4 to create optimized builds, linters to check for code style and errors, w3c and a11y validation, and finally easily deployed using Firebase.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development, testing and deployment.

### Prerequisites

Node and NPM versions used for this project

```
node >= v10.0.0
npm >= 5.6.0
```

### Installing

After cloning the repository, run following from root directory of cloned project

```
npm install
```

### Additional setup

In order to deploy the app, a ```.env``` file should be created in the root directory of the project. The deploy script ```npm run deploy``` will read this file to determine what Firebase project to update.

```
FIREBASE_PROJECT=<YOUR-FIREBASE-PROJECT-HERE>
```

To get the project name, visit https://console.firebase.google.com and create a new project. The project name created here will be used in the ```.env``` file mentioned above.

### NPM Commands


```npm run dev```
- spawns a  hot reloadable dev server and browser instance of the app. Runs dev tests and watches for changed in tests/

```npm run dev-server```
- same as ```npm run dev``` except without tests

```npm run test-dev```
- runs dev tests once then exits

```npm run test-dev-watch```
- runs dev tests then watches for changes in tests/

```npm run test-prod```
- runs A11Y and HTML Validations on production build

```nmp run build```
- runs dev tests, creates production build to dist/, and runs production tests

```npm run deploy```
- runs dev tests, creates production build to dist/, runs production tests, and prompts to deploy to Firebase

## License

Copyright 2018 Kalim Fleet

Licensed under the Apache License, Version 2.0 (the "License"); you may use this file  in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
