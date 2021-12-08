# 김동호 201840107

# [ 12월 08일 ]

<h1>조건부 렌더링</h1>

* React에서는 원하는 동작을 캡슐화하는 컴포넌트를 만들 수 있음

* 애플리케이션의 사애에 따라 컴포넌트 중 몇개만을 렌더링 할 수 있음 >> 조건부 렌더링

``` 
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
```

```
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```
> if문을 사용하여 true일때와 false일 때 출력되는 화면이 다름

<h1>엘리먼트 변수</h1>

* React에서는 렌더링 하려는 엘리먼트를 변수에 저장 할 수 있다.
* element란 리액트가 가장 작은 단위로 화면에 표시할 내용을 작성한다.

```
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
```
> login, logout버튼 생성

```
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }                                                      //click이벤트

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {                                             //if문을 사용하여 조건부 렌더링
      button = <LogoutButton onClick={this.handleLogoutClick} />; //element변수
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;   //element변수
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
```

<h1>논리 && 연산자로 if를 인라인으로 표현하기</h1>

```
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```

```
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```
> [조건] && [엘리먼트] 의 형태로 조건이 true일 때만 엘리먼트를 출력
>>주의! 조건을 false로하면 &&뒤의 표현식은 반환X

<h1>컴포넌트가 렌더링하는 것 막기</h1>

* 다른 컴포넌트에 의해 렌더링될 때 컴포넌트 자체를 숨기고 싶을 때가 있을 수 있다.
* 이 때는 렌더링 결과를 출력하는 대신 null을 반환하면 해결할 수 있다.

```
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
```
> warning이 발생시 warning메시지 출력, 정상이면 아무것도 출력하지않음
> WarninBanner컴포넌트는 메인 컴포넌트인 page로부터 props를 전달받아 false면 null반환,true면 엘리먼트 반환

<h1>리스트와 Key</h1>

* 배열의 값을 반환할 때는 map()함수를 사용한다. 변환하여 반환하는 것도 가능하다.
```
const numbers = [1,2,3,4,5];
const doubled = numbers.map((number)=>number * 2);
console.log(doubled);
```
>콘솔에 2,4,6,8,10을 출력함.

<h3></h3>

* Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는다.
* key는 엘리먼트에 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 한다.
* 일반적으로 항목이 고정적일 경우는 배열의 index값을 사용한다.
* 다만 항목의 순서가 바뀔 수 있는 경우는 index 사용을 권장하지 않는다.
* 이 것 때문에 성능이 저하되거나 컴포넌트의 state 와 관련된 문제가 발생할 수 있다.

```
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
```
> 엘리먼트에 고유성을 부여함

<h3>JSX에 map()포함시키기</h3>

* JSX를 사용하면 중괄호 안에 모든 표현식을 포함 시킬 수 있으므로 map()함수의 결과를 인라인으로 처리할 수 있다.

```
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
```

<h3>Form</h3>

* HTML과는 다름
* 만일 제시한 예가 순수한 HTML이라면 이 폼은 name을 입력받고, 폼을 제출하면 새로운 페이지로 이동한다.
* React에서도 동일하게 동작하길 원하면 그대로 사용하면 된다.
* 그러나 일반적인 경우라면 JS함수로 폼의 제출을 처리하고, 사용자가 폼에 입력한 데이터에 접근하도록 하는 것이 편리하다.
* 이를 위한 표준 방식은 "제어컴포넌트"를 사용하는것

<h1>제어 컴포넌트(Controlled Component</h1>

* React에서는 변경할 수 있는 state가 컴포넌트의 state 속성에 저장되며, setState()함수를 이용해서 업데이트 한다.
* 따라서 폼에 사용될 값을 React의 state로 일원화하면 관리를 편하게 할 수 있다.

```
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

<h3>textarea태그</h3>

* React에서 textarea는 value 속성을 사용한다.
* 따라서 react의 textarea는 싱글 태그를 사용하여 작성한다.

```
<textarea value={this.state.value} onChange={this.handleChange} />
```

<h3>select 태그</h3>

* select의 value를 통해 option의 value를 지정해서 selected를 대신한다.
* state의 관리는 textarea와 동일하다.
```
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

* !주의) select 태그에 multiple 옵션을 허용한다면 value 어트리뷰트에 배열을 전달할 수 있다.

