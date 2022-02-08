### Notes
- best practice is to always use named imports instead of defaults. 
- create a layout that persists each page rendering <Layout>
- <BrowserRoute>around the app -> <Route> around the routes -> <Routes> take a path and element 
- render diff pages in <main> using <Outlet>
- in order to do so you need those paths wrapped in <Link>

concepts to try to remember
- React Flow: model/component -> vdom -> ui -> fn -> repeats
- "render" occurs between model and vdom, "reconciliation" (current vdom cheecked against prev vdom) occurs between vdom and ui
- DOM CANNOT rerender without some Model change, model changes occur ONLY when state changes
- fn should update state, model should make calculations on the state to be passed to vdom
- be wary of updating existing data structures to fit my own codes needs
- 4 types of model data (data from outside) props, (data from within) state, (kinda like a global data) context, and (persist between renders, doesn't cause re-rendering) ref
- useRef can change it's state w/o re-rendering
- data relationship to component determines if it is state or props
- prop drilling is passing data from a higher/top level component and creating a vertical coupling that is not needed
- useMemo returns a new result from a function when something changes
- useCallback creates a new function object when something changes

redux
- store (state obj) -> selector -> react comp tree -> action ( updates the state by way of a dispatch) -> reducers to create the store
- logic flow acronym C.A.R.S(component,actions,reducers,store/selectors)
    - component runs the action, 
    - actions pass data to reducers, 
    - selectors subscribe to state,
    - reducer updates state
- reducer has to be a pure function
- dont use local component state except for input fields


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
