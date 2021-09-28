import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

class Favcard extends React.Component {
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.item.image} />
                    <Card.Body>
                        <Card.Title>name: {this.props.item.name}</Card.Title>
                        <Card.Title>price: {this.props.item.price}</Card.Title>
                        <Button variant="primary" onClick={() => { this.props.addToFavorites(this.props.item) }}>Add To Favorite</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default Favcard;