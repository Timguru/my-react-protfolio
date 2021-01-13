import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header'
import About from './About'
import './asset/css/App.css'
import Contact from './Contact'
import Services from './Services'

function App() {
  return (
    <div className="app">
      <Router>
         <Switch>
           <Route exact path="/">
             <Header/>
             <About/>
             <Services/>
           </Route>
           <Route path="/contact">
             <Contact/>
           </Route>
         </Switch>
      </Router>
    </div>
  )
}

export default App
