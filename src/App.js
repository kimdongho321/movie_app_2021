const foodlike =[
  {
    name: 'Pizza',
    Image: 'https://cdn.dominos.co.kr/admin/upload/goods/20200311_x8StB1t3.jpg'
  },
  {
    name: 'bugger',
    Image: 'https://cdn.eyesmag.com/content/uploads/posts/2020/09/28/fast-food-franchises-serve-hamburger-without-tomatoes-01-52f4f2a6-a73a-4abc-ba3c-419ee2660639.jpg'
  }
]

function renderFood(foo) {
  return <Food name={foo.name} picture={foo.image} />
}//App 안에 넣었던 renderFood를 따로 빼서 함수로 만듦

function App() {
  return (
    <div>
      {
        foodlike.map(renderFood)
      }
    </div>
  );
}// 따로 뺐던 renderFood를 map을 사용하여 인자로 전달

function Food({name, picture}) {
  return (
   <div>
    <h3>I love {name}</h3> {/* //JSX문법 */}
    <img src={picture} />
   </div>
    );
  }

export default App //꼭 써야 외부에서 사용가능