```
<select multiple={true} value={['B', 'C']}>
```

<h3>file input 태그</h3>

```
<input type="file" />
```

* 값이 읽기 전용이기 때문에 React에서는 비제어 컴포넌트다.

<h3>다중 입력 제어하기</h3>

* 여러개의 input 엘리먼트를 제어해야 한다면 각 엘리먼트에 name 속성을 추가하고, event.target.name 값을 통해 핸들러가 어떤 작업을 할 지 선택할 수 있게 해준다.

```
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
```

<h3>제어되는 Input Null 값</h3>

* 제어 컴포넌트에 value prop을 지정하면 의도하지 않는 한 사용자가 변경할 수 없다.
```
ReactDOM.render(<input value="hi" />, mountNode);

setTimeout(function() {
  ReactDOM.render(<input value={null} />, mountNode);
}, 1000);
```

<h3>제어 컴포넌트의 대안</h3>

* 데이터를 변경할 수 있는 모든 방법에 대해 이벤트 핸들러를 작성한다.

<h3>완전한 해결책</h3>

* 유효성 검사, 방문한 필드 추적 및 폼 제출 처리와 같은 완벽한 해결을 원한다면 Formik을 사용한다.
* 그러나 Formik은 제어 컴포넌트 및 state 관리에 기초하기에 어렵다.
 


# [ 11월 24일 ]

<h1>getting_start</h1>

> https://ko.reactjs.org/docs/getting-started.html

<h1>Reamarkable</h1>

>creat-react-app

* 설치 후 정상동작 확인

* App.js에 필요없는 코드 삭제

```
class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Hello, **world**!' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <label htmlFor="markdown-content">
          Enter some markdown
        </label>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <MarkdownEditor />,
  document.getElementById('markdown-example')
);
```
* component 이름 App으로 수정한다.

* rendering 은 index.js에 위임

* Remarkable 설치
>npm install remarkable --save

* React와 Remarkable를 import 한다.
> import {Remarkable} from 'remarkable'

* 동작 확인








# [ 11월 17일 ]

<h1> Todo List 예제</h1>

* TodoApp과 TodoList 두개의 컴포넌트로 구성   

* handleChange는 모든 키보드 입력마다 React의 state를 갱신해서 보여준다. 

* 시간순으로 보면   유저입력 > handleChange > React의 state 갱신 > form delement   

* render()메소드에서 초기 렌더링 실행   

* onChange를 통해 input에 입력되는 값으로 state 상태 변경을 준비 

* 입력된 값은 state의 "text:""에 임시로 저장    

* lavel의 htmlFor은 input과의 연결을 위한 id값 
  * className처럼 html과 구분하기 위해 jsx에서 사용하는 키워드      

* 버튼을 클릭하면 버튼의 숫자를 증가시킴   

* 리스트는 배열로 저장되기 때문에 item.length를 통해 list의 수를 확인한다.   

<h1>TodoApp</h1>

```
 render() {
        return (
        <div>
          <h3>TODO</h3>
           <TodoList items={this.state.items} /> 
      <form onSubmit={this.handleSubmit}>   //버튼 클릭시 handleSubmit 실행
          <label htmlFor="new-todo">        //input에대한 label이다
          What needs to be done?
          </label>
          <input
          id="new-todo"
          onChange={this.handleChange} 
          value={this.state.text}            //value에 state의 텍스트 저장
        />
          <button>
          Add #{this.state.items.length + 1} //버튼을 누르면 1이 올라감.(버튼2로변경)
          </button>
      </form>
    </div>
  );
}
```
```
handleChange(e) {
  this.setState({ text: e.target.value });  //input에 이벤트가 들어오면 text를 value에 저장시킴
}
```
```
handleSubmit(e) {
  e.preventDefault(); //페이지 새로고침X 
  if (this.state.text.length === 0) { //input에 아무것도 안쓰면 return(아무것도없음)
    return;
  }
  const newItem = {
    text: this.state.text,  //newItem에 state.text를 저장
    id: Date.now()          //newItem에 현재시간 저장
  };                        //0이아니면 입력받은 text와 현재시간 저장

  this.setState(state => ({                 
    items: state.items.concat(newItem), //item에 newitem값을 저장
    text: ''                            //text를 비워줌(다음입력을위함)
  }));
}
}
```
* handleSubmit(e)에서 e.preventDefault(); 를 사용하는 이유
  * 브라우저에서 양식을 제출할 때는 브라우저의 새로고침이 발생하는데 React나 SPA의 경우 필요가 없는 동작임으로 이를 방지하기 위해 사용.   


