/* ReactJS Fetching Data from Remote URL. */
/* How to fetch data in Higher-Order Components. */

// You can dispose all of the fetching and state logic from your App component. 
// Because it has no local state or lifecycle methods anymore, you can refactor it to a functional stateless component.
// The incoming property changes from the specific hits to the generic data property.

const App = ({ data, isLoading, error }) => {

  if (!data) {

    return <p>No data yet ...</p>;

  }

  if (error) {

    return <p>{error.message}</p>;

  }

  if (isLoading) {

    return <p>Loading ...</p>;

  }

  return (

    <ul>

      {data.hits.map(hit =>

        <li key={hit.objectID}>

          <a href={hit.url}>{hit.title}</a>

        </li>

      )}

    </ul>

  );
}
