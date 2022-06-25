import { Data, Row } from './style';

const Product: React.FC<{
  name: string;
  year: number;
  color: string;
  id: number;
}> = (props) => {
  return (
    <Row color={props.color} className='info'>
      <Data>{props.name}</Data>
      <Data>{props.year}</Data>
      <Data className='id'>{props.id}</Data>
    </Row>
  );
};

export default Product;
