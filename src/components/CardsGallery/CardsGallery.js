import React, { Component } from "react";
import InfoCard from "../Cards/InfoCard";
import ToggleCard from "../Cards/ToggleCard.js";
import axios from "axios";
import "./CardsGallery.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Button, Card, CardHeader, CardFooter, CardColumnsPropsBody, CardTitle, Row, Col, Alert} from "reactstrap";

class InformCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],

      // reset: "reset wasn't produced",
    };
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handleResetClick() {
    return (
    <Alert color="primary">
     The server will be reseting.
    </Alert>)


     axios
    .get("https://tabsur.herokuapp.com/api/system/reset")
        .then((response) => {
          alert(String(response.statusText)==="OK"?"The server was reseted": "Error hac occured");
          }) 
  }

  componentDidMount() {
    axios
      .get("https://tabsur.herokuapp.com/api/system/health")
      .then((response) => {
        this.setState({
          info:   response.data.DB,
          server: response.data.server,
          users:  response.data.users,
          onlineUsers: response.data.onlineUsers,
          meals:response.data.activeMeals,
          mealsToday: response.data.mealsCreatedToday,
        });
      });

  }

  render() {
    return (
     
        <Row>
          <ToggleCard name={"DB"} status={this.state.info? "On":"Off"} />
          <ToggleCard name={"Server"} status={this.state.server? "On":"Off"} />
          <InfoCard
            icon={"nc-icon nc-badge text-success"}
            info={this.state.users}
            timewindow={"three month"}
            categInfo={"Registered Users"}
          />
          <InfoCard
            icon={"nc-icon nc-circle-10 text-danger"}
            info={String(this.state.onlineUsers)}
            timewindow={"last hour"}
            categInfo={"Users Online"}
          />
          
          <InfoCard
            icon={"nc-icon nc-basket text-info"}
            info={this.state.meals}
            timewindow={"three month"}
            categInfo={"Active Meals"}
          />
          <InfoCard
            icon={"nc-icon nc-basket text-danger"}
            info={this.state.mealsToday}
            timewindow={"three month"}
            categInfo={"Meals Today"}
          />
          {/* </Row>
          <Row>
          <Col md="4"> */}
          {/* <button class="btn btn-dangery btn-lg btn-fill">Reset Server</button> */}
          <Button 
                onClick={this.handleResetClick}
                color="danger"
                block
                className="btn-round reset-server btn btn-primary btn-lg btn-fill"
                target="_blank"
              >
               Reset Server
              </Button>
              {this.state.open && this.handleResetClick()}
          </Row>
     
    );
  }
}

export default InformCards;
