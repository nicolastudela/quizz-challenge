# Solution to the Trivia Game Coding Challenge

The challenge was to create a 10 question, true or false, trivia app in the technology you are applying to work in. You should not just implement the most basic solution. This is a chance to show off your abilities and impress.

The application code tries to focus on the following areas 

- Functionality
- Code Format
- Project Structure
- Scalability
- Maintainability
- Use of industry best practices

---

## About the implementation


### *Component library - Styling Solution - UX & Responsiveness*  

I used *`Material-UI`* as a main componenent library, styling solution *`(CSS-IN-JS)`* and *`Styled system`* (Style-Props). Its Responsive, and theme-based style.

#### Visual Features
- It will show a visual transition when a new question is displayed
- Last results section will display different icons (good, average, bad) based on the score  
- The UI is mobile friendly. Some components are shown differently based on the user screen size. 

### *User support (Bonus feature)*

I implemented a basic user support. The trivia will request a user name to play. Each game the user plays will be stored and results can be checked later.

The user data (name) and its'results will be stored in `localStorage` as well. So Next time the user re-loads the site the data won't be lost. There is a reset button to delete this data as well.

### *Scalability*

The app only supports a trivia of yes-no questions. But it can be easily extended by modifying the `Question` component, where it can be located at `src/components/Trivia.js`

With a few changes here and there (redux store, few components) we could extend the app to support different questionnaire types.

### *State manager*

I used *`Redux`* as global state manager. Although I think its overkill for this particular solution. I ended up implementing with it because it was listed on the challenge requirements.

I think this could be solved just with handling the state in the higher level component, or a better solution would be to implement a custom Context (Provider->consumer) to avoid prop-drilling 

I used ducks to organize the redux code (reducers, action, action-types, action creators). The idea is to have related code of a resource ( in this case user, questionnaire ) in a single file, where it can be easily maintained. 

see `src/redux`

### *Api*

I implemeneted a very simple api fetcher, that will be in charge of fetching the questionnaire. see `src/api.js`

### *Unit Testing*  

Unit test are implemented using  *`Jest`* as a test runnuner and *`React Testing library`* (React DOM testing utilities). 

I used jest mainly as a test runner, but also other out-of-the box functionalities that jest brings like mocking ( e.g. `api` (with manual mocking, mocked `Redirect` from *`react-router-dom`* ), and  

### Navigation solution

I picked *`React-Router`* to implement a proper navigation solution. 

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Create React App Documentation
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
