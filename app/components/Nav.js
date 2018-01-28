import React, {Component} from 'react';
import Footer from './Footer.js';
import Typist from 'react-typist';

export default class Nav extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    return (
      <div>

      <ul id="slide-out" class="side-nav fixed white-text grey container-fluid center">
      <br/>
          <li><a href="/">Home</a></li>
          <li><a href="/Experience">Projects</a></li>
          <li><a href="/Work">Profile</a></li>
                   </ul>
      <div class="row">
      </div>
   <div class="col hide-on-small-only m3 l2">
     <ul class="section table-of-contents">
     </ul>
   </div>
 </div>
    );
  }
}