<h1>TodoList</h1>


```
class TodoList extends React.Component {
render() {
  return (
    <ul>
        <li key={item.id}>{item.text}</li>
      {this.props.items.map(item => (
      ))}                           //앞서 사용한 id값을 key props로 사용
    </ul>
  );
}
}

ReactDOM.render(                     //Rom으로 render해주고 끝
<TodoApp />,
document.getElementById('todos-example')
);
```

<h1>markdowneditor</h1>

> npm install markdown-editort

# [ 11월 10일 ]

* Detail.js에 props 추가
```
const {location} = this.props
```
* hello 프롭스로변경
```
<span> {location.props.title} </span>
```
* if문 추가하여 location.state가 없으면 render 함수가 null을 반환하도록 수정
```
    render() {
        const {location} = this.props
        if(location.state){
        return(
           <span> {location.props.title} </span>
        )
        } else {
            return null
        }
    }
```

* app.js에 HashRouter를 BrowserRouter로 변경
```
function App(){
    return (
    <BrowserRouter>
        <Navigation />
        <Route path = '/' exact={true} component={Home} />
        <Route path = '/about' component={About} />
        <Route path = '/movie-detale' componente={Detail} />
    </BrowserRouter>
    )
}
```
* package.json 수정
>script 탭에 predeploy,deploy 추가
```
  "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
```
>마지막줄에 homepage 추가
```
  "homepage": "https://id.github.io/movie_app_2021"
```

<h3>gh Page 설치하기</h3>

> github에서 제공하는 github pages 서비스로 영화 앱을 배포한다.
>npm install gh-pages
>https://kimdongho321.github.io/movie_app_2021 접속시 오류가 없음을 확인한다.

# [ 11월 03일 ]

<h1>10월 27일이어서</h1>

* a 태그 Link 컴포넌트로 바꾸기
> Navigation 컴포넌트에 Link 컴포넌트를 import 하고 a 태그를 Link 컴포넌트로 바꿈
> href 속성은 to로 수정
```
<Link to='/'>Home</Link>
<Link to='/about'>About</Link>
```

* Navigation.css 생성
> https://github.com/easysiT 8장에서 css 복사 후 붙여넣기

* Navigation.js 수정
```
<div className="nav"> //클래스넣기
import "./Navigation.css" 
```
* App.js 수정
>Router 추가하기
```
<Route path = '/movie-detale' componente={Detail} />
```
* Detail.js 생성 및 작성
```
function Detail(props){
    console.log(props);
    return(
        <span>hello</span>
    )
}

export default Detaile
```

* route props에 데이터 담아 보내기
> Navigation 컴포넌트에 있는 Link 컴포넌트의 to props 구조 변경

* 영화 카드를 눌러 /movie-detail로 이동하고 영화 데이터 확인
> 클릭시 hello 문장 확인, console에 데이터가 들어있음

>url에 /movie-detail 직접 입력시 console에 데이터가 들어있지 않음. 이런경우에 사용자를 강제로 Home으로 돌려 보내야 함.

* 리다이렉트 기능 만들어보기
> route props의 history 키를 활용
> history 키에는 push,go,goBack,goForward와 같은 키가 있으며 url을 변경해주는 함수들이 있다.

* detail컴포넌트를 함수형에서 클래스형으로 변경한 후 location, hitory 키를 구조 분해 할당한다.
> location.state가 undefined인 경우 push 함수를 사용하여 history.push("/")를 실행하도록 한다.
```
class Detail extends React.Component {
    componentDidMount(){
        const {location,history} = this.props
        if (location.state === undefined){
            history.push('/')
        }
    }
    render() {
        return(
            <span>Hello</span>
        )
    }
}
```


# [ 10월 27일 ]

<h1>10월 13일 이어서</h1>

* li tag에 key props 추가하기

