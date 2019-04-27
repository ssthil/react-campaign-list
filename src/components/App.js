import React, { Component } from "react";
/** data */
import data from "../data/data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compaignList: data
    };
  }

  render() {
    const { compaignList } = this.state;
    return (
      <div>
        <h1>All Campaigns</h1>
        <div>
          <div>Compaign List</div>
          <button>Create new</button>
        </div>
        {compaignList.map((compaign, i) => {
          return (
            <div key={i}>
              <p>{compaign.id}</p>
              <p>
                Comapign {compaign.id} - {compaign.title}
              </p>
              <p>Created at {compaign.timestamp}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
