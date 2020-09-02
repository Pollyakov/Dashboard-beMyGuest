import React, { Component } from 'react';
import InfoCard from './InfoCard';
import { Container, Table, Col, Button } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import axios from "axios";
import './UserManagement.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
} from "reactstrap";

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
              <InfoCard info={this.state.info} timewindow= {"three month"} categInfo={"DB"}/>
              </Row>
                
            </div>
        );
    }
}

export default InformCards;