import React, { PureComponent } from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";
// import Demo3 from "./Demo3";
import Nav from "./Nav";
import styles from "./index.less";

export default class Home extends PureComponent {
  componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <div className={styles.home}>
          <Link to="/context" className={styles.home}>
            context导航
          </Link>
        </div>
        <Switch>
          <Route path="/context/demo1" component={Demo1} />
          <Route path="/context/demo2" component={Demo2} />
          {/* <Route path="/context/demo3" component={Demo3} /> */}
          <Route path="/context" component={Nav} />
        </Switch>
      </BrowserRouter>
    );
  }
}
