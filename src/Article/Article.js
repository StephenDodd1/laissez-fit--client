import React, { Component } from "react";
import Comments from '../Comments/Comments'
export default class Article extends Component {
  render() {
    return (
      <div>
        <h2>Title</h2>
        <p>
          &emsp;Lorem ipsum dolorem ipso factotem deterum solarum rabus egyphus
          hiatus gigam todom lon ipsum dum ap tetum zoloum franto polanti do
          diem cale ratui zulo tupil zolum alum ad litem jelup sofrius.
          <br />
          <br />
          &emsp;Ze di du lum tic zum o latildo zateral dorelum diuz neiu.
          Zoologo animus dizgo hicho feoa quorum du dolo domo qua. Zi hollalo
          gelato frio gi dan ti kep yan dom deol volcu xi rindu molo polo no
          zolo ni nolo golo. <br />
          <br />
          &emsp;Vi fi zo dum felind odoum zolorme toucam.
        </p>
        <Comments/>
      </div>
    );
  }
}
