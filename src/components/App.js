import React, { Component } from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  Table,
  Badge,
  Card
} from "react-bootstrap";
// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faPause,
  faComment,
  faEdit,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
/** data */
import data from "../data/data.json";

// const icon = <FontAwesomeIcon icon={faList} />

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compaignList: data
    };
  }

  render() {
    const { compaignList } = this.state;
    return (
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <Card.Header>
                <div className="heading">All Campaigns</div>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col>
                      <FontAwesomeIcon icon={faList} className="list-icon" />
                      <div className="list-heading">Compaign List</div>
                      <Button variant="custom" size="sm">
                        Create new
                      </Button>
                    </Col>
                  </Row>
                </Form>
                <Container fluid>
                  <Row>
                    <Col sm={9}>
                      <Table>
                        <tbody>
                          {compaignList.map((compaign, i) => {
                            return (
                              <tr key={i}>
                                <td>
                                  <Badge pill variant="primary">
                                    {compaign.id}
                                  </Badge>
                                </td>
                                <td>
                                  <div className="title">
                                    Comapign {compaign.id} - {compaign.title}
                                  </div>
                                  <div className="timestamp">
                                    Created at {compaign.timestamp}
                                  </div>
                                </td>
                                <td>
                                  <div className="icon-container">
                                    <FontAwesomeIcon icon={faPause} />
                                  </div>
                                  <div className="icon-label">Pause</div>
                                </td>
                                <td>
                                  <div className="icon-container">
                                    <FontAwesomeIcon icon={faComment} />
                                  </div>
                                  <div className="icon-label">Comment</div>
                                </td>
                                <td>
                                  <div className="icon-container">
                                    <FontAwesomeIcon icon={faEdit} />
                                  </div>
                                  <div className="icon-label">Rename</div>
                                </td>
                                <td>
                                  <div className="icon-container">
                                    <FontAwesomeIcon icon={faTrash} />
                                  </div>
                                  <div className="icon-label">Delete</div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </Col>
                    <Col sm={3}>
                      <h4>History</h4>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
