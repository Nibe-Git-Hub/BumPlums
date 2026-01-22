import services from '../services'
import Service from '../components/Service'
import { Row, Col } from 'react-bootstrap'

function HomeScreen() {
  return (
    <div>
      <h1> Bum Plumbs </h1>
      <Row>
        {services.map((service) => (
            <Col key={service._id} sm={12} md={6} lg={4} xl={3}>
                <Service service={service} />
            </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
