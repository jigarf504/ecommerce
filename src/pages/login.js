import {Row,Col,Card,Form,Button } from "react-bootstrap";

const Login = () => {
    return (
        <Row>
            <Col style={{"marginTop":"70px"}}>
                <Card>
                    <Card.Header>
                        Login
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>

            </Col>
        </Row>
    )
}

export default Login