```
<ul className="movie__genres">
genres.map ((genre,index)) => {
    <li key ={index} className="movie-genre">
    {genre}
   </li>
    );
})}
```
* App.CSS 수정하기
> https://github.com/easysiT 7장에서 css 복사 후 붙여넣기

* 영화 앱 제목 바꾸기
> public 폴더의 index.html에서 title 수정


* 시놉시스 180자로 제한하기

> "hereisstring".slice(0,10) // 0부터 10까지 > "hereisstri 로 들어감

```
<p className="movie-summary">{summary.slice(0,100)}...</p>
```

<h1> 영화 앱에 여러 기능 사용하기</h1>


* react-router-dom 설치
>간단한 메뉴 추가
>메뉴를 클릭하면 화면이 이동해야 하는데 이때 필요한 것이 라우터
> 라우터는 react-router-dom패키지를 이용함
* react-router-dom 설치
> npm install react-router-dom
* components 폴더에 Movie 컴포넌트 옮기기
> src/components 폴더 만들고 Movie 컴포넌트 이동
* routes 폴더에 라우터가 보여줄 화면 만들기
> src/routes 파일 만들고 About.js, Home.js 파일 만들기
* Home.js 수정
>App.js 내용을 Home.js로 복사하고 컴포넌트 이름을 Home으로 수정
>Home.css를 생성하고 Home.js에 import
* Home.css 만들기/ App.js 수정하기
>https://github.com/easysiT 8장에서 router > Home.css 복사 후 붙여넣기

<h3>라우터 만들어보기</h3>

* HashRouter와 Router 컴포넌트
>HashRouter와 Router 컴포넌트 import
> HashRouter 컴포넌트가 Route 컴포넌트를 감싸 반환하도록 App.js 수정

* Route 컴포넌트에 path와 component 삽입
```
<Route path = '/about' component={About}/>
```
* 라우터 테스트하고 문제 찾아보기
> localhost:3000에 접속시 주소 뒤에 자동으로 /#/ 가 붙음
>/about 에 접속함
* About.css 작성하기
>route 폴더에 About.css 파일 생성하고 https://github.com/easysiT 8장 about.css 복사하여 붙여넣기

<h3>네비게이션 만들기</h3>

* Navigation 컴포넌트 만들기
> Home과 About 이라는 2개의 버튼을 만들고 각각 링크 주기



# [ 10월 13일 ]
<h1>영화 앱 스타일링 하기</h1>

* App컴포넌트에 HTML 추가하기
```
  <section className = 'container'>
            {isLoading ?(
                <div className = 'loader'>
                    <span className = 'loader-class'>Loading...</span>
                </div>
            )
            :
            (
            <div className = 'movies'>
             {
 movies.map((movie) => {
    return(
        <Movie
        key = {movie.id}
        year = {movie.year}
        title = {movie.title}
        summary = {movie.summary}
        poster = {movie.medium_cover_image}
        genres = {movie.genres}
        />
            )
                        }
           )
             }
          </div>
        )}
    </section>
```

* Movie 컴포넌트에 HTML 추가하기
> Movie 컴포넌트가 반환할 JSX를 div class="movie"로 감싼다
```
{
    return(

        <div className='movie'>
         <img src={poster} alt={title} title={title}/>
         <div className = 'movie-data'>
             <h3 className = 'movie-title'>{title}</h3>
             <h5 className= 'movie-year'>{year}</h5>
             <p className = 'movie-summary'>{summary}</p>
         </div>
        </div>
    )
}
```

* 영화 포스터 이미지 추가하기
전체 태그를 감싸는 div tag (class="movie")추가
```
function Movie({year, title, summary, poster, genres}) {
    return(
         <div className = 'movie-data'>
             <h3 className = 'movie-title'>{title}</h3>
             <h5 className= 'movie-year'>{year}</h5>
             <p className = 'movie-summary'>{summary}</p>
         </div>
        </div>
    )
}

```

* Movie 컴포넌트 정리하기
> Movie 컴포넌트에 있는 id props 제거  
> style 속성으로 title 스타일링 하기
```
<h3 class="movie-title" style={{backgroundColor:'red'}}>
{title}
</h3>
```

* CSS파일 생성   
> src 폴더에 App.css,Movie.css 파일 생성

