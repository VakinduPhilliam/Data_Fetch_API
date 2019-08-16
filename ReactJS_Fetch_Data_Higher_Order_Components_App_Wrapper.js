/* ReactJS Fetching Data from Remote URL. */
/* How to fetch data in Higher-Order Components. */

// You can use the higher-order component to wrap your App component.

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

// ...

const AppWithFetch = withFetching(API + DEFAULT_QUERY)(App);
