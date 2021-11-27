import React from 'react';
import { Navigate } from 'react-router-dom';
import './Homestyle.css'
import { CompactRecipeCard  } from '../common/CompactRecipeCard';
import { recipes } from '../../DummyData/recipeData';
import { Search } from '../Search/Search';


//import { HomeRepository } from '../Api/homeRepository';


export class Home extends React.Component {

    //homeRepo = new HomeRepository();

    state = {
     
    };

    render () {
      return <>
       {sessionStorage.getItem("isAuthenticated") !== "true" &&
          (<Navigate to="/login"/>)}
        <nav>
            <ul>
                <li><a href="/createRecipe">Recipe Creator <i class="icon-chevron-down"></i></a>   
                    <ul>
                        <li><a href="/createRecipe">Examples</a></li>
                        <li><a href="#">Yours</a></li>
                    </ul>
                </li>
                <li><a href="#">Anouncement Board <i class="icon-chevron-down"></i></a>
                    <ul>
                        <li><a href="#">Updates</a></li>
                    </ul>
                </li>
                <li><a href="#">My Profile <i class="icon-chevron-down"></i> </a>
                    <ul>
                        <li><a href="#">Recipes</a></li>
                        <li><a href="#">Account Settings</a></li>
                    </ul>
                </li>
                <li><a href="/recipeSchedule">Recipe Scheduler</a></li>
                <li><a href="#">Contact</a></li>


            </ul>
        </nav>

        <div>
            <Search/>
        </div>
        

    </>;
  }

    
}

export default Home;