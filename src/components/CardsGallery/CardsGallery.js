import React, { Component } from 'react';
import InfoCard from '../Cards/InfoCard';
import ToggleCard from '../Cards/ToggleCard.js';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
// import { Container, Table, Col, Button } from "react-bootstrap";
import axios from "axios";
import './CardsGallery.css';
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
              <Row>
               {/* <Col className="appInfo" md="4"> */}
               <InfoCard info={this.state.info.toString()} timewindow= {"three month"} categInfo={"Users"}/>
               <ToggleCard name={"DB"} status={"ON"} />
             
              <InfoCard info={this.state.info.toString()} timewindow= {"three month"} categInfo={"Users"}/>
              <ToggleCard name={"DB"} status={"ON"} />
              <InfoCard info={this.state.info.toString()} timewindow= {"three month"} categInfo={"Users"}/>
            
              {/* <button class="btn btn-primary btn-lg btn-fill">Reset Server</button> */}
              </Row>



            </div>
            
        );
    }
}

export default InformCards;

