import {Col, Row, Spinner, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import axios from "axios";
import OrderLines from "../components/OrderLines";
const SuccessPage = () => {
  const [searchParam] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [orderLine, setOrderLine] = useState();
  useEffect(() => {
    updateOrderStatus(searchParam.get("session_id"));
  }, []);

  async function updateOrderStatus(session_id) {
    try {
      const { data, status } = await axios.post("session/updatestatus", {
        session_id,
        payment_status: "succeeded",
      });
      if (status) {
        setOrderLine(data.order.order_lines);
        setLoading(false);
      }
    } catch (err) {
      console.error("something went wrong.!", err);
    }
  }

  return (
    <Row>
      <Col style={{ marginTop: "70px" }}>
        {loading ? (
          <Spinner animation="border" />
        ) : (
          <div>
            <h1>Thanks you for ordered!</h1>
            <Col className="py-5">Order Summary</Col>
            <OrderLines order_lines={orderLine} />
          </div>
        )}
      </Col>
    </Row>
  );
};
export default SuccessPage;