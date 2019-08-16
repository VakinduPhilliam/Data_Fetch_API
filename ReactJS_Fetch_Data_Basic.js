/* ReactJS Fetching Data from Remote URL. */
/* React’s componentDidMount () lifecycle method is the best place to fetch data. */

import React, { Component } from 'react';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {

      data: null,

    };

  }

  componentDidMount() {

    fetch('https://api.mydomain.com')

      .then(response => response.json())

      .then(data => this.setState({ data }));

  }

//  ...

}

export default App;
