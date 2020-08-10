import React, {Component} from "react";


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log("Dashboard props:", props);
  }

  render() {
    return (
      <div>
        <h3>Current user:</h3>
        <ul>
          {Object.entries(this.props.user).map((e, i) => <li key={i}>{e[0]}: {e[1]}</li>)}
        </ul>
        <a href="#" className="btn" onClick={this.props.handleLogout}>Log out</a>
      </div>
    );
  }
}
