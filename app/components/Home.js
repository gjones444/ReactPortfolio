import React, {Component} from 'react';
import Footer from './Footer.js';
import Typist from 'react-typist';
import Nav from './Nav.js';
import Experience from './Experience.js';

export default class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
     nameText: "Hello. I am George Jones.",
     skillsText: "Full Stack Developer based in New York. Experienced in React, PostgresSQL and NodeJs."
    };
  }
  render() {
    return (
        <div>
        <Nav/>
        <div class="container">
        <h2>
          <Typist>
            {this.state.nameText}
            <br/>
            <Typist.Delay ms={500} />
            <h4>
            {this.state.skillsText}
            </h4>
         </Typist>
         </h2>
         <Footer/>
        </div>
        </div>
    );
  }
}
