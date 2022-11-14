import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { FARMSTANDS } from '../testData/FARMSTANDS';

const DisplayList = () => {
    const items = FARMSTANDS;
  return(
    <Row>
        {items.map((item, id) => {
          const { featured, isLoading, errMsg } = item;
          if (isLoading) {
            return <Loading key={id} />;
          }
          if (errMsg) {
            return <Error errMsg={errMsg} key={id} />;
          }

          return (
            item && (
              <Col md='4' className='g-4' key={id}>
                <DisplayCard item={item} />
              </Col>
            )
          )
        })}
    </Row>
  );
};

export default DisplayList;