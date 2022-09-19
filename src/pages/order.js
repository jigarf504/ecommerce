import { Row, Col, Card, Table, Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import OrderLines from "../components/OrderLines";

import axios from "axios";
const Order = () => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    fetchOrders();
  }, []);
  async function fetchOrders() {
    try {
      const { data, status } = await axios("orders");
      if (status === 200 && data.status) {
        setOrders(data.orders);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Row>
      <Col style={{ marginTop: "70px" }}>
        <Card className="text-center">
          <Card.Header>Orders</Card.Header>
          <Card.Body>
            <Table width="50%">
              <thead>
                <tr>
                  <th>Order id</th>
                  <th>Order Status</th>
                  <th>Order Date</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.payment_status}</td>
                    <td>{order.order_date}</td>
                    <td>{order.total}</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => {
                          handleShow();
                          setOrder(order);
                        }}
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Number (#{order?._id || ""})</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OrderLines order_lines={order?.order_lines || []} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};
export default Order;
