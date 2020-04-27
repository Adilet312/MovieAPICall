import React from 'react';
import "./css/movie-style.css";
import "./css/footer.css";
import Header from './Header';
import Footer from './Footer';
class Movies extends React.Component{
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      page: 1
    }
  }
  // getTitle = (event) => {
  //   this.setState({title:event.target.value});
  // }

  getData = (list) =>
  {
    this.setState({movies:list});
  }

  render()
  {
    console.log(this.state.movies)
    let list = this.state.movies.map((element) => <div className = 'box'>
                                                    <div className = 'box-header'><span>{element.Title}</span></div>
                                                    <div className = 'box-body'><img  src={element.Poster}></img></div>
                                                    <div className = 'box-footer'><p>
                                                      In computing, gettext is an internationalization and localization system commonly used
                                                      for writing multilingual programs on Unix-like computer operating systems. One of the main
                                                      benefits of gettext is that it separates programming from translating.</p>
                                                   </div>
                                                  </div>)

    return(
      <div>
          <div className = 'header-box'>
            <Header getData = {this.getData} />
          </div>
          <div className='container'>
            <div className = 'grid-container'>
             {list}
            </div>
         </div>
         <Footer/>
     </div>)
  }
}
export default Movies;
