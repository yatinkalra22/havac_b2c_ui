import React, { Component } from "react";
import { havacLogo } from "../../assets/index";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Constants from "../../Constants";
import Teachers from "./Teachers";
import Students from "./Students";
import Help from "./Help";

export default class Dashboard extends Component {
  state = {
    selectValue: Constants.options[0].id,
  };
  handleChange = (value) => {
    this.setState({ selectValue: value });
  };

  renderComponent = () => {
    switch (this.state.selectValue) {
      case Constants.options[1].id:
        return <Teachers />;
      case Constants.options[2].id:
        return <Students />;
      case Constants.options[3].id:
        return <Help />;
      default:
        return <div>Dashboard</div>;
    }
  };

  render() {
    return (
      <div className="dashboard-container">
        <header className="dashboard-header">
          <img alt="logo" src={havacLogo} id="havac-logo" />
        </header>
        <div className="row">
          <Sidebar
            selectedValue={this.state.selectValue}
            handleChange={this.handleChange}
          />
          {this.renderComponent()}
        </div>
      </div>
    );
  }
}
