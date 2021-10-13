import React, {Component, useDebugValue} from 'react';
import axios from 'axios';
import Movie from './Movie'
class App extends Component{
    state = {
        isLoading: true,
        movies: []
    }

    getMovie = async () => {
        const{
            data:{
                data:{movies} //필요한 데이터만 불러옴
            }
        }
        = await axios.get('https://yts-proxy.now.sh/list_movies.json/sort_by=rating')
        this.setState({movies, isLoading:false})
    } //영화데이터 로딩하는걸 함수로 만듦

    componentDidMount() {
      this.getMovie()
      //함수를 불러옴
    }
    
    render() {
       const {isLoading, movies} = this.state
        return (
            <div>
            {isLoading 
            ?'Loading...' 
            : movies.map((movie) => {
                //console.log(movie)
                return(
                    <Movie
                    key = {movie.id}
                    id = {movie.id}
                    year = {movie.year}
                    title = {movie.title}
                    summary = {movie.summary}
                    poster = {movie.poster}
                    />
                )
            })}
              </div>
            )
    }//isLoading ? true일때 Loading...출력 : false일때  We are ready 출력
}
export default App;