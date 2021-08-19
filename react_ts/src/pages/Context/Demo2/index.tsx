import React, { FC } from "react";

export function fixClass<
  T extends Element = HTMLDivElement,
  Attribute extends React.HTMLAttributes<T> = React.HTMLAttributes<T>
>(cls: string, type: keyof React.ReactHTML = "div") {
  const FixedClassName: FC<Attribute> = (props) => {
    return React.createElement(type, {
      ...props,
      className: `${cls} ${props.className}`,
    });
  };
  console.log(FixedClassName);
  return FixedClassName;
}

/**
 * Test
 */
const Container = fixClass("card");
const Header = fixClass("card__header", "header");
const Body = fixClass("card__body", "main");
const Footer = fixClass("card__body", "footer");

export default function Test() {
  return (
    <Container>
      <Header>header</Header>
      <Body>body</Body>
      <Footer>footer</Footer>
    </Container>
  );
}
