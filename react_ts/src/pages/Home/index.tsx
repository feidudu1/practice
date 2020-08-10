import React, { PureComponent } from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import Nav from "../Nav";
import Demo1 from "../Demo1";
import styles from "./index.less";

export default class Home extends PureComponent<any, any> {
  componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <Link to="/nav" className={styles.home}>
          Nav
        </Link>
        <Switch>
          <Route path="/nav" component={Nav} />
          <Route path="/demo1" component={Demo1} />
          {/* <Route path="/" component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}
