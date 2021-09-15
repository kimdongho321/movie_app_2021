
function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Food fav="kimchi" something={true} papapa={['hello', 1, 2, true]}/> 
    </div>
  );
}

function Food(props) {
  return (
  <h3>I love {props.fav}</h3> //JSX문법
    );
  }

export default App //꼭 써야 외부에서 사용가능
