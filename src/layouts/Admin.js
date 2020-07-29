/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch } from "react-router-dom";

import TopBar from "components/Navbars/TopBar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";

import BASE_URL from "../constants/constants";

let ps;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "black",
      activeColor: "info",
      datasetId: "",
      datasetName: "",
      patientsList: [],
    };
    this.mainPanel = React.createRef();
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    this.fetchData(this.state.datasetId);
  }

  updateState = (values) => {
    this.setState(values);
  };

  fetchData(datasetId) {
  
    if (datasetId) {
      console.log("request made")
      fetch(BASE_URL + "/patients/search", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          datasetId: datasetId,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.setState({ patientsList: data.results.patients });
        });
    }
  }

  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.history.action === "PUSH") {
      this.mainPanel.current.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
    if (prevState.datasetId !== this.state.datasetId) {
      this.fetchData(this.state.datasetId);
    }
  }
  handleActiveClick = (color) => {
    this.setState({ activeColor: color });
  };
  handleBgClick = (color) => {
    this.setState({ backgroundColor: color });
  };
  render() {
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props}
          routes={routes}
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
        />
        <div className="main-panel" ref={this.mainPanel}>
          <TopBar {...this.props} updateState={this.updateState} />
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route path={prop.layout + prop.path} key={key}>
                  <prop.component
                    updateState={this.updateState}
                    datasetId={this.state.datasetId}
                    datasetName={this.state.datasetName}
                    patientsList={this.state.patientsList}
                  />
                </Route>
              );
            })}
          </Switch>
          <Footer fluid />
        </div>
      </div>
    );
  }
}

export default Dashboard;
