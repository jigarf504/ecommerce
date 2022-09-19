import React,{ useEffect,useState } from "react";
import axios from "axios";
import {Row,Col,Card,Button} from "react-bootstrap";

const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(() => {
        fetchProduct()
    },[])
    async function fetchProduct() {
        try {
            const {data} = await axios("products")
            if (data.status) {
                setProducts(data.entities)
            }
        } catch(err) {
            console.error(err)
        }
    }

    const currency = (price) => {
        return price.toLocaleString('en-IN', {
            maximumFractionDigits: 2,
            style: 'currency',
            currency: 'INR'
        });
    }

    return (
        <div style={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"space-evenly",
        }}>
            {!products.length ?
                <h1>No result found</h1>
                :
                products.map((product) => (
                    <Col key={product._id} xs={4} className="p-4" >
                        <Card >
                            <Card.Img variant="top" src={product.image} height={300} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    {currency(product.price)}
                                </Card.Text>
                                <Button variant="primary">Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                ))
            }
        </div>
    )
}
export default Products