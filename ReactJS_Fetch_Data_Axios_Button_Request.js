/* ReactJS Fetching Data from Remote URL. */
/* How to fetch data with Axios in React. */
/* You can install axios in your project with npm install axios and then use it instead of the native fetch API in your project. */

// You can also actively request data with a button click. 
// Then you wouldn’t use a lifecycle method, but your own class method.

import React, { Component } from 'react';
import axios from 'axios';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {

      hits: [],
      isLoading: false,
      error: null,

    };
  }

  getStories() {

    this.setState({ isLoading: true });

    axios.get(API + DEFAULT_QUERY)

      .then(result => this.setState({

        hits: result.data.hits,
        isLoading: false

      }))

      .catch(error => this.setState({

        error,
        isLoading: false

      }));
  }

//  ...

}

export default App;
