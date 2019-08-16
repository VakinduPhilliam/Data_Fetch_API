/* ReactJS Fetching Data from Remote URL. */
/* How to fetch data in Higher-Order Components. */

// First, separate all the fetching and state logic into a higher-order component.
// Except for the rendering, everything else within the higher-order component is taken from the previous component where the data fetching happened
// right in the component.
// In addition, the higher-order component receives an url that will be used to request the data.
// If you need to pass more query parameters to your higher-order component later on, you always can extend the arguments in the function signature.

const withFetching = (url) => (Component) =>

  class WithFetching extends React.Component {

    constructor(props) {

      super(props);

      this.state = {

        data: null,
        isLoading: false,
        error: null,

      };
    }

    componentDidMount() {

      this.setState({ isLoading: true });

      axios.get(url)

        .then(result => this.setState({

          data: result.data,
          isLoading: false

        }))

        .catch(error => this.setState({

          error,
          isLoading: false

        }));
    }

    render() {

      return <Component { ...this.props } { ...this.state } />;

    }
  }
