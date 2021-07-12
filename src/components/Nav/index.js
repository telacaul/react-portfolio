import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import { Link } from 'react-router-dom';


function Nav(props) {
  const {
      // categories
      categories = [],
      setCurrentCategory,
      currentCategory,
      //about
      aboutSelected,
      setAboutSelected
  } = props;

  useEffect(() => {
      document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);


  return (
    <div>
      <Link href="/">
          <h3 className="float-md-start mb-0" id="full-name" >Tela A. Caul</h3>
      </Link>
            
      <nav class="navbar" className="nav nav-masthead justify-content-center float-md-end">
          <a class="navbar-item" className="nav-link active" aria-current="page" href="#about" onClick={() => setAboutSelected(true)}>
              About Me
          </a>
          {categories.map((category) => (
              <a class="navbar-item" className={`nav-link ${currentCategory.name === category.name && !aboutSelected && 'navActive'}`} key={category.name} href={category.name}>
                  <span onClick={(e) => {
                      e.preventDefault()
                      setCurrentCategory(category.name);
                  console.log(category);
                  setAboutSelected(false)}}>
                      {capitalizeFirstLetter(category.name)}
                  </span>
              </a>
          ))}
      </nav>
    </div>
  )
}


export default Nav;