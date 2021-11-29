import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import './Search.css';
import { CompactRecipeCard  } from '../common/CompactRecipeCard';
import { recipes } from '../../DummyData/recipeData';
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { data } from "jquery";


export class Search extends React.Component { 

  // searchRepo = new SearchRepository();
  state = {
    data: recipes,
    filteredData : [],
    wordEntered : '',
    placeholder: 'Enter Recipe Name',
    authorFilter: false,
    recipeFilter: true

  }
  
   handleFilter = (event) => {
      const searchWord = event.target.value;
      this.setState({wordEntered : searchWord})
      const newFilter = this.state.data.filter((value) => {
       if(this.state.recipeFilter === true){
          return value.recipeName.toLowerCase().includes(searchWord.toLowerCase());
       }
      else{
          return value.author.toLowerCase().includes(searchWord.toLowerCase());
      }
      });
  
      if (searchWord === "") {
        this.setState({filteredData: recipes})
      } else {
        this.setState({filteredData: newFilter})
      }
    };

  changeFilter = (event) => {
      const searchFilter = event.target.value;
      console.log("working")
      if (searchFilter == "authorFilter"){
        this.setState({authorFilter: true, recipeFilter: false, placeholder: 'Enter Author Name'})
      }
      else{
        this.setState({authorFilter: false, recipeFilter: true, placeholder: 'Enter Recipe Name'})
      }


  }

    clearInput = () => {
      this.setState({filteredData: []})
      this.setState({wordEntered : []})
    };

    filterRender = () => {
      if (this.state.filteredData !== 0 && this.state.wordEntered !== ''){
        return <>
          <div className="dataResult">
            {this.state.filteredData.map((card) => {
                const { recipeName, instructions, desciption, imageURL} = card;
                return <CompactRecipeCard card = {card}></CompactRecipeCard>
            })}
          </div>
        </>
      }
      else if (this.state.filteredData == 0 && this.state.wordEntered !== ''){
          return <>
            <h3>No Matches!</h3>
          </>
      }
      else{
        return <>
          <div className="dataResult">
            {this.state.data.map((card) => {
                const { recipeName, instructions, desciption, imageURL} = card;
                return <CompactRecipeCard card = {card}></CompactRecipeCard>
            })}
          </div>
        </>

      }
    }

render () {

    return <>
      {sessionStorage.getItem("isAuthenticated") !== "true" &&
      (<Navigate to="/login"/>)}
      
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder={this.state.placeholder}
            value={this.state.wordEntered}
            onChange={(e)=>this.handleFilter(e)}
          />
          <div className="searchIcon">
            {this.state.filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={(e)=>this.clearInput(e)} />
            )}
          </div>
        </div>
        <div>
          <label for="membership">Search Type:</label>
            <select name="membership" id="membership" onChange={(e)=>this.changeFilter(e)}>
              <option 
                value="recipeFilter" 
                >Recipe</option>
              <option 
                value="authorFilter"
                >Author</option>
            </select>
        </div>
        {this.filterRender()}
      </div>
    </>
  }
}
 

export default Search;