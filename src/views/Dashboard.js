import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";
import CardsGallery from "../components/CardsGallery/CardsGallery";
  import './dashboard.css';
import UsersGraph from "components/UsersGraph/UsersGraph";
import MealsManagement from "./MealsManagement";
import UserManagement from "./UserManagement";
import MealsGraph from "components/UsersGraph/MealsGraph/MealsGraph";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row className="firstrow">
              <CardsGallery/>
          </Row>

          <Row>
            <Col md="6">
                <UserManagement/>
            </Col>
            <Col md="6">
               <MealsGraph/>
               <UsersGraph/>
            </Col>
          </Row>
          
        </div>
      </>
    );
  }
}

export default Dashboard;
