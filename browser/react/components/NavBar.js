import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <navbar>
        <ul className="nav nav-tabs">
            <Link to={'/campuses'}>
              <button type="button" className="btn btn-default btn-lg">HOME
              </button>
            </Link>
            <Link to={'/students'}>
              <button type="button" className="btn btn-default btn-lg"> STUDENTS
              </button>
            </Link>
        </ul>
    </navbar>
  );
}

export default NavBar;

