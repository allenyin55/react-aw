import React from 'react';
import { Sticky } from 'react-sticky';

export default () =>
  <Sticky topOffset={-10} style={{zIndex: 5}}>
    <header>
      <div className="navbar-spacer">
        <div className="navbar-list d-flex justify-content-center">
          <li className="navbar-item"><a href="#about">About Me</a></li>
          <li className="navbar-item"><a href="#portfolio" >Portfolio</a></li>
          <li className="navbar-item"><a href="#contact">Contact Me</a></li>
          <li className="navbar-item"><a>Random</a></li>
          {/*<li className="navbar-item dropdown">
           <a>My Logs</a>
           <div className="dropdown-content">
           <a href="/books">Books</a>
           <a href="#">Habits</a>
           <a href="#">Learning</a>
           <a href="#">DAJ</a>
           </div>
           </li>*/}
        </div>
      </div>
    </header>
  </Sticky>