import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

class CardList extends React.Component {
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.item.image} />
                    <Card.Body>
                        <Card.Title>name: {this.props.item.name}</Card.Title>
                        <Card.Title>price: {this.props.item.price}</Card.Title>
                        <Button variant="primary" onClick={() => { this.props.deletFav(this.props.item._id) }} style={{ backgroundColor: "red" }} >delte</Button>
                        <Button variant="primary" onClick={() => { this.props.shwoupdateFav(this.props.item) }} >update</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default CardList;