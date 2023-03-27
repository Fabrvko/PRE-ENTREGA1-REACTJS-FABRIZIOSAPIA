import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nike from './assets/nikeair5.jpeg'

function Products() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Nike} alt='Nike Air 5'/>
      <Card.Body>
        <Card.Title>NIKE</Card.Title>
        <Card.Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        </Card.Text>
        <Button variant="primary">Añadir al carrito.</Button>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Ver más.</Card.Link
        ></Card.Body>
    </Card> 
    )
}

export default Products;