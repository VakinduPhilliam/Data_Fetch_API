/* ReactJS Fetching Data from Remote URL. */
/* How to fetch data in Render Props. */

// By using React’s children property as render prop, you are able to pass all the local state from the Fetcher component.
// That’s how you can make all the conditional rendering and the final rendering within your render prop component.

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

// ...

const RenderPropApproach = ({ data, isLoading, error }) =>

  <Fetcher url={API + DEFAULT_QUERY}>

    {({ data, isLoading, error }) => {

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
    }}

  </Fetcher>
