/* ReactJS Fetching Data from Remote URL. */
/* React’s componentDidMount () lifecycle method is the best place to fetch data. */

// When using promises, the catch() block is usually used after the then() block to handle errors. 
// That’s why it can be used for the native fetch API.

// ...

class App extends Component {

//  ...

  componentDidMount() {

    this.setState({ isLoading: true });

    fetch(API + DEFAULT_QUERY)

      .then(response => response.json())

      .then(data => this.setState({ hits: data.hits, isLoading: false }))

      // Define Error

      .catch(error => this.setState({ error, isLoading: false }));

  }

//  ...

}