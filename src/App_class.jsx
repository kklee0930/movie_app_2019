import React from "react";
// import PropTypes from "prop-types";

//Turns a function component into class component
class App extends React.Component {
  //Component mount means component shows up on the screen(be on website)
  //When component renders componentDidMount executes
  constructor(props) {
    super(props);
    console.log("hello");
  }
  //Put the data that you are going to change into state
  state = {
    count: 0,
  };
  //Everytime setState is called render() is executed
  add = () => {
    this.setState((number) => ({ count: (number.count += 1) }));
  };
  minus = () => {
    this.setState((number) => ({ count: (number.count -= 1) }));
  };
  componentDidMount() {
    //Component가 실행되었음을 뜻함. 1번만 출력됨. 변화가 있을때마다 출력됨
    console.log("component rendered");
  }
  componentDidUpdate() {
    //Calls second(I'm done updated!)
    console.log("i just updated");
  }
  componentWillUnmount() {
    //Component가 종료될 경우 실행됨. (다른 페이지로 가던가 할때 실행됨)
    console.log("Goodbye!");
  }
  render() {
    //Calls render first.
    console.log("I am rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;
