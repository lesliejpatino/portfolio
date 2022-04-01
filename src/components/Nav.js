import React from "react";
import "./styling/Nav.css";

function Nav({ currentPage, handlePageChange }) {
  const style = {
    link: {
      color: "grey",
    }
  }
  return (
    <>
      <div class="col-12 pt-2 nav-bar">
        <div class="row justify-content-between">
          <div className="col-3">
            <p className="mx-4" id="my-name">
              Leslie Patino
            </p>
          </div>


          <div className="col-3">

            <ul className='nav nav-tabs'>
              <li className='nav-item'>
                <a href='#about' onClick={() => handlePageChange('About')}
                  className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                  style={style.link}>
                  About Me
                </a>
              </li>

              <li className='nav-item'>
                <a href='#portfolio' onClick={() => handlePageChange('Portfolio')}
                  className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                  style={style.link}>
                  Portfolio
                </a>
              </li>

              <li className='nav-item'>
                <a href='#resume' onClick={() => handlePageChange('Resume')}
                  className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                  style={style.link}>
                  Resume
                </a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;