import React from 'react'
import {Card, Form, Button} from 'react-bootstrap'

class TodoForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title : "",
            description : ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id :  Math.floor(Date.now() / 1000),
            title : this.state.title,
            description : this.state.description
        })
    }


    render() {
        return (
            <Card bg="dark" text="white" style={{ width: '18rem' }}>
            <Card.Header>Todo Item</Card.Header>
            <Card.Body>
            <Form>
                <Form.Group controlId="formBasicCity">
                    <Card.Title>
                        <Form.Control name="title" placeholder="Enter Title" value={this.state.title} onChange={this.handleChange}/>
                    </Card.Title>
                    <Card.Text>
                        <Form.Control name="description" placeholder="Enter Description" value={this.state.description} onChange={this.handleChange}/>
                    </Card.Text>
                </Form.Group>
                <Button variant="primary" onClick={this.handleSubmit}>Check</Button>
            </Form>
            </Card.Body>
            </Card>
        )
    }
}

export default TodoForm;