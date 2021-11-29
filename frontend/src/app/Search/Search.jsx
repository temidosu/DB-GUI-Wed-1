import React from 'react';
import { Redirect } from 'react-router-dom';
import './search.css';


export class Search extends React.Component {

  // searchRepo = new SearchRepository();

    state = {
      input: '',
      category: 0,
      filter: 0,
      articles: []
    }

    applySearch() {
      if(this.state.input !== '' || this.state.category !== '' || this.state.filter !== ''){
      let param = {input: this.state.input, category: this.state.category, filter: this.state.filter}
      this.searchRepo.search(param)
        .then(arr => {
            console.log(arr)
            this.setState({
                articles: arr
            });
        })
      }
    }

    render () {
      return <>
      {sessionStorage.getItem("isAuthenticated") !== "true" &&
        (<Redirect to="/login"/>)}

        <div className="container-fluid" style={{paddingRight: '10vw', paddingLeft: '10vw'}}>
           
      </div>
    </>;
  }

  displayArticles() {
    const list = [];
    this.state.articles.map((article, i) =>
      list.push(
        <div>
        </div>
      ))


     return list;
  }

  carousel() {
      return <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
                <img src={require('../Images/logoHead.png')} alt="" width="100" height="100"/>
                <div class="carousel-item active">
                    <img src={require('../Images/carouselOne.png')} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={require('../Images/carouselTwo.png')} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={require('../Images/carouselThree.png')} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={require('../Images/carouselFour.png')} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
          </div>
   }

}

export default Search;