import React from 'react';
import { Navigate } from 'react-router-dom';
import { CompactRecipeCard  } from '../common/CompactRecipeCard';
import { recipes } from '../../DummyData/recipeData';
import { CompactRecipeCardList } from '../common/CompactCardList';
import { FaStar } from "react-icons/fa"
import './review.css'


export class ViewRecipe extends React.Component {

    state = {
        card: {
            recipeID: 1,
            recipeName: "test",
            instructions: "",
            description: "",
            ingredients: [],
            imageURL: "",
            author: ""
        },
        rating: 0,
        buttonVal: "Save"
      }

    
    

    returnRecipe(){
        recipes.map((cardImport) => {   
            if(cardImport.recipeID == sessionStorage.getItem("recipeID")){
                return cardImport
            }
            else{
                return 10
            }
        })
    }

    componentDidMount() {
        for (var key in recipes) {
            if (recipes[key].recipeID == sessionStorage.getItem("recipeID")){
                this.setState({card:recipes[key]})
            }
        }
    }
    

    render () {
        return <>
         <div>
         <h1>Review and Save Recipe!</h1>
         <div id="CompactRecipeCard">
        <li className="list-group mb-0"></li>
        {
            //  !props.createdRecipes.length && <li className= "list-group-item">No recipe created yet!</li>
        }
        {
            //works but this is incomplete
            <li className="card rounded container mb-4 list-group p-0">
                
                <div className="card-header">
                    {/* [1, 2, 3, 4, 5].map(x => (<i key={x} className={(x > props.card.rating ? 'empty-star' : 'full-star')}></i>)) */}
                </div>
                <div className="card-body">
                    <div className="row mt-1 mb-1 ms-1">
                        <h2 className="h4" >
                            {this.state.card.recipeName}
                        </h2>
						
                        <img src = {this.state.card.imageURL}></img>
                        <div className="text-muted h5">{this.state.card.instructions}</div>
                        <div>
                        <h4>Author: {this.state.card.author}</h4>
                        </div>

						<div >
						{
						this.state.card.ingredients.map((currentIng, i) => <li key={i}>
						<div>
							<p >{currentIng}</p>
						</div>
						</li>)
						}

						</div>
					
						
                        {/* Add ingredients and creator*/}
                    </div>
                    <div className="row mt-1 mb-1 ms-1">
                        <div className="text-muted"><p className="h4">"{this.state.card.description}"</p></div>
                    </div>
                    <div>

                    </div>
                </div>
            </li>
        }</div>
         

         <div>
         <h3>Review</h3>
            {[ ...Array(5)].map((star, i) =>{
                const ratingValue = i + 1;
                 return (
                    <label>
                        <input type="radio" name="rating" value = {ratingValue} onClick={() => this.setState({rating:ratingValue})}/>
                        <FaStar classname="star" color={ratingValue <= this.state.rating ? "#ffc107" : "#e4e5e9"}size = {50}/>
                    </label>)
            })
            }
         </div>
         </div>

         <div>
             <h3>Save Recipe!</h3>
             
         </div>
         <div>
         <button type="button">{this.state.value}</button>
         </div>
  
      </>;


    }

}

export default ViewRecipe;