* app,movie컴포넌트에 CSS파일 import
```
import './App.css'
```

<h3> 영화 앱 전체 모습 수정</h3>

> App.css 내용 전부 삭제   
> Movie 컴포넌트에 genres props 넘겨주기   
> Movie 컴포넌트 수정하기
```
function Movie({ title, year, summary, poster, genres})
genres: PropTypes.arrayOf(PropTypes.string).isRequired
```

* App 컴포넌트 수정하기

```
<Movie
    (...)
    poster={move.medium_cover_image}
    genres={movie.genres}
>
```



* 영화 장르 출력하기

* Movie 컴포넌트에서 장르를 출력하도록 코드 수정

```
<div className="movie-date"> 
<h3 className="movie-title"{title}></h3>  
<h5 className="movie-year{year}/h5>
<ul className ="movie-genres">
                 {genres.map((genre, index) => {
                     return <li key= {index} className="movie-genre">{genre}</li>
                 })}
                 </ul>
             <p className = "movie-summary">{summary}</p>
```

# [ 10월 06일 ]

<h1>클래스형 컴포넌트</h1><br>

- constructor(생성자)<br> 
- componentDidMount()<br>
- componentDidUpdate()<br>
- componentWillUnmount() > 이벤트 리스너 제거<br>

<h1>영화 평점 사이트 제작</h1><br>

- axios 설치 (npm install axios)
- yts.lt/api 접속 후 영화 목록 데이터 확인
- JSON Viewer 확장 도구 설치(브라우저에서 검색 후 설치)
- https://yts.mx/api/v2/list_movies.json > 이미지 링크 참고<br>
- yts-proxy.now.sh/list_movies.jason에 movie_id를 추가해야한다.
- ex)yts-proxy.now.sh/list_movies.jason?movie_id=10은 아이디가 10인 영화의 정보 출력
- async > 시간 딜레이시키기<br> async 사용후 필요한 부분에 await 사용 (App.js 9~11줄)


# [ 09월 29일]

<h1>git master</h1><br>

<h3> git branch -> git master 변경</h3><br>

- git config --global init.defaultBranch main<br>
- 다시 branch로 변경시 위 명령어에서 main -> branch 

<h1>React Project 클론하기</h1><br>

- 다른 프로젝트와 달리 리액트는 설치후 개발함
- github에서 코드복사 후 git clone 붙여넣기
- npm install
- npm start // 실행 확인

<h1>State</h1><br>

- props는 정적인 데이터만 다룰 수 있기 때문에 동적인 데이터를 다루기 위해 state를 사용.
- state는 class형 컴포넌트에서 사용됨.

# [ 09월 15일 ]

<h1>props</h1><br>

- 컴포넌트에서 컴포넌트로 전달하는 데이터, 함수의 매개변수 역할

- 숫자, boolean값 사용가능

- props 전달 하기 위해서는 문자열을 제외한 모든 값을을 중괄호 "{}" 로 묶는다

<h1>구조 분해 할당</h1><br>

- ES6의 문법 중 구조 분해 할당을 사용하면 점 연산자를 사용하지 않아도 된다.

- 데이터의 개수가 많아지면 구조 분할 할당을 사용하는 것이 편하다.

<h1>비슷한 컴포넌트 여러개 만들기</h1><br>

- <h2>map() 함수 사용</h2><br>
const friends = ['a', 'b', 'c', 'd']<br>
    friends.map(function) {<br>
        return friend + "♥";<br>
    })


# [ 09월 08일 ]
- 앱 생성 및 수정

<h1>react</h1><br>

- 하나의 컴포넌트만 허용함<br>

<h1>JSX</h1><br>

- 컴포넌트: 자바스크립트와 HTML언어를 조합한 JSX라는 문법을 사용해서 만든다.<br>
- JSX의 문법은 JS와 HTML 문법을 조합한 것으로 사용하다 보면 자연스럽게 익힐 수 있다.<br>
- 인접한 JSX요소는 반드시 하나의 태그로 묶어야 한다.<br>

<h1>경로</h1><br>
<h3>상대경로</h3><br>

- "./" ->같은 폴더에 존재<br>
- "../"->상위 폴더에 존재<br>
