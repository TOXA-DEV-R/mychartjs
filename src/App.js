import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./componets/index";
import Styles from "./App.module.css";
import { fetchData } from "./api/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  async componentDidMount() {
    const fetChedData = await fetchData();
    this.setState({ data: fetChedData });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={Styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}
export default App;
