import { useContext } from "react";
import { CartContext } from "../../Context/Cart/Cart";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";
import "./Cart.css";

export default function Cart({ showModal, toggle }) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal, placeOrder } =
    useContext(CartContext);

  //context that are used globally using context API

  return (
    showModal && (
      <div
        className="modal show"
        style={{ display: "block", position: "absolute" }}
      >
        <Modal.Dialog>
          <div className="cart">
            <Modal.Header onClick={toggle} closeButton >
              <Modal.Title>CART</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <div className="cart-content">
                {cartItems.map((items) => {
                  return (
                    <>
                      <div className="cart-product m-2">
                        <img src={items.image} alt={items.description} />
                        <div className="cart-desc">
                          <h5>{items.title}</h5>
                          <p>{items.price}</p>
                        </div>
                      </div>
                      <div className="cart-btn d-flex justify-content-between w-25">
                        <button
                          onClick={() => {
                            removeFromCart(items);
                          }}
                        >
                          -
                        </button>
                        <p>{items.quantity}</p>
                        <button
                          onClick={() => {
                            addToCart(items);
                          }}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </>
                  );
                })}
              </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between">
              {cartItems.length > 0 ? (
                <div>
                  <h3>Total : ${getCartTotal()}</h3>
                  <div className="d-flex gap-5">
                    <Button
                      onClick={() => {
                        clearCart();
                      }}
                    >
                      Clear Cart
                    </Button>
                    <Button className=""
                      onClick={() => {
                        placeOrder(showModal);
                      }}
                    >
                      Place Order
                    </Button>
                  </div>
                </div>
              ) : (
                <h4>Your Cart is Empty...!</h4>
              )}
            </Modal.Footer>
          </div>
        </Modal.Dialog>
      </div>
    )
  );
}

Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func,
};
