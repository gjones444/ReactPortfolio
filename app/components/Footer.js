import React, {Component} from 'react';

export default class Footer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    return (
        <div className="center">
          <footer>
            <p>Welcome to my Portfolio</p>
          </footer>
        </div>
    );
  }
}
