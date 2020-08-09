import React, {useState} from "react";
import './App.css';
import Routes from "./components/Routes";
import axiosInstance from "./api/axiosAPI";

export default function App() {
  const [user, setUser] = useState({});

  const handleLogin = user => setUser(prevState => user);

  const handleLogout = () =>
    axiosInstance.post('/blacklist/', {
      "refresh_token": localStorage.getItem("refresh_token")
    }).then(response => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      axiosInstance.defaults.headers['Authorization'] = null;
      console.log('logout called 1')
      setUser({});
      console.log('cleared user')
      return response;
    }).catch(error => {
      console.log(error);
    });

  return (
    <div className="App container">
      <Routes handleLogin={handleLogin} handleLogout={handleLogout} user={user}/>
      {/*<Switch>*/}
      {/*  <Route exact path="/" component={Home}/>*/}
      {/*  <Route exact path="/CreateAccount" component={CreateAccount}/>*/}
      {/*  <Route exact path="/Dashboard" component={Dashboard}/>*/}
      {/*  <Route exact path="/Hello" component={Hello}/>*/}
      {/*</Switch>*/}
    </div>
  );
}
