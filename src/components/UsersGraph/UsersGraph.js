import React, { Component } from "react";
import { Line, Pie } from "react-chartjs-2";
import axios from "axios";
import {
  Card, CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import { getAllJSDocTags } from "typescript";
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
      .get("https://tabsur.herokuapp.com/api/system/statsUsers/7")
      .then((response) => {
        this.setState({
          data: response.data,
        });
      });
  }

  render() {
    //     return {
    //         labels:  getLabels(),
    //         datasets: [
    //           {
    //             data: getNewUsers(),
    //             fill: false,
    //             borderColor: "#51CACF",
    //             backgroundColor: "transparent",
    //             pointBorderColor: "#51CACF",
    //             pointRadius: 4,
    //             pointHoverRadius: 4,
    //             pointBorderWidth: 8,
    //           },
    //           {
    //             data: getActiveUsers(),
    //             fill: false,
    //             borderColor: "#fbc658",
    //             backgroundColor: "transparent",
    //             pointBorderColor: "#fbc658",
    //             pointRadius: 4,
    //             pointHoverRadius: 4,
    //             pointBorderWidth: 8,
    //           },
    //         ]
    //     }
    // };


    const options = {
        maintainAspectRatio: false,
        legend: {
            display: false,
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
                stepsize: 1,
                display:1,
                ticks: {
                    display: true,
                    stepSize: 1,
                },
                gridLines: {
                    zeroLineColor: "#ef8157",
                    drawTicks: true,
                    display:true,
                    drawBorder: true, 
                    stepsize: 0.5,
                }
            }],
            xAxes: [
              {
                // type: 'time',
                time: {stepSize:1},
                distribution: 'linear',
                display:1,
                ticks: {
                    display: true,
                    reverse: true,
                    sourse: 'labels',
                },
                gridLines: {
                    zeroLineColor: "#ef8157",
                    drawTicks: true,
                    display: true,
                    drawBorder: true,
                }
            }
          ]
        },
        layout:{
            padding:{left:0,right:0,top:15,bottom:15}
        }
    };
    const getLabels = () => {
      if (this.state.data) {
        return this.state.data.map((element) => {
          return String(element.days_before)
        })
      } else {
        return [];
      }
    }
    const getNewUsers = () => {
      if (this.state.data) {
        return this.state.data.map((element) => {
          return parseInt(element.userscreated)
        })
      } else {
        return [];
      }
    }
    const getActiveUsers = () => {
      if (this.state.data) {
        return this.state.data.map((element) => {
          return element.activeusers
        })
      }
      else {
        return [];
      }
    }

    let labels = [];
    let newUsers = [];
    let activeUsers = [];
    if (this.state.data) {
       labels = getLabels();
       newUsers = getNewUsers();
       activeUsers = getActiveUsers();
    }

    const data = {
      labels: labels,      
      datasets: [
        {
          data: newUsers,
          fill: false,
          borderColor: "#fbc658",
          backgroundColor: "transparent",
          pointBorderColor: "#fbc658",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
        },


        {
          data: activeUsers,
          fill: false,
          borderColor: "#51CACF",
          backgroundColor: "transparent",
          pointBorderColor: "#51CACF",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
        },
      ],
    };

    // const options = {
    //   legend: {
    //     display: false,
    //     position: "top",
    //   },
    // };

    return (
      <Row>
        <Col md="12">
          <Card className="card-chart">
            <CardHeader>
              <CardTitle tag="h5">Users Per Week</CardTitle>
              <p className="card-category">New Users and Active Users Per Week</p>
            </CardHeader>
            <CardBody>
              {this.state.data ? 
              <Line
                data={data}
                options={options}
                width={700}
                height={200}
              /> : null}

            </CardBody>
            <CardFooter>
              <div className="chart-legend">
                <i className="fa fa-circle text-warning" /> New Users {" "}
                <i className="fa fa-circle text-info" /> Users Online  {" "}
              </div>
              <hr />
              <div className="card-stats">
                <i className="fa fa-check" /> Data information certified
              </div>
            </CardFooter>
          </Card>
        </Col>
      </Row >
    );

  }
}
export default UsersGraph;
