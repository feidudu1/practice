import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import styles from "./index.less";

export default class Nav extends PureComponent<any, any> {
  componentDidMount() {}

  render() {
    return (
      <ol>
        <li>
          <Link to="/">Practice 用于临时性检验</Link>
        </li>
        <li>
          <Link to="/demo1">demo1</Link>
        </li>
      </ol>
    );
  }
}
