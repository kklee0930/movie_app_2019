import React from "react";
import axios from "axios";
import Movie from "./Movie";
// import "./Movie.css";

class App2 extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  async getMovies() {
    //async와 await은 시간이 소요될 경우 기다려야 함을 뜻함. 비동기처리
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      //Wait for axios
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
    );
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    this.getMovies();
  }
  //   componentDidMount() {
  //     //componentDidMount will execute after render() and it will execute after 6 sec
  //     setTimeout(() => {
  //       this.setState({ isLoading: false });
  //     }, 6000);
  //     function getMovies() {
  //       const movies = axios.get(
  //         "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
  //       );
  //     }
  //   }
  render() {
    const { isLoading, movies } = this.state; //Get isLoading from the state
    return (
      <section className="container">
        {isLoading ? (
          <div className="Loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App2;
