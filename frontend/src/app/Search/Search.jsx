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
		ingredientList: [],
		ingredientsIncluded: [],
		ingredientsNotIncluded: [],

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

	

	handleCheck(ingredient) {
        return this.state.ingredientsIncluded.some(ing => ing === ingredient);
    }

	removeIngredient(ing) {
        this.setState({
            ingredientsIncluded: this.state.ingredientsIncluded.filter(function(ingredient) { 
            	return ingredient !== ing 
        })
    });
    }

	addIngredient(ingredient) {

        
        if (!this.handleCheck(ingredient)) {
        	let newIng = this.state.ingredientsIncluded
			newIng.push(ingredient);
			this.setState({ingredientsIncluded: newIng})
		
        }
        else {
            this.removeIngredient(ingredient);
        }
    }

	render() {

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
		<div>

		<div className="col-3 ms-1 mb-3">
			<label htmlFor="ingredients">Ingredients</label>
			<select name = "ingredients" required="true" className = "selectpicker form-control" multiple data-selected-text-format="count > 3" title = "Select Ingredients" onChange={event => this.addIngredient(event.target.value)}>
				{this.state.ingredientList.map((data, i) =>
					<option key={i} value={data}>{data}</option>
				)};
			</select>Ingredients selected: 
				{this.state.ingredientsIncluded.map((ing, i) =>
					<span key = {i}> {ing}, </span>)}
		</div>



		</div>
		<div>
        {this.filterRender()}
		</div>
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
		let ingredientArray = []
		for (let i = 0; i < this.state.data.length; i++){
			let words = this.state.data[i].ingredientList;
			let wordArr = words.split(',');
			for (let j =0; j< wordArr.length; j++){
				let wordPush = wordArr[j]
				ingredientArray.push(wordPush.toLowerCase())
			}
			
		}
		ingredientArray.sort()
		let uniqingredientArray = [...new Set(ingredientArray)];
		this.setState({ingredientList: uniqingredientArray})


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