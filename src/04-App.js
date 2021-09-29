import PropTypes from 'prop-types'

const foodlike =[
  {
    id: 1,
    name: 'Pizza',
    Image: 'https://cdn.dominos.co.kr/admin/upload/goods/20200311_x8StB1t3.jpg',
    alt: '피자',
    rating: 4.5
  },
  {
    id: 2,
    name: 'bugger',
    Image: 'https://cdn.eyesmag.com/content/uploads/posts/2020/09/28/fast-food-franchises-serve-hamburger-without-tomatoes-01-52f4f2a6-a73a-4abc-ba3c-419ee2660639.jpg',
    alt: '햄버거',
    rating: 5.0
  }
]
const renderFood = dish => <Food
key={dish.id}
name={dish.name}
picture={dish.image}
alt={dish.alt}
rating={dish.rating}
></Food>

function App() {
    console.log(foodLike.map(renderFood));
    return (
      <div>
        {
          foodlike.map(renderFood)
        }
      </div>
    );
  }

Food.propTypes={
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number
  }
  function Food({name, picture, alt, rating}) {
    return (
     <div>
      <h3>I love {name}</h3> {/* //JSX문법 */}
      <h4>{rating}/5.0</h4>
      <img src={picture} />
     </div>
      );
    }
  
  export default App //꼭 써야 외부에서 사용가능