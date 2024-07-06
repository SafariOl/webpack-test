import React from 'react';
import {Link, Outlet} from 'react-router-dom'
import * as classes from '../styles/main.scss';
import jpg from '../assets/pexels-buidiscovery-19906586.jpg'

export default function App() {
  return (
      <>
        <nav className={classes.nav}>
          <ul className={classes.ul}>
            <li className={classes.li}>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <h1>PLATFORM = {PLATFORM}</h1>
        <div>
          <img src={jpg} alt="" />
        </div>
        <div>
          <p>wdwadda wadaw</p>
        </div>
        <Outlet />
      </>
  )
}
