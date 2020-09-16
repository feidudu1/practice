import React, { PureComponent } from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import Demo1 from "./Demo1";
// import Demo2 from "./Demo2";
// import Demo3 from "./Demo3";
import Nav from "./Nav";
import styles from "./index.less";

export default class Home extends PureComponent {
  componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <Link to="/hoc" className={styles.home}>
          hoc导航
        </Link>
        <Switch>
          <Route path="/hoc/demo1" component={Demo1} />
          {/* <Route path="/hoc/demo2" component={Demo2} />
          <Route path="/hoc/demo3" component={Demo3} /> */}
          <Route path="/hoc" component={Nav} />
        </Switch>
      </BrowserRouter>
    );
  }
}
