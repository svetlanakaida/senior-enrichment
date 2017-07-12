import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
      <navbar>
     <ul className="nav nav-tabs">
              <button type="button" className="btn btn-default btn-lg">
              <Link to={'/campuses'}>HOME</Link>
              </button>
               <button type="button" className="btn btn-default btn-lg">
              <Link to={'/students'}>STUDENTS</Link>
              </button>
            </ul>
            </navbar>
  );
}

export default NavBar;

