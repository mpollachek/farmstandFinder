import { Container, Row } from 'reactstrap';
import FarmstandList from '../farmstands/FarmstandsList';

const FarmstandsPage = () => {

  return(
    <Container>
      <Row>
        <FarmstandList />
      </Row>
    </Container>
  )
}

export default FarmstandsPage;