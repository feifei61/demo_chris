import logo from './logo.svg';
import './App.css';
import MyComponent from "./components/MyComponent.js";
import Lifecycle from "./components/Lifecycle.js";
import * as React from "react";
function App() {
  const [isShow, setShow] = React.useState(false);

  React.useEffect(() => {
    console.log("useEffect called");
  }, [isShow]);

  return (
    <div className="App">
      <Lifecycle />

      {/* <MyComponent show={isShow} />
      <form
        onSubmit={(e) => {
          e.preventDefault;
          console.log("form submitted");
        }}
      >
        <input
          type="text"
          onChange={() => {
            console.log("changed");
          }}
        />
        <button
          type="submit"
          onClick={() => {
            setShow(true);
          }}
        >
          Submit
        </button>
      </form> */}
    </div>
  );
}

export default App;
