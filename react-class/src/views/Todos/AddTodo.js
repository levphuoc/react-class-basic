import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handleOnChange = (event) => {
        this.setState({
            title: event.target.value
        });
    }
    handleAddTodo = () => {
        if(!this.state.title) {
            toast.error("You must enter a title!");
            return;
        }
        let todo = {
            id: 'todo' + Math.floor(Math.random() * 1000),
            title: this.state.title
        }
        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state;
        if (!this.props.addNewTodo) return null; // Ensure addNewTodo is passed as a prop
        return (
            <div className="add-todo">
                <input type="text" placeholder="Add new todo" value={title}
                    onChange={(event) => this.handleOnChange(event)}
                />
                <button className="add" type="button"
                    onClick={() => this.handleAddTodo()}>
                    Add
                </button>
            </div>
        );
    }
}

export default AddTodo;