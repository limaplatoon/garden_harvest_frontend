import React, {Component} from "react";
import Weather from "../components/Weather";


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log("Dashboard props:", props);
  }

  render() {
    return (
      <div>
        <h2>Current user:</h2>
        <ul>
          {Object.entries(this.props.user).map((e, i) => <li key={i}>{e[0]}: {e[1]}</li>)}
        </ul>
        <Weather zip_code={this.props.user.zip_code}/>
        <a href="#" className="btn" onClick={this.props.handleLogout}>Log out</a>
      </div>
    );
  }
}
