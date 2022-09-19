import { Row, Col, Card, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
const Profile = () => {
  const user = useSelector((state) => state.user);
  return (
    <Row>
      <Col style={{ marginTop: "70px" }}>
        <Card className="text-center">
          <Card.Header>User Profile</Card.Header>
          <Card.Body>
            <Table width="50%">
              <tbody>
                <tr>
                  <th align="left">Name</th>
                  <td align="left">{user.name}</td>
                </tr>
                <tr>
                  <th align="left">Email</th>
                  <td align="left">{user.email}</td>
                </tr>
                <tr>
                  <th align="left">Gender</th>
                  <td align="left">{user.gender}</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
export default Profile;
