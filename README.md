# Bright.md Take-Home Challenge
- monitoring: I used a couple tools I've wanted to try out.  Those are LogRocket and chromatic (see below).  I can create logins by request.  There's also a monitoring logged to console using reportWebVitals.
- Mobile-friendly view - It's very tight in there, but mobile (iOS) is passable on my end.  This is one area I'd focus far more for production.
- Jazz it up - I used a few of the components from the UI library I created for Freebird.  These include the hours form, the animated inputs, Image component and more.  Albeit an antiquated solution, I used redux-form to handle the form data state management as that's a perfect use for redux-form.  I also created a actions/reducers to fetch the customer data via local JSON file to simulate a production app's user and app flow.   

## Prompt #1:
CD to bright-md directory and run the following terminal commands to run app locally:
1. `yarn` - this installs dependencies
2. `yarn start` - to start the project server, which opens the React app in your browser when ready.
3. `yarn build` - to build for production.
4. `yarn run analyze` - to analyze production build performance using [source-map-explorer](https://www.npmjs.com/package/source-map-explorer).

## Prompt #2:
For production I would write unit tests and create components via storybook (I strongly encourage you to check it out, see more in the next section.) for faster approval on changes and code/design pairing with peers. I would also spend far more time on the mobile friendly layout until that was rock solid.  The production application would be a mirror of the mocks or very close.  Any and all image assets would be compressed using TinyPNG or similar.  I used code-splitting and preload for speed, which I would also do in production, as well as ship with Docker setup and integrated with a CI like CircleCi or similar.  All unnecessary console logs would be removed; the project and files would be cleaned up as well.  Also, I would use react-final-form, formik or one of the newer, much lighter form solutions. I would have an open channel with creative to ensure everything is done to spec.  Lastly, I would bang on the app looking for ways to break it, then hand it off to someone else to do the same or an actual QA runner.

## Try Storybook:
You'll notice a "storybook" script in package.json.  Open a terminal to the root of the project, run `yarn storybook` to launch an interactive suite for testing components in isolation. This will open on localhost:6006.  There are "Example" components in the stories directory that appear under "Example" on the Storybook left-hand nav. I added a few of my own UI components under "UI Library" in the left-hand Storybook nav. 

### Chromatic
Chromatic allows sharing and peer review of UI/UX created in Storybook, but accessible on a public or private URL for colleagues to review and accept, deny or request edits to components.  Here is the chromatic link generated from this project's Storybook components:  https://www.chromatic.com/library?appId=5fdbeb830d86c5002111fe32&branch=master

# Getting Started with Create React App 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
