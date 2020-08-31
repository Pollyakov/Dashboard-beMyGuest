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

class MealsManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          meals: [],
        };
      }
      componentDidMount() {
        axios
          .get("https://tabsur.herokuapp.com/api/system/meals")
          .then((response) => {
            this.setState({
              meals: response.data,
            });
          });
      }

  render() {
    const columns = [
        {
          dataField: "id",
          text: "meal ID",
          sort: true,
        },
        {
          dataField: "name",
          text: "Meal Name",
          sort: true,
        },
        {
          dataField: "created_at",
          text: "Creation Date",
          sort: true,
        },
        // {
        //   dataField: "location",
        //   text: "Location",
        //   sort: true,
        // },
        {
          dataField: "address",
          text: "Address",
          sort: true,
        },
        {
          dataField: "guest_count",
          text: "guest count",
          sort: true,
        },
        {
          dataField: "date",
          text: "Date",
          sort: true,
        },
        {
          dataField: "owner_name",
          text: "Owner Name",
          sort: true,
        },
        {
          dataField: "user_id",
          text: "User Id",
          sort: true,
        }
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
              </div>
                <BootstrapTable
                 keyField="id"
                 data={this.state.meals}
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

export default MealsManagement;
