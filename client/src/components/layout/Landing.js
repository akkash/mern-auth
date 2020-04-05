import React, { Component } from "react";

import Collections from "./Collections";
import { Collection } from "mongoose";
import SearchBar from "../SearchBar";

const style = {
  display: "block",
  justifyContent: "center",
  height: 40,
  textAlign: "center",
};

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "35vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4 class="grey-text darken-4">
              Used Machinery, Warehouses, Commercial Space, Agricultural Land &
              Produce <b>Marketplace</b>.
            </h4>
            <div style={style} class="col s12 center-align">
              <SearchBar placeholder="What are you looking for ?" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
