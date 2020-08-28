import React from "react";

// // ===============================不使用forwardRef转发
// const FancyButton = (props) => {
//   function trigger(e) {
//     console.log(e.target); // <button>click me!</button>
//   }

//   console.log("child ref", props.ref); // 只在初始化的时候执行一次 // undefined
//   return (
//     <button ref={props.ref} onClick={trigger}>
//       {props.children}
//     </button>
//   );
// };

// // use FancyButton
// const ref = React.createRef();

// export default function () {
//   console.log("ref", ref); // 打印出来的结果为{current: null}，点击该打印出来的对象变成{current: null}
//   return <FancyButton ref={ref}>click me !</FancyButton>;
// }

// // ===============================使用forwardRef转发
const FancyButton = React.forwardRef((props, ref) => {
  function trigger(e) {
    console.log(e.target); // <button>click me!</button>
  }

  console.log("forwardRef", ref.current); // 只在初始化的时候执行一次 // null
  return (
    <button ref={ref} onClick={trigger}>
      {props.children}
    </button>
  );
});

// use FancyButton
const ref = React.createRef();

export default function () {
  console.log("ref", ref); // 打印出来的结果为{current: null}，点击该打印出来的对象变成{current: button}
  return <FancyButton ref={ref}>click me !</FancyButton>;
}
