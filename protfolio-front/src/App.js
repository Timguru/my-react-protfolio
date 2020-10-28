import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header'
import About from './About'
import './asset/css/App.css'

function App() {
  return (
    <div className="app">
      <Router>
         <Switch>
           <Route exact path="/">
             <Header/>
             <About/>
             <About/>
             <About/>
             <About/>
             <About/>
             <About/>
             <About/>
           </Route>
           <Route></Route>
         </Switch>
      </Router>
    </div>
  )
}

export default App
