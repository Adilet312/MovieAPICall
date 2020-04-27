import React from 'react';

export default class Header extends React.Component{
  constructor(){
    super();
    this.state = {
      title: '',
    }
  }
 getTitle = (event) => this.setState({title:event.target.value});
 getData = () => {
   const {title} = this.state;
   let url=`http://www.omdbapi.com/?s=${title}&page=1&apikey=cb289192`
   fetch(url)
   .then(result => result.json())
   .then((data) => this.props.getData(data.Search))
   .catch(console.log)
   this.setState({title:''});
 }
 render(){
  return(
          <div className ='header'>
            <div className='search-box'>
              <input type='text' placeholder='search' onKeyUp={this.getTitle}/>
              <button onClick={this.getData}>Search</button>
            </div>
            <div className = 'menu-box'>
              <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Movies</a></li>
                <li><a href='#'>Actors</a></li>
                <li><a href='#'>Directors</a></li>
              </ul>
            </div>
          </div>
        );
      }
}
