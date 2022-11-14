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


const FarmstandCard = ({farmstand}) => {
  const { id, image, name } = farmstand;
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