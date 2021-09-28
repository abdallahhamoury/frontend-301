import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';

class UpdateModel extends React.Component {
    update = (e) => {
        e.preventDefault();
        let selectedItem = {
            id: this.props.item._id,
            name: e.target.name.value,
            image: e.target.image.value,
            price: e.target.price.value,
            email: this.props.item.email,
        }
        this.props.update(selectedItem);
        this.props.handelClose();
    }
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handelClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>update</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.update}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>name</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.item.name} name="name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>image</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.item.image} name="image" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>price</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.item.price} name="price" />
                            </Form.Group>
                            <Button variant="secondary" type="submit">
                               update
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>

            </>
        )
    }
}

export default UpdateModel;