import React, {Component} from 'react';
import Footer from './Footer.js';
import Typist from 'react-typist';
import Nav from './Nav.js';

export default class Experience extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    return (
      <div class="">
      <Nav/>

      <div class="row">
    </div>
      <div class="col s6">
        <p>Project goes here</p>
      </div>
      <div class="col s6">
      <p>Project goes here</p>
      </div>
      <Footer/>
      </div>
    );
  }
}
