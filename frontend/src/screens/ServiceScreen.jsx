import React from 'react'
import services from '../services';
import Rating from '../components/Rating';
import { Row, Col, Image, Container, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

function ServiceScreen() {
    const { id } = useParams();
    const service = services.find((s) => s._id === id);

  return (
    <Container>
        <Link className='btn btn-light my-3' to='/'> Go Back </Link>
        <Row>
            <Col md={6}>
                <Image src={service.image} alt={service.name} fluid />
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{service.name}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Description: {service.description}
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Rating value={service.rating} text={`${service.numReviews} reviews`} />
                    </ListGroup.Item>
                    
                </ListGroup>
            </Col>

            <Col md={3}>    
                <ListGroup variant='flush'>

                    <ListGroup.Item>
                        Price: ${service.price}
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Duration : {service.duration}
                    </ListGroup.Item>
                    
                    <ListGroupItem>
                        Expert: {service.expert}
                    </ListGroupItem>

                    <ListGroup.Item>
                        <Button className='btn-block' type='button'> Order Now </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    </Container>
  )
}

export default ServiceScreen
