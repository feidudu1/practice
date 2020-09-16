import React, { FC } from "react";

// 通用的声明 =============================================================================
/**
 * 声明注入的Props
 */
export interface ThemeProps {
  primary: string;
  secondary: string;
}

// 方法一：简单的HOC方式 =============================================================================

/**
 * 给指定组件注入'主题'
 */
export function withTheme<P>(Component: React.ComponentType<P & ThemeProps>) {
  /**
   * WithTheme 自己暴露的Props
   */
  interface OwnProps {}

  /**
   * 高阶组件 高阶组件的props, 忽略ThemeProps, 外部不需要传递这些属性
   */
  return (props: P & OwnProps) => {
    // console.log(props); // {a: 1}

    // 假设theme从context中获取
    const fakeTheme: ThemeProps = {
      primary: "red",
      secondary: "blue",
    };
    return <Component {...fakeTheme} {...props} />;
  };
}

// 方法二：用hooks重构 =============================================================================

// /**
//  * 抽取出通用的高阶组件类型
//  */
// type HOC<InjectedProps, OwnProps = {}> = <P>(
//   Component: React.ComponentType<P & InjectedProps>
// ) => React.ComponentType<P & OwnProps>;

// // export const withTheme = function (Component) {
// //   return function (props) {
// //     ...
// //   }
// // }

// export const withTheme: HOC<ThemeProps> = (Component) => (props) => {
//   // 假设theme从context中获取
//   const fakeTheme: ThemeProps = {
//     primary: "red",
//     secondary: "blue",
//   };
//   return <Component {...fakeTheme} {...props} />;
// };

//  通用的调用 =============================================================================
// Test
const Foo: FC<{ a: number } & ThemeProps> = (props) => (
  <div style={{ color: props.primary }}> {props.a} </div>
);
const FooWithTheme = withTheme(Foo);

export default function Demo1() {
  return <FooWithTheme a={1} />;
}
