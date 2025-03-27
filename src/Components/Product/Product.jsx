import { useEffect, useState, useContext} from "react";
import { Card, Row, Col, Container, Button} from "react-bootstrap";
import "./Product.css";
import {CartContext} from '../../Context/Cart/Cart'
import Cart from '../Cart/Cart'
import { FaCartArrowDown } from "react-icons/fa6";

export default function Product() {
  const [Products, setProducts] = useState([]);
  const { cartItems, addToCart } = useContext(CartContext);
  const [showModal,setShowModal] = useState(false) //Modal State

  const toggle = () => {
    setShowModal(!showModal)
  }

  async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products"); // fetch the products
    const data = await response.json(); // convert the response to json
    setProducts(data); // set the products in the state to the products we fetched
    console.log(data)
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Container fluid className="home-container">
        <div className="title m-5">
          <h1> E- COM</h1>
          {!showModal && <button onClick={toggle}>CART ({cartItems.length})</button>}
        </div>

        <div className="products">
          {Products.map((Items) => {
            return (
              <div className="product-card p-4">
                <Card.Img
                  variant="top"
                  src={Items.image}
                  alt={Items.title}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>{Items.title}</Card.Title>
                  <Card.Text>{Items.description.slice(0,50)}...</Card.Text>
                  <div className="d-flex justify-content-between">
                    <p>$ {Items.price}</p>
                  <Button  onClick={() => addToCart(Items)} className="add"><FaCartArrowDown /></Button>
                  </div>
                </Card.Body>
              </div>
            );
          })}
        </div>
        <Cart showModal={showModal} toggle={toggle} />
      </Container>
    </>
  );
}
