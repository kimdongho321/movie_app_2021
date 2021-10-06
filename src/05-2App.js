import React, {Component} from 'react';
class App extends Component{
    constructor(props){
        super(props)
        console.log('constructor');
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    render() {
        return (
            <div>
            <h1>Hello</h1>
              </div>
            )
    }
}

export default App;