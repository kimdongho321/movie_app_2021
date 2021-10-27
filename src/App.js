
import './App.css'
import {HashRouter, Route} from 'react-router-dom'
import About from './routes/About'

function App(){
    return <HashRouter>
        <Route path = '/home'>
            <h1>Home</h1>
            </Route>
            <Route path = '/home/introduction'>
            <h1>Introduction</h1>
            </Route>
        <Route path = '/about' component={About}/>
        <h1>About</h1>
    </HashRouter>
}

export default App;