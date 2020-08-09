import React from "react";


export default function Dashboard(props) {
  console.log("Dashboard props:", props);
  return (
    <div>
      <h3>Current user:</h3>
      <ul>
        {Object.entries(props.user).map((e, i) => <li key={i}>{e[0]}: {e[1]}</li>)}
      </ul>
    </div>
  );
}