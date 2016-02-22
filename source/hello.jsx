
import React from 'react';
 import ReactDOM from 'react-dom';
class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value:'ee'
        }
    }
  handleChange(event) {
    console.log(event)
    // this.setState({value: event.target.value});
  }
  render() {
    return <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      />
  }
}
ReactDOM.render(<Hello/>, document.getElementById('hello'));