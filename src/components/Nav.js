import React from "react";
import "./styling/Nav.css";

function Nav({ currentPage, handlePageChange }) {
  // const style = {
  //   link {
  //     color: "white",
  //   }
  // }
  return (
    <>
      <div className="container-fluid">

        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container-fluid the-navbar">
            <ul className='navbar-nav name'>

              <li className='nav-item'>
                <a href='#about' onClick={() => handlePageChange('About')}
                  className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                  id="my-name"
                >
                  Leslie Patino
                </a>
              </li>
            </ul>


            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a href='#about' onClick={() => handlePageChange('About')}
                  className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} 
                  // style={style.link}
                  id="about-link"
                  >
                  About Me
                </a>
              </li>

              <li className='nav-item'>
                <a href='#portfolio' onClick={() => handlePageChange('Portfolio')}
                  className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                  // style={style.link}
                  id="portfolio-link"
                  >
                  Portfolio
                </a>
              </li>

              <li className='nav-item'>
                <a href='#resume' onClick={() => handlePageChange('Resume')}
                  className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                  // style={style.link}
                  id="resume-link"
                  >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;