import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = (props) => (
  <div>
    <AddTodo />
    <VisibleTodoList filter={props.match.params.filter} />
    <Footer />
  </div>
);

export default App;
