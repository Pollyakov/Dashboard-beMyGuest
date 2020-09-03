import React, { Component } from "react";
import {Card, CardHeader,   CardFooter,   CardBody, CardTitle, Row, Col} from "reactstrap";

class InfoCard extends Component {
    constructor(props) {
        super(props);
}

  render()
const commonProps = {myProp1: 'prop1',myProp2: 'prop2'};
  {
    return (
        <Col lg="2" md="6" sm="6">
          <Card className="card-stats">
            <CardBody>
              <Row>
                <Col md="4" xs="5">
                  <div className="icon-big text-center icon-warning">
                    {/* <i className="nc-icon nc-badge text-success" /> */}
                    <i className= {this.props.iconCateg} {this.props.iconKind } {this.props.iconColor}/>
                    
                  </div>
                </Col>
                <Col md="8" xs="7">
                  <div className="numbers">
                    <p className="card-category">{this.props.categInfo}</p>
                    <CardTitle tag="p">{this.props.info}</CardTitle>
                    <p />
                  </div>
                </Col>
              </Row>
            </CardBody>
            <CardFooter>
              <hr />
              <div className="stats">
                <i className="far fa-calendar" /> {this.props.timewindow}
              </div>
            </CardFooter>
          </Card>
        </Col>
      
    );
  }
}

export default InfoCard;
