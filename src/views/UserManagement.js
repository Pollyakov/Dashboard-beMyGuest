import React, { Component } from "react";
import { Container, Table, Col, Button } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
// import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from "axios";
import "./UserManagement.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
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
    // handleResetPasswordClick() {
    //    axios
    //   .put("https://tabsur.herokuapp.com/api/system/resetPassword")
    //       .then((response) => {
    //         alert(String(response.statusText)==="OK"?"The server was reseted": "Error hac occured");
    //         }) 
    // }
    const columns = [
      {
        dataField: "id",
        text: "user ID",
        sort: true,
        align: 'center',
        headerAlign: 'center',
      },
      {
        dataField: "name",
        text: "User Name",
        sort: true,
        headerAlign: 'center',
        align: 'center',
      },
      {
        dataField: "created_at",
        text: "Creation Date",
        sort: true,
        headerAlign: 'center',
        align: 'center',
      },
      {
        dataField: "email",
        text: "User email",
        sort: true,
        headerAlign: 'center',
        align: 'center',
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

                  
                   <BootstrapTable
                    keyField="id"
                    data={this.state.users}
                    columns={columns}
                    selectRow={selectRow}
                    // pagination={paginationFactory()}
                  />


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
