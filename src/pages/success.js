import {Col, Row, Spinner, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import axios from "axios";
import {currency} from "../components/Currency";

const SuccessPage = () => {
    const [searchParam] = useSearchParams();
    const [loading, setLoading] = useState(true)
    const [orderLines, setOrderLines] = useState()
    useEffect(() => {
        updateOrderStatus(searchParam.get("session_id"))
    }, [])

    async function updateOrderStatus(session_id) {
        try {
            const {data, status} = await axios.post('session/updatestatus', {session_id, payment_status: "succeeded"})
            if (status) {
                setOrderLines(data.order.order_lines)
                setLoading(false)
            }
        } catch (err) {
            console.error("something went wrong.!", err)
        }
    }

    return (
        <Row>
            <Col style={{"marginTop": "70px"}}>
                {loading ? <Spinner animation="border"/> : (
                    <div>
                        <h1>Thanks you for ordered!</h1>
                        <Col className="py-5">Order Summary</Col>
                        <Table>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Quantity</th>
                                <th align="right">Price</th>
                                <th align="right">Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            {orderLines.map((order) => (
                                    <tr key={order.id}>
                                        <td>{order.name}</td>
                                        <td><img src={order.image} alt={order.name} width={90} height={90}/></td>
                                        <td>{order.qty}
                                        </td>
                                        <td align="right">{currency(order.price)}</td>
                                        <td align="right">{currency(+order.price * +order.qty)}</td>
                                    </tr>
                                )
                            )}
                            </tbody>
                        </Table>
                    </div>
                )}
            </Col>
        </Row>
    )
}
export default SuccessPage;