/* ReactJS Fetching Data from Remote URL. */
/* React’s componentDidMount () lifecycle method is the best place to fetch data. */

// Loading Indicator render display.
// In your render() method you can use React’s conditional rendering to display either a loading indicator or the resolved data.

// A loading indicator can be as simple as a Loading… message, but you can also use third-party libraries to show a spinner or pending content component. 
// It is up to you to signalize your end-user that the data fetching is pending.

// ...

class App extends Component {

//  ...

  render() {

    const { hits, isLoading } = this.state;

    if (isLoading) {

      return <p>Loading ...</p>;

    }

    return (
      <ul>

        {hits.map(hit =>

          <li key={hit.objectID}>

            <a href={hit.url}>{hit.title}</a>

          </li>

        )}

      </ul>
    );
  }
}