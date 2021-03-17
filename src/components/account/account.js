import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

class Account extends Component {
  componentDidMount() {
    const navbarLinks = [
      {
        title: "Purchase History",
        active: false,
      },
      {
        title: "Account Information",
        active: true,
      },
    ];

    this.props.setHeaderLinks([]);
    this.props.setNavbarLinks(navbarLinks);
  }

  renderContent() {
    let jsx;
    if (this.props.navbarLinks) {
      this.props.navbarLinks.forEach((link) => {
        if (link.active) {
          jsx = link.component;
        }
      });
    }
    return jsx;
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

Account = connect(null, actions)(Account);

export default Account;
