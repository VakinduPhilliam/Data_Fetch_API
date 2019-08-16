/* ReactJS Fetching Data from Remote URL. */
/* How to test data fetching in React. */
/* When testing React components, you can rely Enzyme for rendering the components in test cases. */
/* Furthermore, when it comes to testing asynchronous data fetching, Sinon is helpful for spying and mocking data. */

// Installation:
// npm install enzyme enzyme-adapter-react-16 sinon --save-dev 

// Before all tests you want to stub your axios request with mocked data. 
// You can create your own JavaScript promise for it and use it later to have fine-grained control over its resolve functionality.

// ...

describe('App', () => {

  const result = {
    data: {

      hits: [

        { objectID: '1', url: 'https://blog.com/hello', title: 'hello', },
        { objectID: '2', url: 'https://blog.com/there', title: 'there', },

      ],
    }

  };

  const promise = Promise.resolve(result);

  beforeAll(() => {

    sinon

      .stub(axios, 'get')

      .withArgs('https://hn.algolia.com/api/v1/search?query=redux')

      .returns(promise);

  });

  afterAll(() => {

    axios.get.restore();

  });

//  ...

});