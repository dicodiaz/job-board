import { Col, Container, Row } from 'react-bootstrap';
import Filters from './Filters';
import Hero from './Hero';
import JobList from './JobList';

const Main = () => {
  return (
    <main className="bg-light min-vh-100 py-5">
      <Container>
        <Row className="mx-0 justify-content-center">
          <Col md={9}>
            <Hero />
            <Filters />
            <JobList />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
