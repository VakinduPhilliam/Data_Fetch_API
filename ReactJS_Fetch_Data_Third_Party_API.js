/* ReactJS Fetching Data from Remote URL. */
/* React’s componentDidMount () lifecycle method is the best place to fetch data. */

// Fetching Data with a real world third-party API:

import React, { Component } from 'react';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {

      hits: [],

    };
  }

  componentDidMount() {

    fetch(API + DEFAULT_QUERY)

      .then(response => response.json())

      .then(data => this.setState({ hits: data.hits }));

  }

//  ...

}

export default App;