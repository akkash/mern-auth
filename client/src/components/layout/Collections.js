import React, { Component } from "react";
import { Link } from "react-router-dom";

class Collections extends Component {
  render() {
    return (
      <div class="row">
        <div class="col s12 m3">
          <div class="card">
            <div class="card-image medium">
              <span class="new badge blue" data-badge-caption="Items">
                8
              </span>
              <Link to="/usedmachinery">
                <img
                  class="Sirv"
                  data-src="https://omatchar.sirv.com/Images/usedmachinery.jpg"
                  alt=""
                />
                <span class="card-title blue">
                  <b>Used Machinery</b>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div class="col s12 m3">
          <div class="card">
            <div class="card-image medium">
              <span class="new badge blue" data-badge-caption="Items">
                3
              </span>
              <Link to="/warehouse">
                <img
                  class="Sirv"
                  data-src="https://omatchar.sirv.com/Images/warehouse.jpeg"
                  alt=""
                />
                <span class="card-title blue">
                  <b>Warehouses</b>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div class="col s12 m3">
          <div class="card">
            <div class="card-image medium">
              <span class="new badge blue" data-badge-caption="Items">
                2
              </span>
              <Link to="/commericalspace">
                <img
                  class="Sirv"
                  data-src="https://omatchar.sirv.com/Images/commericalspace.jpg"
                  alt=""
                />
                <span class="card-title blue">
                  <b>Commercial Space</b>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div class="col s12 m3">
          <div class="card">
            <div class="card-image medium">
              <span class="new badge blue" data-badge-caption="Items">
                6
              </span>
              <Link to="/agri">
                <img
                  class="Sirv"
                  data-src="https://omatchar.sirv.com/Images/farmland2.jpg"
                  alt=""
                />
                <span class="card-title blue">
                  <b>Agricultural Land & Produce</b>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Collections;
