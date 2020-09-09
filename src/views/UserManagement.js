import React, { Component } from "react";
import { Container, Table, Col, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import axios from "axios";
import "./UserManagement.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import cellEditFactory from "react-bootstrap-table2-editor";
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
      selected: []
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
  handleOnSelect = (row, isSelect) => {
    if (isSelect) {
      this.setState(() => ({
        selected: [...this.state.selected, row.id]
      }));
    } else {
      this.setState(() => ({
        selected: this.state.selected.filter(x => x !== row.id)
      }));
    }
    console.log(JSON.stringify(this.state.selected));
  }

   handleResetPasswordClick() {
    console.log ("handleResetPasswordClick");
  //   axios
  //  .put("https://tabsur.herokuapp.com/api/system/resetPassword")
  //      .then((response) => {
  //        alert(String(response.statusText)==="OK"?"The server was reseted": "Error hac occured");
  //        }) 
  }

  handleOnDelete (){
    console.log (`Deleting.`);
    if (this.state.selected === [])
      return;
    const index = this.state.selected[0];
    this.setState(
      {
        users: 
        this.state.users.filter(function(user) { 
          return user.id !== index;}),
        selected: []
      });
  }
  render() {
    
    const columns = [
      {
        dataField: "id",
        text: "user ID",
        sort: true,
        align: "center",
        headerAlign: "center",
      },
      {
        dataField: "name",
        text: "User Name",
        sort: true,
        headerAlign: "center",
        align: "center",
      },
      {
        dataField: "created_at",
        text: "Creation Date",
        sort: true,
        headerAlign: "center",
        align: "center",
      },
      {
        dataField: "email",
        text: "User email",
        sort: true,
        headerAlign: "center",
        align: "center",
      },
    ];
    const selectRow = {
      mode: "checkbox",
      clickToSelect: true,
      onSelect: this.handleOnSelect,
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
                    pagination={paginationFactory()}
                    // cellEdit={cellEditFactory({
                    //   mode: "click",
                    //   beforeSaveCell,
                    // })}
                  />

                  <div className="button-container">
                    <Button
                      href="#"
                      color="primary"
                      className="btn btn-outline-default btn-block delete"
                      onClick={()=>this.handleOnDelete()}
                    >
                      Delete
                    </Button>
                    <Button
                      color="primary"
                      block
                      onClick={this.handleResetPasswordClick}
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