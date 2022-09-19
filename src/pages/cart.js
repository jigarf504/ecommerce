import {Row,Col,Table,Button,Badge} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useState,useEffect} from "react";
import {currency} from "../components/Currency";
import axios from "axios";
const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart)
    function cartTotal() {
        let total = 0
        cartItems.forEach((cart) => {
            total += +cart.qty * +cart.price
        })
        return currency(total)
    }

    async function paymentHandler() {
        try {
            const {data,status} = await axios.post("session/generate", {cart_data: cartItems})
            if (status === 200) {
                window.location.href = data.session.url
            }
        } catch (err) {
            console.error('something went wrong on process payment',err)
        }
    }
    return (
        <Row>
            <Col style={{"marginTop":"70px"}}>
                <h3>Cart</h3>
                <Table >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th align="right">Price</th>
                            <th align="right">Total</th>
                        </tr>
                    </thead>
                    {
                        !cartItems.length ? (<tbody><tr><td>Your cart is empty!</td></tr></tbody>) : (
                            <tbody>
                            {cartItems.map((cart) => (
                                <tr key={cart.id}>
                                    <td>{cart.name}</td>
                                    <td><img src={cart.image} alt={cart.name} width={90} height={90}/></td>
                                    <td>
                                        <Button variant="danger" onClick={() => dispatch({type:"SUBTRACT_ITEM_CART",payload: cart.id})}>-</Button>
                                        <Button variant="default">{cart.qty}</Button>
                                        <Button variant='primary' onClick={() => dispatch({type:"ADDITION_ITEM_CART",payload: cart.id})}>+</Button>
                                    </td>
                                    <td align="right">{currency(cart.price)}</td>
                                    <td align="right">{currency(+cart.price * +cart.qty)}</td>
                                </tr>
                            ))}
                                <tr>
                                    <td align="right" colSpan={4}><strong>Subtotal</strong></td>
                                    <td align="right">{cartTotal()}</td>
                                </tr>
                            <tr>
                                <td align="right" colSpan={5}><Button variant='success' onClick={paymentHandler}>Processed Payment</Button></td>
                            </tr>
                            </tbody>
                        )
                    }
                </Table>
            </Col>
        </Row>
    )
}

export default Cart