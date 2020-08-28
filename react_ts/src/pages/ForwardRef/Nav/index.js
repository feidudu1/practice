import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class Nav extends PureComponent {
  componentDidMount() {}

  render() {
    return (
      <ol>
        <li>
          <Link to="/forwardRef/demo1">转发 refs 到 DOM 组件</Link>
        </li>
        <li>
          <Link to="/forwardRef/demo2">
            HOC 的 ref 是无法通过 props
            进行传递的，因此无法直接获取被包裹组件（WrappedComponent），需要进行中转
          </Link>
        </li>
        <li>
          <Link to="/forwardRef/demo3">
            forwardRef 和 useImperativeHandle ts
          </Link>
        </li>
      </ol>
    );
  }
}
