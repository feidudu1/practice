import React, { PureComponent } from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import Nav from "@/Main/Nav";
import Practice from "@/pages/Practice";
import Demo1 from "@/pages/Demo1";
import ForwardRef from "@/pages/ForwardRef";
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
          <Route path="/pratice" component={Practice} />
          <Route path="/demo1" component={Demo1} />
          <Route path="/forwardRef" component={ForwardRef} />
          <Route path="/" component={Nav} />
        </Switch>
      </BrowserRouter>
    );
  }
}
