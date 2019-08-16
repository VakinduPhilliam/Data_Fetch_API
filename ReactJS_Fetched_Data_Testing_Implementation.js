/* ReactJS Fetching Data from Remote URL. */
/* How to test data fetching in React. */
/* When testing React components, you can rely Enzyme for rendering the components in test cases. */
/* Furthermore, when it comes to testing asynchronous data fetching, Sinon is helpful for spying and mocking data. */

// Installation:
// npm install enzyme enzyme-adapter-react-16 sinon --save-dev 

// Implementing the first test:

// In the test, you start to render the React component with Enzyme’s mount() function which makes sure that all lifecycle methods are executed 
// and all child components are rendered.
// Initially you can have an assertion for your hits being an empty array in the local state of the component.
// That should be true, because you initialze your local state with an empty array for the hits property.
// Once you resolve the promise and trigger your component’s rendering manually, the state should have changed after the data fetching.

// ...

describe('App', () => {

//  ...

  it('stores data in local state', (done) => {

    const wrapper = mount(<App/>);

    expect(wrapper.state().hits).toEqual([]);

    promise.then(() => {

      wrapper.update();

      expect(wrapper.state().hits).toEqual(result.data.hits);

      done();

    });

  });

//  ...

});
