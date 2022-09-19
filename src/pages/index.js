import React,{ useEffect,useState } from "react";
import axios from "axios";
import {Row,Col,Form } from "react-bootstrap";
import Product from "../components/Products";
const Index = () => {
    const [categories,setCategories] = useState([])
    const priceFilterArr = ['0-500','500-1000','1000-2000','2000-5000','5000-10000','10000 >=']
    useEffect(() => {
        getProductCatgory()
    },[])

    async function getProductCatgory() {
        try {
            const {data} = await axios("category")
            if (data.status) {
                setCategories(data.data)
            }
        } catch(err) {
            console.error(err)
        }
    }
    return (
        <>
            <Row className="border mx-3" style={{"margin-top":"70px"}}>
                <Col xs={3} className="border border-top-0 border-bottom-0">
                    <Col >
                        {categories.length ?
                            <div className="my-2">
                                <Col className="p-3">Product Category</Col>
                                {categories.map((category) => (
                                    <Form.Check
                                        key={category._id}
                                        className="ml-3 px-5"
                                        type="checkbox"
                                        id={category._id}
                                        label={category.name}
                                    />
                                ))}
                            </div>
                            : ''
                        }
                    </Col>
                    <hr />
                    <Col>
                        <Col className="p-3">Price</Col>
                        {
                            priceFilterArr.map((price) => (
                                <Form.Check
                                    key={price}
                                    className="ml-3 px-5"
                                    type="checkbox"
                                    id={price}
                                    label={price}
                                />
                            ))
                        }
                    </Col>
                </Col>
                <Col xs={9}>
                    <Product/>
                </Col>
            </Row>
        </>
    )
}

export default Index;