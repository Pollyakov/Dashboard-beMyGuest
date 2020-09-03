import React, { Component } from 'react';
import InfoCard from '../Cards/InfoCard';
import ToggleCard from '../Cards/ToggleCard.js';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
// import { Container, Table, Col, Button } from "react-bootstrap";
import axios from "axios";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {Card, CardHeader,   CardFooter,   CardBody, CardTitle, Row, Col} from "reactstrap";


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
              <Row className="firstrow">
              <ToggleCard name={"DB"} status={"ON"} />
              <InfoCard info={this.state.info.toString()} timewindow= {"three month"} categInfo={"Users"}/>
              </Row>
            </div>
            
        );
    }
}

export default InformCards;