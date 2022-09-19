import React,{ useEffect,useState } from "react";
import axios from "axios";
import { Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { currency } from "../components/Currency";
const Products = ({ price, category }) => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProduct();
  }, [price, category]);
  async function fetchProduct() {
    try {
      const { data } = await axios(`products`, {
        params: {
          price,
          category,
        },
      });
      if (data.status) {
        setProducts(data.entities);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {!products.length ? (
        <h1>No result found</h1>
      ) : (
        products.map((product) => (
          <Col key={product._id} xs={4} className="p-4">
            <Card>
              <Card.Img variant="top" src={product.image} height={300} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{currency(product.price)}</Card.Text>
                {carts.some((cart) => cart.id === product._id) ? (
                  <Button
                    variant="danger"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: product._id,
                      });
                    }}
                  >
                    Remove from cart
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: {
                          id: product._id,
                          name: product.name,
                          image: product.image,
                          qty: 1,
                          price: product.price,
                        },
                      });
                    }}
                  >
                    Add to cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))
      )}
    </div>
  );
};
export default Products