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
                {/* <CardHeader>
                  <CardTitle tag="h4">User Management</CardTitle>
                </CardHeader> */}
                <CardBody>

                <div className="button-container">
              <Button
                href="#"
                color="primary"
                block
                className="btn-round"
              >
                Delete
              </Button>
              <Button
                href="#"
                color="primary"
                block
                className="btn-round"
              >
                Rename
              </Button>
              <Button
                href="#"
                color="primary"
                block
                className="btn-round"
              >
                Reset Password
              </Button>
              <Button
                href="#"
                color="primary"
                block
                className="btn-round"
              >
                Send Mail
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
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Table on Plain Background</CardTitle>
                  <p className="card-category">
                    Here is a subtitle for this table
                  </p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th className="text-right">Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                    </tbody>
                  </Table>
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
