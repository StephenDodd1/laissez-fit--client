import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Tracking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
      year: new Date().getFullYear(),
    };
  }

  backOneDay = () => {
    const a = this.state;
    if (a.day === 1) {
      if (a.month === 1) {
        this.setState({
          month: 12,
          day: 31,
          year: --this.state.year,
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
  };
  forwardOneDay = () => {
    const a = this.state;
    if (a.month === 12 && a.day === 31) {
      this.setState({
        month: 1,
        day: 1,
        year: ++this.state.year,
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
      console.log(new Date(`${a.month}/${a.day}/${a.year}`));
    } else {
      this.setState({ day: ++this.state.day });
    }
  };
  render() {
    return (
      <div id="tracking-container">
        <Link to="Articles">Articles</Link>
        <div id="date-container">
          <i
            className="fa fa-angle-double-left"
            aria-hidden="true"
            onClick={this.backOneDay}
          ></i>
          <h2 id="date-element">{`${this.state.month}/${this.state.day}/${this.state.year}`}</h2>
          <i
            className="fa fa-angle-double-right"
            aria-hidden="true"
            onClick={this.forwardOneDay}
          ></i>
        </div>
        <div id="tracking-metrics">
          <form id="fitness-container" className="fitness-container">
            <h3>Fitness </h3>
            <label className="metrics-labels" htmlFor="Sleep">
              Sleep:
            </label>
            <input
              name="slp"
              placeholder="Minutes"
              className="fitness-inputs"
            />
            <label className="metrics-labels" htmlFor="men">
              I feel:
            </label>
            <input
              name="men"
              placeholder="Energized, happy"
              className="fitness-inputs"
            />
            <label className="metrics-labels" htmlFor="act">
              Activities:
            </label>
            <input
              name="act"
              placeholder="Jacuzzi, laundry"
              className="fitness-inputs"
            />
            <label className="metrics-labels" htmlFor="stp">
              Steps:
            </label>
            <input
              name="stp"
              placeholder="10000 steps"
              className="fitness-inputs"
            />
            <label className="metrics-labels" id="diary-label" htmlFor="dia">
              Diary:
            </label>
            <textarea
              name="dia"
              placeholder="You can use this space for whatever you'd like"
              className="fitness-inputs"
            />
          </form>
          <form id="nutrition-container" className="fitness-container">
            <h3>Nutrition</h3>
            <label className="metrics-labels" htmlFor="cal">
              Calories:
            </label>
            <input
              name="cal"
              placeholder="2000 kcal"
              className="nutrition-inputs"
            />
            <label className="metrics-labels" htmlFor="fat">
              Fat:
            </label>
            <input
              name="fat"
              placeholder="44g - 77g"
              className="nutrition-inputs"
            />
            <label className="metrics-labels" htmlFor="car">
              Carbohydrates:
            </label>
            <input
              name="car"
              placeholder="225g - 325g"
              className="nutrition-inputs"
            />
            <label className="metrics-labels" htmlFor="fib">
              Fiber:
            </label>
            <input
              name="fib"
              placeholder="25g - 30g"
              className="nutrition-inputs"
            />
            <label className="metrics-labels" htmlFor="pro">
              Protein:
            </label>
            <input name="pro" placeholder="~50g" className="nutrition-inputs" />
          </form>
          <form id="stats-container" className="fitness-container">
            <h3>Vitals</h3>
            <label className="metrics-labels" htmlFor="rhr">
              Resting HR:
            </label>
            <input
              name="rhr"
              placeholder="60 - 100 bpm"
              className="nutrition-inputs"
            />
            <label className="metrics-labels" htmlFor="mhr">
              Maximum HR:
            </label>
            <input
              name="mhr"
              placeholder="120+ bpm"
              className="nutrition-inputs"
            />
            <label className="metrics-labels" htmlFor="bps">
              Systolic BP:
            </label>
            <input name="bps" placeholder="~120" className="nutrition-inputs" />
            <label className="metrics-labels" htmlFor="bpd">
              Diastolic BP:
            </label>
            <input name="bpd" placeholder="~80" className="nutrition-inputs" />
            <label className="metrics-labels" htmlFor="bls">
              Blood Sugar:
            </label>
            <input
              name="bls"
              placeholder="Depends on time"
              className="nutrition-inputs"
            />
            <label className="metrics-labels" htmlFor="lbs">
              Weight:
            </label>
            <input
              name="lbs"
              placeholder="in pounds"
              className="nutrition-inputs"
            />
            <label className="metrics-labels" htmlFor="ins">
              Height:
            </label>
            <input
              name="ins"
              placeholder="in inches"
              className="nutrition-inputs"
            />
          </form>
        </div>
      </div>
    );
  }
}
