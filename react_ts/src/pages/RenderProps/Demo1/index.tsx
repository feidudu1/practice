import React, { ReactElement } from "react";

interface Theme {
  primary: string;
  secondary?: string;
}

export interface ThemeConsumerProps {
  children: (theme: Theme) => ReactElement;
}

export const ThemeConsumer = (props: ThemeConsumerProps) => {
  const fakeTheme = { primary: "red", secondary: "blue" };
  return props.children(fakeTheme);
};

// Test
export default function Demo1() {
  return (
    <ThemeConsumer>
      {({ primary }) => {
        return <div style={{ color: primary }}>hihi</div>;
      }}
    </ThemeConsumer>
  );
}
