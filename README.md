using https://ui.reach.tech/tabs

## TO DO

### - complete setting up request file ( move fetchSectionContents() inside; update headers for 403 on [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) )
### - try test with Cypress
### - prep for production ( build, minify..?) > When you’re [ready to deploy to production](https://facebook.github.io/create-react-app/docs/production-build) , create a minified bundle with 'npm run build'. 
### - style tabs
### - style article links 
### - try tabs created from scratch (add activetab prop/ onchange?)
### - enforce newest & last 5-10 articles (slice?)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`
* to start with secure key ( avoid 'too many requests' CORS error ) use "REACT_APP_Content_API_KEY=<env.key> npm start"
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

>> See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
