import React from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';
import ColorWrapper from "../HOC/ColorWrapper";

class ListTodo extends React.Component {

  state = {
    listTodos: [
      { id: 'todo1', title: 'Doing Homework' },
      { id: 'todo2', title: 'Making Video' },
      { id: 'todo3', title: 'Fixing Bugs' }

    ],
    editTodos: {}
  }
  addNewTodo = (todo) => {

    // let currListTodos = this.state.listTodos;
    // currListTodos.push(todo);
    this.setState({
      listTodos: [...this.state.listTodos, todo]
      // listTodos: currListTodos
    });
    toast.success("Wow so easy!");
  }
  handleDeleteTodo = (todo) => {
    let currentListTodos = this.state.listTodos
    currentListTodos = currentListTodos.filter(item => item.id !== todo.id);
    this.setState({
      listTodos: currentListTodos
    });
    toast.success("Delete todo successfully!");
  }
  handleEditTodo = (todo) => {
    let { editTodos, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodos).length === 0;
    if (isEmptyObj === false && editTodos.id == todo.id) {
      let listTodosCopy = [...listTodos];
      let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
      listTodosCopy[objIndex].title = editTodos.title;
      this.setState({
        listTodos: listTodosCopy,
        editTodos: {}
      });
      toast.success("Update todo successfully!");
      return;
    }
    this.setState({
      editTodos: todo
    })
  }
  handleOnChangeEditTodo = (event) => {
    this.setState({
      editTodos: {
        ...this.state.editTodos,
        title: event.target.value
      }
    });
  }
  render() {
    let { listTodos, editTodos } = this.state;
    let isEmptyObj = Object.keys(editTodos).length === 0;
    console.log('check editTodos: ', isEmptyObj);
    // let listTodos = this.state.listTodos;
    return (
      <>
      <div className="list-todo-container" style={{ color: this.props.color }}>
         <p>Welcome TODO list phuoc and &amp; nhi</p>
         <AddTodo
          addNewTodo={this.addNewTodo}
        />
        <div className="list-todo-content">
          {listTodos && listTodos.length > 0 && listTodos.map((item, index) => {
            return (
                <div className="todo-child" key={item.id}>
                  {isEmptyObj === true ?
                    <span>{index + 1} - {item.title}  </span>
                    :
                    <>
                      {editTodos.id === item.id ?
                        <span>
                          {index + 1} - <input value={editTodos.title}
                            onChange={(event) => this.handleOnChangeEditTodo(event)} />
                        </span>
                        :
                        <span>{index + 1} - {item.title}  </span>
                      }
                    </>

                  }
                  <button className="edit-button"
                    onClick={() => this.handleEditTodo(item)}
                  >
                    {isEmptyObj === false && editTodos.id === item.id ? 'Save' : 'Edit'}
                  </button>
                  <button className="delete-button"
                    onClick={() => this.handleDeleteTodo(item)}
                  >Delete</button>
                </div>

                )
          })
          }

        </div>
      </div>
      </>
    )
  }
}

export default ColorWrapper(ListTodo);