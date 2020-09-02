import React, { Component } from "react";

class InfoCard extends Component {
    constructor(props) {
        super(props);
        this.info=info;
        this.timewindow=timewindow;
        this.categInfo=categInfo;
}
  render() {
    return (
      <div>
        <Col lg="2" md="6" sm="6">
          <Card className="card-stats">
            <CardBody>
              <Row>
                <Col md="4" xs="5">
                  <div className="icon-big text-center icon-warning">
                    <i className="nc-icon nc-badge text-success" />
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
      </div>
    );
  }
}

export default InfoCard;
