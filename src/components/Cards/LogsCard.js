import React, { Component } from "react";
import axios from "axios";
import "./LogsCard.css";
import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardColumnsPropsBody,
  CardTitle,
  CardText,
  CardBody,
} from "reactstrap";

class LogsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
    };
    // this.handleResetClick = this.handleResetClick.bind(this);
  }

  //   handleResetClick() {
  //     alert("Please approve the reset")
  //      axios
  //     .get("https://tabsur.herokuapp.com/api/system/reset")
  //         .then((response) => {
  //           alert(String(response.statusText)==="OK"?"The server was reseted": "Eroor hac occured");
  //           })
  //   }

  componentDidMount() {

  axios({
    method: "get",
    url: "https://tabsur.herokuapp.com/api/system/log",
    headers: {
        // "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json"
    }
})
.then(response => {
    if (response && response.data) {
        this.setState({ logs: response.data });
    }
})
.catch(error => console.log(error));
}
  render() {
    return (
      <Card className="card-frame">
        <CardHeader><h4> Data Base Logs</h4></CardHeader>
        <CardBody>
          <CardText>{this.state.logs}</CardText>
          <Button
            color="info"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Clear Logs
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default LogsCard;
