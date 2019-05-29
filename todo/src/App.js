import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import './App.css';

class App extends React.Component {
  state = {
    task: ''
  }

  onInputChange = e => {
    const {name, value} = e.target;
    this.setState ({
      [name] : value
    })
  }

  onButtonClick = () => {
    if (this.state.task) {
      this.props.addTodo(this.state.task)
      this.setState({
        task: ''
      })

    }
  }

  render () {
    return (
      <>
        <h1> Welcome to your Todo list </h1>
        <ul>
          {this.props.tasks.map(todo => {
            return <li key={todo.value}>{todo.value}</li>
          })}
        </ul>
        <input name='task' onChange={this.onInputChange} value={this.state.task} />
        <button onClick={this.onButtonClick}> Add new todo </button>
      </>
    );
    }
  }


  const mapStateToProps = state => {
  return {
    tasks: state.todos
  }
}

export default connect(mapStateToProps, { addTodo, newFN })(App);