/* ReactJS Fetching Data from Remote URL. */
/* React’s componentDidMount () lifecycle method is the best place to fetch data. */

// Unfortunately, the native fetch API doesn’t use its catch block for every erroneous status code. 
// For instance, when a HTTP 404 happens, it wouldn’t run into the catch block.
// But you can force it to run into the catch block by throwing an error when your response doesn’t match your expected data.

// ...

class App extends Component {

//  ...

  componentDidMount() {

    this.setState({ isLoading: true });

    fetch(API + DEFAULT_QUERY)

      .then(response => {

        if (response.ok) {
          return response.json();

        } else {

          throw new Error('Something went wrong ...');

        }
      })

      .then(data => this.setState({ hits: data.hits, isLoading: false }))

      .catch(error => this.setState({ error, isLoading: false }));

  }

//  ...

}
