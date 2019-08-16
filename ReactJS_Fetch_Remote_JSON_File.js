/* ReactJS Fetching Data from Remote File. */

// The curious case of 'test.json'.

// Fetching remote JSON file

import React, {Component} from 'react';
import axios from 'axios';

constructor (props) {

   this.state = {
         items: [],

   }

   // Use axios.get to fetch data

   axios.get('http://localhost:8080/your/dir/test.json') 

    .then(res => {

        // Store data     

        this.setState({ items: res.data });  

   });
}

class Test extends Component {

// Display data

    console.log(this.state.items);

    render () {

      return (

           ) 
      }
};

export default Test;
