/* ReactJS Fetching Data from Remote URL. */
/* How to fetch data with Async/Await in React. */

// Data fetching in React to async/await.
// Instead of then() you can use the async/await statements when fetching data in React.
// The async statement is used to signalize that a function is executed asynchronously.
// It can be used on a (React) class component’s method too.
// The await statement is used within the async function whenever something is executed asynchronously.
// So the next line is not executed before the awaited request resolves.
// Furthermore, a try and catch block can be used to catch the error in case the request fails.

import React, { Component } from 'react';
import axios from 'axios';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class App extends Component {

//  ...

  async componentDidMount() {

    this.setState({ isLoading: true });

    try {

      const result = await axios.get(API + DEFAULT_QUERY);

      this.setState({

        hits: result.data.hits,
        isLoading: false

      });

    } catch (error) {

      this.setState({
        error,
        isLoading: false

      });
    }
  }

//  ...

}

export default App;
