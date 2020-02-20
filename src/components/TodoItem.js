import React from 'react'
import {Card} from 'react-bootstrap'

const TodoItem = (props) => {
    return (
        <div>
            <Card bg={props.background} text="white" style={{ width: '18rem' }}>
                <Card.Header>Todo Item {props.todo.id}</Card.Header>
                <Card.Body>
                <Card.Title>{props.todo.title}</Card.Title>
                <Card.Text>
                    {props.todo.description}
                </Card.Text>
                </Card.Body>
            </Card>
            <br/>
        </div>
    )
}

export default TodoItem;