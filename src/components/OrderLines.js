import { Table } from "react-bootstrap";
import { currency } from "../components/Currency";
const OrderLines = ({ order_lines }) => {
  return (
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
        {order_lines.map((order) => (
          <tr key={order.id}>
            <td>{order.name}</td>
            <td>
              <img src={order.image} alt={order.name} width={90} height={90} />
            </td>
            <td>{order.qty}</td>
            <td align="right">{currency(order.price)}</td>
            <td align="right">{currency(+order.price * +order.qty)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default OrderLines;
