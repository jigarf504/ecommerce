import React,{ useEffect,useState } from "react";
import axios from "axios";
import { useSearchParams } from 'react-router-dom';
import {Row,Col,Form } from "react-bootstrap";
import Product from "../components/Products";
const Index = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const [categories,setCategories] = useState([])
    const [price,setPrice] = useState('')
    const [category,setCategory] = useState('')
    const priceFilterArr = ['0-500','500-1000','1000-2000','2000-5000','5000-10000','10000 >=']
    useEffect(() => {
        setPrice(searchParams.get("price"))
        setCategory(searchParams.get("category"))
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

    function setQueryParam(key,value) {
        if (key === 'price') {
            let categoryValue = searchParams.get('category')
            setSearchParams({price:value,category:categoryValue})
            setPrice(value)
        } else if (key === 'category') {
            let priceValue = searchParams.get('price')
            setSearchParams({price:priceValue,category:value})
            setCategory(value)
        }
    }

    return (
        <>
            <Row className="border mx-3" style={{"marginTop":"70px"}}>
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
                                        name="category"
                                        id={category._id}
                                        label={category.name}
                                        checked={searchParams.get("category") == category.name ? true : false}
                                        onClick={(e) => setQueryParam('category',e.target.checked ? category.name : '')
                                        }
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
                                    checked={searchParams.get("price") == price ? true : false}
                                    onClick={(e) => setQueryParam('price',e.target.checked? price: '')}
                                />
                            ))
                        }
                    </Col>
                </Col>
                <Col xs={9}>
                    <Product category={category} price={price}/>
                </Col>
            </Row>
        </>
    )
}

export default Index;