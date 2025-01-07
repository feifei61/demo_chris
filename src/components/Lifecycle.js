import * as React from "react";

// 如果要把 class 當作是 React.Component, 需要註明 extends React.Component
export default class Lifecycle extends React.Component {
  // 以下 functions 按照 ReactComponent 生命週期的順序寫

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  // getDerivedStateFromProps() 前面需要加 static
  // static = 只有 Component 自己可以讀和編輯，Parent Component 或 Child Component都不能讀或編輯
  static getDerivedStateFromProps(props) {
    console.log("derived state");
  }

  render() {
    console.log("render");
    return <div>I am component</div>;
  }

  componentDidMount() {}

  // componentDidUpdate() 只會在 componet 的 props 或 state 有變動時被 call
  componentDidUpdate() {}
}
