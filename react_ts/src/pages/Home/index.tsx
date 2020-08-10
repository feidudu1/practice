import React, { PureComponent } from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import Nav from "../Nav";
import Pratice from "../Pratice";
import Demo1 from "../Demo1";
import styles from "./index.less";

export default class Home extends PureComponent<any, any> {
  componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <Link to="/home" className={styles.home}>
          Home
        </Link>
        <Switch>
          <Route path="/home" component={Nav} />
          <Route path="/pratice" component={Pratice} />
          <Route path="/demo1" component={Demo1} />
          <Route path="/" component={Nav} />
        </Switch>
      </BrowserRouter>
    );
  }
}
