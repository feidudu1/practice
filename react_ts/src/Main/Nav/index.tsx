import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import styles from "./index.less";

export default class Nav extends PureComponent<any, any> {
  componentDidMount() {}

  render() {
    return (
      <ol>
        <li>
          <Link to="/design">设计模式</Link>
        </li>
        <li>
          <Link to="/practice">practice 用于临时性检验</Link>
        </li>
        <li>
          <Link to="/demo1">demo1</Link>
        </li>
        <li>
          <Link to="/forwardRef">【react】React.forwardRef</Link>
        </li>
        <li>
          <Link to="/hoc">HOC</Link>
        </li>
        <li>
          <Link to="/hoc">
            【ts】Render Props: React 的 props(包括 children)并没有限定类型,
            它可以是一个函数. 于是就有了 render props,
            这是和高阶组件一样常见的模式
          </Link>
        </li>
        <li>
          <Link to="/context">【ts】context</Link>
        </li>
      </ol>
    );
  }
}
