import React, { Component } from "react";
import {Card, CardHeader,   CardFooter,   CardBody, CardTitle, Row, Col} from "reactstrap";
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch.js';

class ToggleCard extends Component {
    constructor(props) {
        super(props);
}
  render() {
    return (
        <Col  lg="2" md="6" sm="6">
              <Card  className="card-stats">
                <CardBody> 
                  <Row>
                      <Col md="4" xs="5">
                      {/* <div className="icon-big text-center icon-warning"> */}
                      <ToggleSwitch/>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">{this.props.name}</p>
                        <CardTitle tag="p">{this.props.status}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Update Now
                  </div>
                </CardFooter>
              </Card>
            </Col>
      
    );
  }
}

export default ToggleCard;
