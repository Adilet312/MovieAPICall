import React from 'react';
import "./css/movie-style.css";
import FaCaretSquareORight from 'react-icons/lib/fa/caret-square-o-right';
class Movies extends React.Component{
  constructor() {
    super();
    this.state = {
      movies: [],
      title: '',
      error: '',
      page: 1
    }
  }
  getTitle = (event) => {
    this.setState({title:event.target.value});
  }

  getData = () =>
  {
      const {title} = this.state;
      let url=`http://www.omdbapi.com/?s=${title}&page=1&apikey=cb289192`
      fetch(url)
      .then(result => result.json())
      .then((data) => this.setState({movies:data.Search}))
      .catch(console.log)
  }

  render()
  {
    console.log(this.state.movies)
    let list = this.state.movies.map((element) => <div className='img-block'><i className = 'fas fa-play'></i><img  src={element.Poster}></img></div>)

    return(
          <div className='container'>
            <div className='search-box'>
              <input type='text' placeholder='search' onKeyUp={this.getTitle}/>
              <button onClick={this.getData}>Search</button>

           </div>

             {list}

        </div>)
  }
}
export default Movies;
