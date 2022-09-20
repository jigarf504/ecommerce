import { Col, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const CancelPage = () => {
  const [searchParam] = useSearchParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    updateOrderStatus(searchParam.get("session_id"));
  }, []);

  async function updateOrderStatus(session_id) {
    try {
      const { status } = await axios.post("session/updatestatus", {
        session_id,
        payment_status: "cancelled",
      });
      if (status) {
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
            <h1>Your ordered has been cancelled</h1>
          </div>
        )}
      </Col>
    </Row>
  );
};
export default CancelPage;
