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
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input
} from "reactstrap";

class LogsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

    handleClick() {
       axios
      .delete("https://tabsur.herokuapp.com/api/system/log")
          .then((response) => {
            if (response && response.data) {
              this.setState({ logs: [] });
              // this.setState({ logs: response.data });
          }
            })
    }

  componentDidMount() {
  axios({
    method: "get",
    url: "https://tabsur.herokuapp.com/api/system/log",
    // headers: {
    //     // "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "/json",
    //     Accept: "/json"
    // }
})
.then(response => {
    if (response && response.data) {
        this.setState({ logs: response.data });
    }
})
.catch(error => console.log(error));
}
  render()  {
  const toJson=()=> {
    return this.state.logs && this.state.logs.map((element)=>{
      return <p>{element}</p>
      
    })
  }
          
    return (
      <Card className="card-frame">
        <CardHeader tag="p"><h4> Server Log</h4>
        <form>
              <InputGroup className="no-border">
                <Input placeholder="Search..." />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i className="nc-icon nc-zoom-split" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </form>
        </CardHeader>
      
        <CardBody>
          <CardText>{toJson()}</CardText>
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
