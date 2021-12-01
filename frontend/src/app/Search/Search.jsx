import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import './Search.css';
import { CompactRecipeCard } from '../common/CompactRecipeCard';
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { data } from "jquery";
import { AccountRepository } from '../api/accountRepository';
import { Recipe } from '../../models/Recipe';


export class Search extends React.Component {

	accountRepository = new AccountRepository();

	// searchRepo = new SearchRepository();
	state = {
		data: [],
		filteredData: [],
		wordEntered: '',
		placeholder: 'Enter Recipe Name',
		authorFilter: false,
		recipeFilter: true,
		testArr: [
			{
				testSub: [1, 2, 3]
			},
			{
				testSub: [4, 5, 6]
			}
		]

	}

	handleFilter = (event) => {
		const searchWord = event.target.value;
		this.setState({ wordEntered: searchWord })
		const newFilter = this.state.data.filter((value) => {
			if (this.state.recipeFilter === true) {
				return value.recipeName.toLowerCase().includes(searchWord.toLowerCase());
			}
			else {
				return value.recipeCreator.toLowerCase().includes(searchWord.toLowerCase());
			}
		});

		if (searchWord === "") {
			this.setState({ filteredData: this.state.data })
		} else {
			this.setState({ filteredData: newFilter })
		}
	};

	changeFilter = (event) => {
		const searchFilter = event.target.value;
		console.log("working")
		if (searchFilter == "authorFilter") {
			this.setState({ authorFilter: true, recipeFilter: false, placeholder: 'Enter Author Name' })
		}
		else {
			this.setState({ authorFilter: false, recipeFilter: true, placeholder: 'Enter Recipe Name' })
		}


	}

	clearInput = () => {
		this.setState({ filteredData: [] })
		this.setState({ wordEntered: [] })
	};

	testLoop = () => {
		let words = ''
		for (let i = 0; i < this.state.data.length; i++){
			words+= (this.state.data[i].ingredientList + ", ");
			
		}
		let wordArr = words.split(',');
		console.log(wordArr)
		return (wordArr.length)
	}

	filterRender = () => {
		if (this.state.filteredData !== 0 && this.state.wordEntered !== '') {
			return <>
				<div className="dataResult">
					{this.state.filteredData.map((card) => {
						const { recipeName, instructions, desciption, imageURL } = card;
						return <CompactRecipeCard card={card}></CompactRecipeCard>
					})}
				</div>
			</>
		}
		else if (this.state.filteredData == 0 && this.state.wordEntered !== '') {
			return <>
				<h3>No Matches!</h3>
			</>
		}
		else {
			return <>
				<div className="dataResult">
					{this.state.data.map((card) => {
						const { recipeName, instructions, desciption, imageURL } = card;
						return <CompactRecipeCard card={card}></CompactRecipeCard>
					})}
				</div>
			</>

		}
	}

	testLol = () =>{
		console.log(this.state.data)
	}

	render() {

		return <>
			{/*sessionStorage.getItem("isAuthenticated") !== "true" &&
      (<Navigate to="/login"/>)*/}
      <div className="card">
      <div className="search input-group container m-5">
        <div className="searchInputs form-outline input-group">
          <input
		    className="form-control-lg"
			style={{width: '400px'}}
            type="text"
            placeholder={this.state.placeholder}
            value={this.state.wordEntered}
            onChange={(e)=>this.handleFilter(e)}
          />
          <div className="searchIcon btn-primary float btn-lg btn fas fa-search">
            {this.state.filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={(e)=>this.clearInput(e)} />
            )}
          </div>
        </div>
        
          <label for="membership" className="mt-2 me-2"><span>Search by:</span></label>
		  <div>
            <select className="form-select form-control mt-1" name="membership" id="membership" onChange={(e)=>this.changeFilter(e)}>
              <option 
                value="recipeFilter" 
                >Recipe</option>
              <option 
                value="authorFilter"
                >Author</option>
            </select>
			
        </div>
		</div>
		
        {this.filterRender()}
      </div>

		</>
	}
	async componentDidMount() {
		let data = await this.accountRepository.getAllRecipes()
		this.setState({ data })
		/*this.state.data[0]["ingredients"] = ["bread", "butter"]
		this.setState({...data})
		this.state.data[1]["ingredients"] = ["eggs", "butter"]
		this.setState({...data})

		const { testArr } = { ...this.state}
		const currentState = testArr
		this.state.testArr[0]["testSub2"] = [7, 8, 9]
		this.setState({ testArr })
		this.state.testArr[1]["testSub2"] = [10, 11, 12]
		this.setState({...testArr})*/
		


		/*for (let i = 0; i < this.state.data.length; i++){
			let words = this.state.data[i].ingredientList;
			let wordArr = words.split(',');
			console.log(wordArr)
			(this.state.data[i])["ingredients"] = wordArr
		}*/
		//const ingredients = []
		//console.log(this.state.data)
		/*for (let i = 0; i < this.state.dath.length; i++){
			var ingredientsArr = await this.accountRepository.returnIngredientsForRecipe(this.state.data[i].recipeID)
			console.log("hitest")
			for(var keyX in ingredientsArr){
				ingredients.push(ingredientsArr[keyX].ingredientName)
			}
			this.state.data[i].ingredients = ingredients
		}*/
		//actual scuffed
		
	}
}


export default Search;