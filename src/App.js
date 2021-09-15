
function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </div>
  );
}

function Movie() {
  return (
  <h3>I love potato</h3> //JSX문법
    );
  }

export default App //꼭 써야 외부에서 사용가능
