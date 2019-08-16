/* ReactJS Fetching Data from Remote URL. */
/* React’s componentDidMount () lifecycle method is the best place to fetch data. */

// You can show the error message in your render() method as conditional rendering.

// ...

class App extends Component {

//  ...

  render() {

    const { hits, isLoading, error } = this.state;

    if (error) {

      return <p>{error.message}</p>;

    }

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