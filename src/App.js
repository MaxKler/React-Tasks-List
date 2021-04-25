import React from 'react'
import {Switch, Route} from 'react-router'
import About from './routes/About'
import TasksList from './routes/TasksList'

function App() {
  return (
    <Switch>
       <Route exact path="/" component={TasksList} />
       <Route path="/about" component={About} />
    </Switch>
  )
}

export default App;
