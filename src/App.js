import React, {Component} from 'react'

class App extends Component{
    constructor(props){
        super(props)
        console.log('constructor')
    }
    state = {
        count:0
    }

    add = () => {
        console.log('add')
        this.setState(current => ({count: this.state.count +1}))
    }
  
    minus = () => {
        console.log('minus')
        this.setState(current => ({count: this.state.count -1}))
    }
  render() {
      return (
          <div>
          <h1>The number is: {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
            <button>Add</button>
            </div>
          )
  }
}

export default App;