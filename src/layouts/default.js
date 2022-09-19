import {Outlet} from "react-router-dom"
import Header  from "../components/Header"
import {Container,Row,Col} from "react-bootstrap";

const defaultLayout = () => {
    return (
        <Container>
            <Header/>
            <Row>
                <Col>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    )
}

export default defaultLayout;