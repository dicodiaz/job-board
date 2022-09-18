import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Container fluid as="header" className="fixed-top py-2">
      <h1 className="h3">
        <span className="fw-bold">Github</span> <span className="fw-light">Jobs</span>
      </h1>
    </Container>
  );
};

export default Header;
