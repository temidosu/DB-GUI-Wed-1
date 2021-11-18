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

    <li><a href="#">Recipe Creator <i class="icon-chevron-down"></i></a>
      

        <ul>

            <li><a href="#">Examples</a></li>

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


    <li><a href="#">Contact</a></li>

</ul>

</nav>


<div>
<form id="form" role="search">
  <input type="search" id="query" name="q"
   placeholder="Search..."
   aria-label="Search through site content"/>
  <button>Search</button>
</form>
</div>
    </>;
  }

    
}

export default Home;