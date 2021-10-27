# 김동호 201840107

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
>/about 에 접속하고 접속 되는지 확인




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
