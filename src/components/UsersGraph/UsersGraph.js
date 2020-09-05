import React, { Component } from "react";
import { Line, Pie } from "react-chartjs-2";
import axios from "axios";
import {Card, CardHeader,   
    CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col} from "reactstrap";
import {
//   dashboard24HoursPerformanceChart,
//   dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";

class UsersGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
      }
      componentDidMount() {
        axios
          .get("http://tabsur.herokuapp.com/api/system/stats")
          .then((response) => {
              console.log(response.data);
            this.setState({
              data: response.data,
            });
          });
      }
 
  render(){
   
    let labels=[];
    for (let i=0; i<=this.state.data.length-1; i++){
        labels[i][0]=labels[i];
    } 
    let data=[];
    for (let i=0; i<=this.state.data.length-1; i++){
         data[i][1]=data[i];
         console.log(data[i]);
    } 
    console.log(data);
    dashboardNASDAQChart.data.labels = labels;   
    dashboardNASDAQChart.data.datasets[0].data = data;
    return (
      <Row>
        <Col md="12">
          <Card className="card-chart">
            <CardHeader>
              <CardTitle tag="h5">Users Per Day</CardTitle>
              <p className="card-category">New registered users per day</p>
            </CardHeader>
            <CardBody>
              <Line
                data={dashboardNASDAQChart.data}
                options={dashboardNASDAQChart.options}
                width={700}
                height={100}
              />
            </CardBody>
            <CardFooter>
              <div className="chart-legend">
                <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                <i className="fa fa-circle text-warning" /> BMW 5 Series S{" "}
              </div>
              <hr />
              <div className="card-stats">
                <i className="fa fa-check" /> Data information certified
              </div>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    );
  
}
}
export default UsersGraph;
