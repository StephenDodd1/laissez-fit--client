import React, { Component } from "react";
import Tracking from "../Tracking/Tracking";
import Track from "../Track/Track";
import { Link } from "react-router-dom";
import config from "../config";
import { UserContext } from "../context";

export default class Tracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
      year: new Date().getFullYear(),
      tracking: null,
    };
  }
  static contextType = UserContext;

  backOneDay = () => {
    this.setState({ tracking: null });
    const a = this.state;
    if (a.day === 1) {
      if (a.month === 1) {
        this.setState({
          month: 12,
          day: 31,
          year: --a.year,
        });
      } else if (a.month === 3 && a.year % 4 === 0) {
        this.setState({ day: 29, month: 2 });
      } else if (a.month === 3 && a.year % 4 !== 0) {
        this.setState({ day: 28, month: 2 });
      } else if (
        a.month === 5 ||
        a.month === 7 ||
        a.month === 10 ||
        a.month === 12
      ) {
        this.setState({ day: 30, month: --a.month });
      } else if (
        a.month === 2 ||
        a.month === 4 ||
        a.month === 6 ||
        a.month === 8 ||
        a.month === 9 ||
        a.month === 11
      ) {
        this.setState({ day: 31, month: --a.month });
      }
    } else {
      this.setState({
        day: --a.day,
      });
    }
    this.getDay();
  };
  forwardOneDay = () => {
    this.setState({ tracking: null });
    const a = this.state;
    if (a.month === 12 && a.day === 31) {
      this.setState({
        month: 1,
        day: 1,
        year: ++a.year,
      });
    } else if (a.day >= 31) {
      this.setState({ day: 1, month: a.month + 1 });
    } else if (a.month === 2 && a.day + 1 === 29 && a.year % 4 === 0) {
      this.setState({ day: ++a.day });
    } else if (a.month === 2 && a.day + 1 === 29 && a.year % 4 !== 0) {
      this.setState({ day: 1, month: ++a.month });
    } else if (a.month === 2 && a.day + 1 > 29 && a.year % 4 === 0) {
      this.setState({ month: ++a.month });
    } else if (
      (a.day + 1 === 31 && a.month <= 6 && a.month % 2 === 1) ||
      (a.day + 1 === 31 && a.month === 7) ||
      a.month === 8 ||
      (a.day + 1 === 31 && a.month < 13 && a.month > 8 && a.month % 2 === 0)
    ) {
      this.setState({ day: ++a.day });
    } else if (a.day + 1 > 30) {
      this.setState({ day: 1, month: ++a.month });
    } else {
      this.setState({ day: ++a.day });
    }
    this.getDay();
  };

  componentDidMount() {
    const a = this.state;
    const m =
      a.month === 10 || a.month === 11 || a.month === 12
        ? a.month
        : "0" + a.month;
    const URL = `${config.API_URL}/api/tracking/${this.context.user_id}/${a.year}-${m}-${a.day}`;
    fetch(URL, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => this.setState({ tracking: data[0] }));
  }

  getDay = () => {
    const a = this.state;
    const m =
      a.month === 10 || a.month === 11 || a.month === 12
        ? a.month
        : "0" + a.month;
    const URL = `${config.API_URL}/api/tracking/${this.context.user_id}/${a.year}-${m}-${a.day}`;
    fetch(URL, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json()
      .then((data) => {
        if(res.status === 204) {
          return this.setState({ tracking: undefined })
        }
        else return this.setState({ tracking: data[0] })
        }))
      .catch(error => error.error.message)
  };

  render() {
    const t = this.state.tracking;
    const renderTracking =
      this.state.tracking !== null && this.state.tracking !== undefined ? (
        <Tracking
          tracking={this.state.tracking}
          day={this.state.day}
          month={this.state.month}
          year={this.state.year}
        />
      ) : (
        <Track
          day={this.state.day}
          month={this.state.month}
          year={this.state.year}
          getDay ={this.getDay}
        />
      );
    return (
      <div id="date-outer-container">
        <Link className="articles-link" to="Articles">
          Articles
        </Link>
        <div id="date-container">
          <i
            id='back'
            className="fa fa-angle-double-left"
            onClick={this.backOneDay}
          ></i>
          <h2 id="date-element">{`${this.state.month}/${this.state.day}/${this.state.year}`}</h2>
          <i
            id='forward'
            className="fa fa-angle-double-right"
            onClick={this.forwardOneDay}
          ></i>
          <i onClick={this.getDay} id="fa-search" className="fa fa-search"></i>
        </div>
        {renderTracking}
      </div>
    );
  }
}
