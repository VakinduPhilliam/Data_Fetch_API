/* ReactJS Fetching Data from Remote URL. */
/* React’s componentDidMount () lifecycle method is the best place to fetch data. */

// When the data is fetched successfully, it will be stored in the local state with React’s this.setState() method. 
// Then the render() method will trigger again and you can display the fetched data.

// ...

class App extends Component {

// ...

  render() {

    const { hits } = this.state;

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

export default App;