import React from 'react'
import TodoItem from './TodoItem.js'
import TodoForm from './TodoForm.js'

class TodoList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            todos : [
                {id : 1,
                title : "Title 1",
                description : "Description 1"},
                {id : 2,
                title : "Title 2",
                description : "Description 2"},
                {id : 3,
                title : "Title 3",
                description : "Description 3"},
            ],
            backgrounds : [
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'dark',
              ]
        }
    }

    addTodo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    render() {
        return (
            <div >
                <div>
                    <TodoForm onSubmit={this.addTodo} />
                    <br/>
                </div>
                <div className="itemsGrid">
                    {this.state.todos.map((item, i) => {
                        let j = i % 7;
                        return (
                            
                            <TodoItem key={item.id} todo={item} background={this.state.backgrounds[j]}/>
                        )
                    })}
                </div>
            </div>
            
        )
    }

}

export default TodoList;