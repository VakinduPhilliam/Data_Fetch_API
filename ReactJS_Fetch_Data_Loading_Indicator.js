/* ReactJS Fetching Data from Remote URL. */
/* React’s componentDidMount () lifecycle method is the best place to fetch data. */

// You can add a loading indicator during the time of waiting for data to load. 
// In your fetching lifecycle method, you would have to toggle the property from false to true and when the data is resolved from true to false.

// ...

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {

      hits: [],
      isLoading: false,

    };
  }

  componentDidMount() {

    this.setState({ isLoading: true });

    fetch(API + DEFAULT_QUERY)

      .then(response => response.json())

      .then(data => this.setState({ hits: data.hits, isLoading: false }));

  }

//  ...

}

export default App;