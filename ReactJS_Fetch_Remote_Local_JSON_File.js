/* ReactJS Fetching Data from Remote File. */

// The curious case of 'test.json'.

// Fetching remote JSON file

// If your json is stored locally, you don't have to use any library to get it. Just import it.

import React, {Component} from 'react';
import test from 'test.json';

class Test extends Component {

  render () {

    const elem = test.person;

    return (

     <ul>

       {

        Object.keys(elem).map((v, i) => 

        <li key={i}> {v} {test[v]} </li> 

        )

       }

     </ul>

    )
  }

};

export default Test;