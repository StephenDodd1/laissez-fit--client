import React, { Component } from "react";
import config from "../config";
import { UserContext } from "../context";
export default class Tracking extends Component {
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

  updateTracking = (e) => {
    e.preventDefault();
    const tracking_id = this.state.tracking.id;
    const t = e.target;
    let slp = parseInt(t.slp.value);
    let men = t.men.value;
    let act = t.act.value;
    let stp = parseInt(t.stp.value);
    let dia = t.dia.value;
    let cal = parseInt(t.cal.value);
    let fat = parseInt(t.fat.value);
    let car = parseInt(t.car.value);
    let fib = parseInt(t.fib.value);
    let pro = parseInt(t.pro.value);
    let rhr = parseInt(t.rhr.value);
    let mhr = parseInt(t.mhr.value);
    let bps = parseInt(t.bps.value);
    let bpd = parseInt(t.bpd.value);
    let bls = parseInt(t.bls.value);
    let lbs = parseInt(t.lbs.value);
    let ins = parseInt(t.ins.value);
    const metrics = {
      tracking_id,
      slp,
      men,
      act,
      stp,
      dia,
      cal,
      fat,
      car,
      fib,
      pro,
      rhr,
      mhr,
      bps,
      bpd,
      bls,
      lbs,
      ins,
    };

    const a = this.props;
    const m =
      a.month === 10 || a.month === 11 || a.month === 12
        ? a.month
        : "0" + a.month;
    const URL = `${config.API_URL}/api/tracking/${this.context.user_id}/${a.year}-${m}-${a.day}`;
    fetch(URL, {
      method: "PATCH",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(metrics),
    })
      .then((res) => res.json())
      .then((data) => alert("Your data has been successfully updated"))
      .then((reset) => document.getElementById("tracking-metrics").reset());
  };
  componentDidMount() {
    this.setState({ tracking: this.props.tracking });
  }
  render() {
    return (
      <div id="tracking-container">
        <form onSubmit={this.updateTracking} id="tracking-metrics">
          <div id="tracking-submit-container">
            <button type="submit" id="tracking-submit">
              <i className="fa fa-upload"></i>
            </button>
            <br />
            <p>Click above to upload</p>
          </div>
          <div id="tracking-column-container">
            <div id="fitness-container" className="fitness-container">
              <h3>Fitness </h3>
              <label className="metrics-labels" htmlFor="Sleep">
                Sleep:
              </label>
              <input
                name="slp"
                defaultValue={this.props.tracking.slp}
                placeholder="Minutes"
                className="fitness-inputs"
              />
              <label className="metrics-labels" htmlFor="men">
                I feel:
              </label>
              <input
                name="men"
                defaultValue={this.props.tracking.men}
                placeholder="Energized, happy"
                className="fitness-inputs"
              />
              <label className="metrics-labels" htmlFor="act">
                Activities:
              </label>
              <input
                name="act"
                defaultValue={this.props.tracking.act}
                placeholder="Jacuzzi, laundry"
                className="fitness-inputs"
              />
              <label className="metrics-labels" htmlFor="stp">
                Steps:
              </label>
              <input
                name="stp"
                defaultValue={this.props.tracking.stp}
                placeholder="10000 steps"
                className="fitness-inputs"
              />
              <label className="metrics-labels" id="diary-label" htmlFor="dia">
                Diary:
              </label>
              <textarea
                name="dia"
                defaultValue={this.props.tracking.dia}
                placeholder="You can use this space for whatever you'd like"
                className="fitness-inputs"
              />
            </div>
            <div id="nutrition-container" className="fitness-container">
              <h3>Nutrition</h3>
              <label className="metrics-labels" htmlFor="cal">
                Calories:
              </label>
              <input
                name="cal"
                defaultValue={this.props.tracking.cal}
                placeholder="2000 kcal"
                className="nutrition-inputs"
              />
              <label className="metrics-labels" htmlFor="fat">
                Fat:
              </label>
              <input
                name="fat"
                defaultValue={this.props.tracking.fat}
                placeholder="44g - 77g"
                className="nutrition-inputs"
              />
              <label className="metrics-labels" htmlFor="car">
                Carbohydrates:
              </label>
              <input
                name="car"
                defaultValue={this.props.tracking.car}
                placeholder="225g - 325g"
                className="nutrition-inputs"
              />
              <label className="metrics-labels" htmlFor="fib">
                Fiber:
              </label>
              <input
                name="fib"
                defaultValue={this.props.tracking.fib}
                placeholder="25g - 30g"
                className="nutrition-inputs"
              />
              <label className="metrics-labels" htmlFor="pro">
                Protein:
              </label>
              <input
                name="pro"
                defaultValue={this.props.tracking.pro}
                placeholder="~50g"
                className="nutrition-inputs"
              />
            </div>
            <div id="stats-container" className="fitness-container">
              <h3>Vitals</h3>
              <label className="metrics-labels" htmlFor="rhr">
                Resting HR:
              </label>
              <input
                name="rhr"
                defaultValue={this.props.tracking.rhr}
                placeholder="60 - 100 bpm"
                className="nutrition-inputs"
              />
              <label className="metrics-labels" htmlFor="mhr">
                Maximum HR:
              </label>
              <input
                name="mhr"
                defaultValue={this.props.tracking.mhr}
                placeholder="120+ bpm"
                className="nutrition-inputs"
              />
              <label className="metrics-labels" htmlFor="bps">
                Systolic BP:
              </label>
              <input
                name="bps"
                defaultValue={this.props.tracking.bps}
                placeholder="~120"
                className="nutrition-inputs"
              />
              <label className="metrics-labels" htmlFor="bpd">
                Diastolic BP:
              </label>
              <input
                name="bpd"
                defaultValue={this.props.tracking.bpd}
                placeholder="~80"
                className="nutrition-inputs"
              />
              <label className="metrics-labels" htmlFor="bls">
                Blood Sugar:
              </label>
              <input
                name="bls"
                defaultValue={this.props.tracking.bls}
                placeholder="Depends on time"
                className="nutrition-inputs"
              />
              <label className="metrics-labels" htmlFor="lbs">
                Weight:
              </label>
              <input
                name="lbs"
                defaultValue={this.props.tracking.lbs}
                placeholder="in pounds"
                className="nutrition-inputs"
              />
              <label className="metrics-labels" htmlFor="ins">
                Height:
              </label>
              <input
                name="ins"
                defaultValue={this.props.tracking.ins}
                placeholder="in inches"
                className="nutrition-inputs"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
