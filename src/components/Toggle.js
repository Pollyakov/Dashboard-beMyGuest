import React, { Component } from 'react';
import { Container, Table, Col, Button } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
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

class Toggle extends Component {
    render() {
        let style1 = {
            width: "50px";
        }
        let style2 = {
            width: "100px";
        }
        let style3 = {
            width: "150px"
            // margin-left: "-50px";
        }
        return  (
          
         
<div>
<p class="category">Data Base Info</p>
  {/* <div className="col-md-4"> */}

     <div className="bootstrap-switch wrapper bootstrap-switch-off bootstrap-switch-animate" 
          tabindex="0" style={style2}>
        <div className="bootstrap-switch-container" style={style3}>
                <span className="bootstrap-switch-handle-on bootstrap-switch-default" style={style1}>ON</span>
                <span className="bootstrap-switch-label" style={style1}> </span>
                <span className="bootstrap-switch-handle-off bootstrap-switch-default" style={style1}>OFF</span>
         </div>
    </div> 
  
</div>


        );
    }
}

export default Toggle;