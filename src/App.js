import { Component } from 'react';
import FunctionalComponent from './components/functionalComponent';

class App extends Component {
  state = {
    val: 1
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ val: 1 })
    }, 3000)
  }


  render() {
    // console.log("123");
    return (
      <div className="App">
        <div >
          <FunctionalComponent val={this.state.val} />
        </div>
      </div>
    );
  }
}

export default App;
