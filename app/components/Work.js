import React, {Component} from 'react';
import Footer from './Footer.js';
import Typist from 'react-typist';
import Nav from './Nav.js';


export default class Work extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      alertClick: function(){
        alert("You clicked on the dog");
      },
    }
  }
  render() {
    return (

      <div id="structure" class="section scrollspy">
      <Nav/>
      <article class="container">
              <div class="profile-image"></div>
        <div class="profile-content">
          <ul class="profile-detail">
            <li><label>Name</label>
              <div class="value">
                <p>George Jones</p>
              </div>
            </li>
            <li><label>Languages</label>
              <div class="value">
                <p>HTMl/CSS</p>
                <p>Javascript</p>
                <p>PostgresSQL</p>
                <p>React</p>
              </div>
            </li>
            <li><label>Locations</label>
              <div class="value">
                <p>New York</p>
              </div>
            </li>
          </ul>
        </div>
      </article>
      <Footer/>
      </div>
    );
  }
}
