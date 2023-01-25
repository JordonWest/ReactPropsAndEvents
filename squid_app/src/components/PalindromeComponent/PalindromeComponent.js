import React from 'react';

class PalindromeComponent extends React.Component {

  state = {
    isPalindrome: "false"
  }
  // const [ isPalindrome, setIsPalindrome ] = useState("false");

  checkPalindrome = () => {
    if (this.props.text.split('').reverse().join('') === this.props.text){
        if(this.props.text.length > 1){
            this.setState({
                isPalindrome: "is a palindrome!"
            })
        }
    }else{
        this.setState({
            isPalindrome: "is NOT a palindrome!"
        })
    } 
  }
  componentDidUpdate(prevProps){
    if(prevProps.text !== this.props.text){
        this.checkPalindrome()
    }
  }

  render(){
    console.log(`This is my props >>> ${this.props.text}`)
    return(
      <div>
        <h1>These are my props = { this.props.text }</h1>
        <h1>This is my state = { this.state.isPalindrome }</h1>
      </div>
    );
  }
}
export default PalindromeComponent;