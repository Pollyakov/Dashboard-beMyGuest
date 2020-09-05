import React, { Component } from "react";
import axios from "axios";
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
    axios
      .get("https://tabsur.herokuapp.com/api/system/log")
      .then((response) => {
        console.log("Logs: ", response.data);
        this.setState({
          logs: response.data,
        });
      });
  }
  render() {
    return (
      <Card className="card-frame">
        <CardHeader> Data Base Logs</CardHeader>
        <CardBody>
          <CardText>{this.state.logs}</CardText>
          <Button
            color="primary"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Go somewhere
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default LogsCard;
