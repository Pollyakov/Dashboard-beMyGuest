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
    this.handleClick = this.handleClick.bind(this);
  }

    handleClick() {
       axios
      .delete("https://tabsur.herokuapp.com/api/system/log")
          .then((response) => {
            if (response && response.data) {
              this.setState({ logs: response.data });
          }
            })
    }

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
        <hr/>
        <CardBody>
          <CardText>{this.state.logs}</CardText>
          <hr/>
          <Button 
          className="btn-round btn btn-info btn-md btn-fill"
            color="info"
            onClick={this.handleClick}
          >
            Clear Logs
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default LogsCard;
