import React, { PureComponent } from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import Nav from "@/Main/Nav";
import Practice from "@/pages/Practice";
import Demo1 from "@/pages/Demo1";
import ForwardRef from "@/pages/ForwardRef";
import Hoc from "@/pages/Hoc";
import RenderProps from "@/pages/RenderProps";
import Context from "@/pages/Context";
import Design from "@/pages/Design";
import styles from "./index.less";

export default class Home extends PureComponent<any, any> {
  componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <div className={styles.home}>
          <Link to="/home">Home</Link>
        </div>
        <Switch>
          <Route path="/home" component={Nav} />
          <Route path="/design" component={Design} />
          <Route path="/pratice" component={Practice} />
          <Route path="/demo1" component={Demo1} />
          <Route path="/forwardRef" component={ForwardRef} />
          <Route path="/hoc" component={Hoc} />
          <Route path="/renderprops" component={RenderProps} />
          <Route path="/context" component={Context} />
          <Route path="/" component={Nav} />
        </Switch>
      </BrowserRouter>
    );
  }
}
