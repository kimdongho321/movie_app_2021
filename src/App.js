const foodlike =[
  {
    name: 'Pizza',
    Image: 'https://cdn.dominos.co.kr/admin/upload/goods/20200311_x8StB1t3.jpg',
  },
  {
    name: 'bugger',
    Image: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/NYC-Diner-Bacon-Cheeseburger.jpg'
  }
]

function App() {
  return (
    <div className="App">
      {
        foodlike.map(foo => (<Food name={foo.name} picture={foo.Image} />))
      }
    </div>
  );
}

function Food({name, picture}) {
  return (
   <div>
    <h3>I love {name}</h3> {/* //JSX문법 */}
    <img src={picture} />
   </div>
    );
  }

export default App //꼭 써야 외부에서 사용가능
