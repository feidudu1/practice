import React from "react";

// // ========================================================hoc中ref存在的问题

const HOCProps = (WrappedComponent) => {
  class HOCComponent extends React.Component {
    constructor(props) {
      super(props);
      this.setWrappedInstance = this.setWrappedInstance.bind(this);
    }

    getWrappedInstance() {
      return this.wrappedInstance;
    }

    // 实现 ref 的访问
    setWrappedInstance(ref) {
      this.wrappedInstance = ref;
    }

    render() {
      console.log("props", this.props); // props没有ref
      return <WrappedComponent ref={this.setWrappedInstance} {...this.props} />;
    }
  }

  return HOCComponent;
};

const Wrap = () => <h2>hello world</h2>;
const App = HOCProps(Wrap);

export default () => (
  <App
    ref={(dom) => {
      // 只能获取到 HOCComponent
      console.log(111, dom); // 打印出来的dom并没有getWrappedInstance的方法
      // 通过中转后可以获取到 WrappedComponent  新版实际现在是拿不到的
      console.log(222, dom.getWrappedInstance());
    }}
  />
);

// // ========================================================hoc转发ref
// const HOCProps = (WrappedComponent) => {
//   class HOCComponent extends React.Component {
//     render() {
//       const { ref, ...rest } = this.props;
//       return <WrappedComponent ref={ref} {...rest} />;
//     }
//   }

//   return React.forwardRef((props, ref) => {
//     return (
//       // ref 不能写在react component组件上
//       <div ref={ref}>
//         <HOCComponent {...props} />
//       </div>
//     );
//   });
// };

// const Wrap = () => <h2>hello world</h2>;
// const App = HOCProps(Wrap);

// export default class H extends React.Component {
//   render() {
//     return (
//       <App
//         ref={(dom) => {
//           // 可以直接获取 WrappedComponent
//           console.log(dom); // <div><h2>hello world</h2></div>
//         }}
//       />
//     );
//   }
// }
