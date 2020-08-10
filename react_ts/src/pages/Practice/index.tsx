import React from "react";

export interface ListProps<T> {
  visible?: boolean;
  list: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

export function List<T>(props: ListProps<T>) {
  return <div />;
}

// Test
export default function Test() {
  return (
    <List
      list={[1, 2, 3]}
      renderItem={(i) => {
        return <div>hi{i}</div>;
      }}
    />
  );
}
