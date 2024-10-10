import React from 'react';

function Navbar({ toggleAddStudent }) {
  return (
    <>
      <nav className='navbar'>
        <div className="searchbar">
          <form onSubmit={(event) => event.preventDefault()} role="search" className=''>
            <input id="search" type="search" placeholder="ค้นหานักเรียน" autoFocus required />
            <button type="submit"><i className="fa-solid fa-magnifying-glass fa-2xl"></i></button>
          </form>
        </div>
        
        <div className="add-students">
          <span>
            <button className='add' onClick={toggleAddStudent}>
              <div className='add-button'>
                <i className="fa-solid fa-user-plus fa-2xl"></i>
                <h1>เพิ่มข้อมูลนักเรียน</h1>
              </div>
            </button>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
