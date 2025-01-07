// class MyComponent {
//   render() {
//     return <div>hello world</div>;
//   }
// }

// function MyComponent() {

// }

const MyComponent = (props) => {
  if (props.show === true) {
    return <div>hello world</div>;
  } else {
    return null;
  }
};

export default MyComponent;
