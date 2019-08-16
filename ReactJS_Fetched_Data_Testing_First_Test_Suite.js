/* ReactJS Fetching Data from Remote URL. */
/* How to test data fetching in React. */
/* When testing React components, you can rely Enzyme for rendering the components in test cases. */
/* Furthermore, when it comes to testing asynchronous data fetching, Sinon is helpful for spying and mocking data. */

// Installation:
// npm install enzyme enzyme-adapter-react-16 sinon --save-dev 

// You can write your first test suite for the data request in React scenario.

import React from 'react';
import axios from 'axios';

import sinon from 'sinon';
import { mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './';

configure({ adapter: new Adapter() });

describe('App', () => {

  beforeAll(() => {

  });

  afterAll(() => {

  });

  it('renders data when it fetched data successfully', (done) => {

  });

  it('stores data in local state', (done) => {

  });

});

