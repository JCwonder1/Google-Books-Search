import React from 'react';


function Navbar(props){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="">
          Google Books Search
        </a>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a onClick={props.toggleStarred}className="nav-link" href="#">
                <i className="fas fa-star" />
                <span className="ml-1">Saved</span>
              </a>
            </li>
          </ul>
          <div className="d-flex float-right h-100">
            <div className="searchbar">
              
                <input
                  onChange={props.handleInputChange}
                  className="search_input"
                  type="text"
                  name=""
                  placeholder="Search..."
                />
                <a
                  href=""
                  onClick={props.handleFormSubmit}
                  className="search_icon"
                >
                  <i className="fas fa-search" />
                </a>
              
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;