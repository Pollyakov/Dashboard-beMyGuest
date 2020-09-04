import React, { Component } from "react";
import InfoCard from "../Cards/InfoCard";
import ToggleCard from "../Cards/ToggleCard.js";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
// import { Container, Table, Col, Button } from "react-bootstrap";
import axios from "axios";
import "./CardsGallery.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Button,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// import Button from 'elements/CustomButton/CustomButton.js';

class InformCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://tabsur.herokuapp.com/api/system/health")
      .then((response) => {
        this.setState({
          info: response.data.DB,
        });
      });
  }

  render() {
    return (
      <div className="content">
        <Row>
          
          <ToggleCard name={"DB"} status={"ON"} />
          <ToggleCard name={"DB"} status={"ON"} />
          <InfoCard
            icon={"nc-icon nc-badge text-success"}
            info={this.state.info.toString()}
            timewindow={"three month"}
            categInfo={"Users"}
          />
          <InfoCard
            info={this.state.info.toString()}
            timewindow={"three month"}
            categInfo={"Users"}
          />
          
          <InfoCard
            info={this.state.info.toString()}
            timewindow={"three month"}
            categInfo={"Users"}
          />
          <InfoCard
            info={this.state.info.toString()}
            timewindow={"three month"}
            categInfo={"Users"}
          />
          </Row>

          <Row>
          <Col md="4">
          {/* <button class="btn btn-dangery btn-lg btn-fill">Reset Server</button> */}
          <Button
                
                color="danger"
                block
                className="btn-round"
                target="_blank"
              >
               Reset Server
              </Button>
          </Col>

          </Row>

         
                
          {/* <Row>
          <Col lg="2" md="6" sm="6">
          <Card className="card-stats">
            <CardBody>
              <Row>
             
                <button class="btn btn-primary btn-lg btn-fill">Reset Server</button>
                
               
              </Row>
            </CardBody>
            <CardFooter>
          
            </CardFooter>
          </Card>
        </Col>
      
        </Row> */}
      </div>
    );
  }
}

export default InformCards;
