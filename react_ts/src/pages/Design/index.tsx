import React, { Component, SFC, MouseEvent } from "react";

class People<T, S> extends React.Component<T, S> {
  protected bag: number;
  private _age: number;

  // abstract getname(): void;

  constructor(props: any) {
    super(props);
    this._age = 23;
    console.log(1111, this._age);
    this.bag = 120;
  }
  render() {
    return <div>hihihi</div>;
  }
}

export default class Design extends People<{}, {}> {
  getname() {
    return this.bag;
  }
  render() {
    return <div>{this.bag}</div>;
  }
}
