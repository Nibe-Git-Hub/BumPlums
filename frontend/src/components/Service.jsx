import Rating from './Rating';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Service({ service }) {
  return (
    <div>
      <Card className='my-3 p-3 rounde  d'>
        <Link to={`/service/${service._id}`}>
          <Card.Img src={service.image} variant='top' />
        </Link>
        
        <Card.Body>
          <Link to={`/service/${service._id}`}>
            <Card.Title as='div'>
              <strong>{service.name}</strong>
            </Card.Title>
          </Link>

        <Card.Text as='div'>
            <div className='my-3'>
              {service.description}
            </div>
          </Card.Text>

          <Card.Text as='div'>
            <Rating value={service.rating} text={`${service.numReviews} reviews`} />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Service
