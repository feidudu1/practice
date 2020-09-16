import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class Nav extends PureComponent {
  componentDidMount() {}

  render() {
    return (
      <ol>
        <li>
          <Link to="/context/demo1">
            【ts hook】js/typescript/react组件注意事项/5
          </Link>
        </li>
        <li>
          <Link to="/context/demo2">
            (【ts hook】js/typescript/react组件注意事项/6.4
            ）获取原生元素props定义
          </Link>
        </li>
        {/* <li>
          <Link to="/forwardRef/demo3">
            【hook,ts】父组件调用子组件的方法（子组件暴露方法给父组件）——
            forwardRef 和 useImperativeHandle ts
          </Link>
        </li> */}
      </ol>
    );
  }
}
