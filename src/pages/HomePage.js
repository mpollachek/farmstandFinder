import { Container, Row } from 'reactstrap';
import DisplayList from '../display/DisplayList';

const HomePage = () => {

  return(
    <Container>
      <Row>
        <DisplayList />
      </Row>
    </Container>
  )
}

export default HomePage;