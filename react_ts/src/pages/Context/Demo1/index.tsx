import React, { FC, useContext } from "react";

export interface ITheme {
  primary: string;
  secondary: string;
}

/**
 * 声明Context的类型, 以{Name}ContextValue命名
 */
export interface IThemeContext {
  theme: ITheme;
  onThemeChange: (theme: ITheme) => void;
}

/**
 * 创建Context, 并设置默认值, 以{Name}Context命名
 */
export const ThemeContext = React.createContext<IThemeContext>({
  theme: {
    primary: "red",
    secondary: "blue",
  },
  onThemeChange: () => {},
});

/**
 * 暴露hooks, 以use{Name}命名
 */
export function useTheme() {
  return useContext(ThemeContext);
}

/**
 * Provider, 以{Name}Provider命名
 */
export const ThemeProvider: FC<{
  theme: ITheme;
  onThemeChange: (theme: ITheme) => void;
}> = (props) => {
  return (
    <ThemeContext.Provider
      value={{ theme: props.theme, onThemeChange: props.onThemeChange }} // 这里的value用来干嘛的？
    >
      {props.children}
    </ThemeContext.Provider> // 该标签并不会渲染成div
  );
};

export default function ContextComponent() {
  return (
    // ThemeProvider 并不会被渲染成div
    <ThemeProvider {...useTheme()}>
      <div style={{ color: useTheme().theme.primary }}>
        【ts hook】js/typescript/react组件注意事项/5
      </div>
    </ThemeProvider>
  );
}
