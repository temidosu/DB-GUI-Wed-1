import React from 'react';
import { Redirect } from 'react-router-dom';
import './Homestyle.css'
//import { HomeRepository } from '../Api/homeRepository';


export class Home extends React.Component {

    //homeRepo = new HomeRepository();

    state = {
     
    };

    render () {
      return <>
         <nav>

<ul>
   

    <li><a href="#">Home</a></li>

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

    <li><a href="/profileRecipes">My Profile <i class="icon-chevron-down"></i> </a>
        <ul>

         <li><a href="/profileRecipes">Recipes</a></li>
         <li><a href="/profileSettings">Account Settings</a></li>


        </ul>
    </li>


    <li><a href="#">Contact</a></li>

</ul>

</nav>


<div>
<div class="searchBox">

<input class="searchInput"type="text" name="" placeholder="Search"/>
<button class="searchButton" href="#">
    <i class="material-icons">
        search
    </i>
</button>
</div>

</div>
    </>;
  }

    
}

export default Home;