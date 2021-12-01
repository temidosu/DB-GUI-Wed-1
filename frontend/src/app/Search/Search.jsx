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
		ingredientData: []

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

		/*let ingredientDataTemp = this.state.data.filter(function(item) {
			for (var key in this.state.ingredientsIncluded) {
				if(item[key].ingredientList.includes(this.state.ingredientsIncluded[key]) === false){
					return false
				}
			}
			return true;
		  });

		console.log(ingredientDataTemp)*/
		



    }

	render() {

		return <>
			{sessionStorage.getItem("isAuthenticated") !== "true" &&
      (<Navigate to="/login"/>)}
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

		<div className ="mt-2 ms-0 me-4">
	
			<label htmlFor="ingredients"><span>Ingredients:</span></label>
			<select name = "ingredients" required="true" className = "selectpicker form-control" multiple data-selected-text-format="count > 3" title = "Select Ingredients" onChange={event => this.addIngredient(event.target.value)}>
				{this.state.ingredientList.map((data, i) =>
					<option key={i} value={data}>{data}</option>
				)};
			</select>Ingredients to filter by: 
				{this.state.ingredientsIncluded.map((ing, i) =>
					<span key = {i}> {ing}, </span>)}


		</div>
        
          <label for="membership" className="mt-4 me-2"><span>Search by:</span></label>
		  <div>
            <select className="form-select form-control mt-3" name="membership" id="membership" onChange={(e)=>this.changeFilter(e)}>
              <option 
                value="recipeFilter" 
                >Recipe</option>
              <option 
                value="authorFilter"
                >Author</option>
            </select>
			
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


	
		
	}
}


export default Search;