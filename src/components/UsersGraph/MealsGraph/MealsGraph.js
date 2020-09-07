import React, { Component } from "react";
import { Line} from "react-chartjs-2";
import axios from "axios";
import {
  Card, CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
const chartColor = '#FFFFFF';

class MealsGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    axios
      .get("http://tabsur.herokuapp.com/api/system/statsMeals/7")
      .then((response) => {
        this.setState({
          data: response.data,
        });
      });
  } 

  render() {
    const options = {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        // tooltips: {
        //     bodySpacing: 4,
        //     mode:"nearest",
        //     intersect: 0,
        //     position:"nearest",
        //     xPadding:10,
        //     yPadding:10,
        //     caretPadding:10
        // },
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
    const getNewMeals = () => {
      if (this.state.data) {
        return this.state.data.map((element) => {
          return parseInt(element.mealscreated)
        })
      } else {
        return [];
      }
    }
    const getActiveMeals = () => {
      if (this.state.data) {
        return this.state.data.map((element) => {
          return element.activemeals
        })
      }
      else {
        return [];
      }
    }

    let labels = [];
    let newMeals = [];
    let activeMeals = [];
    if (this.state.data) {
       labels = getLabels();
       newMeals = getNewMeals();
       activeMeals= getActiveMeals();
    }

    const data = {
      labels: labels,      
      datasets: [
        {
          data: newMeals,
          fill: true,
          borderColor: "#6bd098",
          backgroundColor: "#6bd098",
        //   pointBorderColor: "#fbc658",
        //   pointRadius: 4,
        //   pointHoverRadius: 4,
        //   pointBorderWidth: 8,
        },
        {
          data: activeMeals,
          fill: false,
          borderColor: "#f17e5d",
          backgroundColor: "transparent",
        //   pointBorderColor: "#51CACF",
        //   pointRadius: 4,
        //   pointHoverRadius: 4,
        //   pointBorderWidth: 8,
        },
      ],
    };
    return (
      <Row>
        <Col md="12">
          <Card className="card-chart">
            <CardHeader>
              <CardTitle tag="h5">Meals Per Week</CardTitle>
              <p className="card-category">New Meals and Active Meals Per Week</p>
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
                <i className="fa fa-circle text-success" /> New Meals {" "}
                <i className="fa fa-circle text-danger" /> Active Meals  {" "}
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
export default MealsGraph;
