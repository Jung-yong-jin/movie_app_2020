import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component{
 
  state = {
    isLoading: true,
    movies: [],
  }
  render(){
   
    const {isLoading, movies} = this.state;
    return (
      
            <section class="container">
              {isLoading ? 
              (<div class="loader"><span class="loader__text">Loading...</span></div>) 
              : 
              (<div> {movies.map(movie => ( <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image}/> ))}
              
              </div>)}
            </section>
    )
  }

  getMovies = async () => {
    //const movies = await axios.get('https://yts.mx/api/v2/list_movies.json');
    const {data:{data:{ movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    //console.log(movies);
    //this.setState({movies : movies});
    //ES6 에서는 객체의 키와 대입할 변수의 이름이 같다면 코드를 축약 할 수 있다.
    this.setState({movies, isLoading: false});
  }

  componentDidMount(){
    //영화 데이터 로딩!
    //setTimeout(() => {this.setState({isLoading: false})}, 6000);
    //axios.get('https://yts.mx/api/v2/list_movies.json');
    this.getMovies();
  }
}

export default App;
