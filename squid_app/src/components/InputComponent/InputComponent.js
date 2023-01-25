import React from 'react';
import PalindromeComponent from '../PalindromeComponent/PalindromeComponent.js';

class InputComponent extends React.Component {
  state = {
    text: 'original text'
  };

  handleEvent = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render(){
    console.log(this.state.text)
    return(
      <div>
        <div> {this.state.text}...</div>
        <input type="text" onChange={this.handleEvent}></input>
        <PalindromeComponent text={this.state.text}/>
      </div>
    );
  }
}
export default InputComponent;