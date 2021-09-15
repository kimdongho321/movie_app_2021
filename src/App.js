const foodlike =[
  {
    name: 'Pizza',
    Image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fw.namu.la%2Fs%2F8c2aebf04d4c6e0ae24ebf3b3789cb064f353da40f0a2916630ee33cc34742414ac8427b8765569e84d615a24cac7bc389ada2e5c60579541ea8b41be9b22db6d0ce58f59fd1ac01912436c928605cd86974e360258a66ac0374662e70b0ae73&imgrefurl=https%3A%2F%2Fnamu.wiki%2Fw%2F%25ED%2594%25BC%25EC%259E%2590&tbnid=Buf3KFfT8a1WsM&vet=12ahUKEwiXmNHm-__yAhVIEKYKHdBxDckQMygAegUIARDPAQ..i&docid=P_CrebuGKrkEtM&w=640&h=420&q=%ED%94%BC%EC%9E%90&ved=2ahUKEwiXmNHm-__yAhVIEKYKHdBxDckQMygAegUIARDPAQ',
  },
  {
    name: 'bugger',
    Image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F8f%2FNYC-Diner-Bacon-Cheeseburger.jpg&imgrefurl=https%3A%2F%2Fko.wikipedia.org%2Fwiki%2F%25ED%2596%2584%25EB%25B2%2584%25EA%25B1%25B0&tbnid=7A7S_0BS1EKr4M&vet=12ahUKEwi8nOmr_P_yAhU1z4sBHdRDC_cQMygAegUIARDRAQ..i&docid=s4j-ZFHTU3hORM&w=3560&h=2980&q=%ED%96%84%EB%B2%84%EA%B1%B0&ved=2ahUKEwi8nOmr_P_yAhU1z4sBHdRDC_cQMygAegUIARDRAQ'
  }
]

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Food fav="kimchi" something={true} papapa={['hello', 1, 2, true]}/> {/* boolean,배열가능 */}
    </div>
  );
}

function Food(props) {
  return (
  <h3>I love {props.fav}</h3> //JSX문법
    );
  }

export default App //꼭 써야 외부에서 사용가능
