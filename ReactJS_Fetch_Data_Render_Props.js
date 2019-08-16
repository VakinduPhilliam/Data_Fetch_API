/* ReactJS Fetching Data from Remote URL. */
/* How to fetch data in Render Props. */

// It is possible to use a render prop component for declarative data fetching in React.

class Fetcher extends React.Component {

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

    axios.get(this.props.url)

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

    return this.props.children(this.state);

  }
}
