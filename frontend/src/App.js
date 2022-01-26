import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Landingpage from "./screens/Landingpage";
import Mynotes from "./screens/Mynotes";
import LoginScreen from "./screens/LoginPage/LoginScreen";
import RegisterScreen from "./screens/RegisterPage/RegisterScreen";
import CreateNote from "./screens/CreateNote";
import SingleNote from "./screens/SingleNote";
import MyProfile from "./screens/MyProfile";
function App() {
  const [search, setsearch] = useState("");
  console.log(search);
  return (
    <>
      <Router>
        <Header setsearch={setsearch} />

        <main>
          <Route path="/" component={Landingpage} exact />
          <Route path="/mynotes" component={Mynotes} exact search={search} />
          <Route path="/login" component={LoginScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />
          <Route path="/note/:id" component={SingleNote} exact />
          <Route path="/createnote" component={CreateNote} exact />
          <Route path="/profile" component={MyProfile} exact />
        </main>
      </Router>
    </>
  );
}

export default App;
