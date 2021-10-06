# 김동호 201840107

# [ 10월 06일]

<h1>클래스형 컴포넌트</h1><br>

- constructor(생성자)<br> 
- componentDidMount()<br>
- componentDidUpdate()<br>
- componentWillUnmount() > 이벤트 리스너 제거<br>

<h1>영화 평점 사이트 제작</h1><br>

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
