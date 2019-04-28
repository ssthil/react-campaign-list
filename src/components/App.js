import React, { Component } from "react";
import { Container, Button, Row, Col, Form, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
/** data */
import data from "../data/data.json";

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
      <Container>
        <Row>
          <h1>All Campaigns</h1>
        </Row>
        <Form>
          <Row>
            <Col>Compaign List</Col>
            <Button>Create new</Button>
          </Row>
        </Form>
        <Row>
          <Col sm={9}>
            <Table>
              <tbody>
                {compaignList.map((compaign, i) => {
                  return (
                    <tr key={i}>
                      <td>{compaign.id}</td>
                      <td>
                        <div>Comapign {compaign.id} - {compaign.title}</div>
                        <div>Created at {compaign.timestamp}</div>
                      </td>
                      <td>pause</td>
                      <td>comment</td>
                      <td>rename</td>
                      <td>delete</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col sm={3}>
            <h4>right</h4>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
