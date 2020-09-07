import React, { Component } from "react";
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
//   Table,
  Row,
//   Col,
} from "reactstrap";

class UserManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [],
        };
      }
      componentDidMount() {
        axios
          .get("https://tabsur.herokuapp.com/api/system/users")
          .then((response) => {
            this.setState({
              users: response.data,
            });
          });
      }

  render() {
    const columns = [
        {
          dataField: "id",
          text: "user ID",
          sort: true,
        },
        {
          dataField: "name",
          text: "User Name",
          sort: true,
        },
        {
          dataField: "created_at",
          text: "Creation Date",
          sort: true,
        },
        {
          dataField: "email",
          text: "User email",
          sort: true,
        },
      ];
      const selectRow = {
        mode: "checkbox",
        clickToSelect: true,
      };
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                <div className="button-container">
              <Button
                href="#"
                color="primary"
               
                className="btn btn-outline-default btn-block delete"
              >
                Delete
              </Button>
              <Button
                href="#"
                color="primary"
                block
                className="btn btn-outline-default btn-block"
              > 
            
                Reset Password
              </Button>
              <Button
                href="#"
                color="primary"
                block
                className="btn btn-outline-default btn-block"
              >
                Rename
              </Button>
              <Button
                href="#"
                color="primary"
                block
                className="btn btn-outline-default btn-block"
              >
                Send Mail
                {/* <i className="nc-email-85" /> */}
              </Button>
              </div>
              
                <BootstrapTable
                 keyField="id"
                 data={this.state.users}
                 columns={columns}
                selectRow={selectRow}
                 />
                
                </CardBody>
              </Card>
            </Col>
            
          </Row>
        </div>
      </>
    );
  }
}

export default UserManagement;
