import React, { Component } from "react";

export default class Alert extends Component {
  render() {
    return (
      this.props.alert != null && (
        <div className={`alert alert-${this.props.alert.type}`}>
          {this.props.alert.message}
        </div>
      )
    );
  }
}
