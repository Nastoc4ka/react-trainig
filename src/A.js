import React, { Component } from 'react';
import B from './B';

class A extends Component {
  constructor (props) {
    super(props);
      this.updateInput = this.updateInput.bind(this);
    this.state = {
        inputText: 'Users',
      }
  }

   updateInput(e) {
      this.setState ({
           inputText: e.target.value,
      })
    }
  render() {
      return (
          <div className="a">
              <input
                  type = 'text'
                  value = {this.state.inputText}
                  onChange={this.updateInput}
              />
              <B fromInput = {this.state.inputText}/>
          </div>
      );
  }

}

export default A;
