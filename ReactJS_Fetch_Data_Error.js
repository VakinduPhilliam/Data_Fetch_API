/* ReactJS Fetching Data from Remote URL. */
/* React’s componentDidMount () lifecycle method is the best place to fetch data. */

// Error display
// The second state that you could keep in your local state would be an error state. 
// When an error occurs in your application, nothing is worse than giving your end-user no indication about the error.

// ...

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {

      hits: [],
      isLoading: false,
      error: null,

    };
  }

//  ...

}

