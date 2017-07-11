import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {

  return (
      <navbar>
     <ul className="nav nav-tabs">
              <button>
              <Link to={'/campuses'}>HOME</Link>
              </button>
               <button>
              <Link to={'/students'}>STUDENTS</Link>
              </button>
            </ul>
            </navbar>
  );
}

export default NavBar;

