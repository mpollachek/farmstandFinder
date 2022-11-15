import { 
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  ListGroupItem,
  ListGroup,
  CardHeader,
  CardFooter,
  CardImgOverlay
} from 'reactstrap';


const FarmstandCard = ({ item }) => {
  const { id, image, name } = item;
  return (
    <Card>
      <CardImg 
        width='100%'
        src={image}
        alt={name}
      />
      <CardImgOverlay>
        <CardTitle>{name}</CardTitle>
      </CardImgOverlay>
  </Card>
  );
}

export default FarmstandCard;