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
const chartColor = '#FFFFFF';

class UsersGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: null,
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
    const data = (canvas) => {
      const getLabels=()=> {
        return this.state.data && this.state.data.userStats.map((element)=>{
          return String(element.days_before)
        })
     
      }
      var ctx = canvas.getContext("2d");
  
      var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
      gradientStroke.addColorStop(0, '#80b6f4');
      gradientStroke.addColorStop(1, chartColor);
  
      var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
      gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
      gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
      return {
        
          labels: getLabels(),
          datasets: [{
              label: "Active Users",
              borderColor: "#f96332",
              pointBorderColor: "#FFF",
              pointBackgroundColor: "#f96332",
              pointBorderWidth: 2,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 1,
              pointRadius: 4,
              fill: true,
              backgroundColor: gradientFill,
              borderWidth: 2,
              data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
          }]
      }
  };
  const options = {
      maintainAspectRatio: false,
      legend: {
          display: false
      },
      tooltips: {
          bodySpacing: 4,
          mode:"nearest",
          intersect: 0,
          position:"nearest",
          xPadding:10,
          yPadding:10,
          caretPadding:10
      },
      responsive: 1,
      scales: {
          yAxes: [{
              display:0,
              ticks: {
                  display: false
              },
              gridLines: {
                  zeroLineColor: "transparent",
                  drawTicks: false,
                  display: false,
                  drawBorder: false
              }
          }],
          xAxes: [{
              display:0,
              ticks: {
                  display: false
              },
              gridLines: {
                  zeroLineColor: "transparent",
                  drawTicks: false,
                  display: false,
                  drawBorder: false
              }
          }]
      },
      layout:{
          padding:{left:0,right:0,top:15,bottom:15}
      }
  };
    let labels=[];
    // for (let i=0; i<=this.state.data.length-1; i++){
    //     this.state.data.userStats.days_before
    //     labels[i][0]=labels[i];
    //     console.log(labels[i]);
    // } 
    

    // let data=[];
    // for (let i=0; i<=this.state.data.length-1; i++){
    //      data[i][1]=data[i];
    //      console.log(data[i]);
    // } 
    // console.log(data);
    // dashboardNASDAQChart.data.labels = labels;   
    // dashboardNASDAQChart.data.datasets[0].data = data;
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
                data={data}
                options={options}
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
