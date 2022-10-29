import React, { Component, useState } from "react";
// import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.cityList = [
      { name: "Goa", country: "India" },
      { name: "Amsterdam", country: "Netherlands" },
      { name: "New York", country: "USA" },
      { name: "Darjeeling", country: "India" },
      { name: "Tokyo", country: "Japan" },
      { name: "Lonavala", country: "India" },
    ];
  }

  render() {
    const tmp = this.cityList.filter((value) => value.country === "India");

    return (
      <div id="main">
        <ol>
          {tmp.map((value, index) => (
            <li key={"location" + ++index}>{value.name}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
