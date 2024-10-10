import React from 'react';

function Add_students({ toggleAddStudent }) {
  return (
    <>
      <div className="add_students_body show">
        <h1>เพิ่มข้อมูลนักเรียน</h1>
        <form className='add_students'>
          <input type="text" className='name' placeholder="ชื่อ นามสกุล" /> 

          <span>
            <input type="text" className='age' placeholder="อายุ" /> 
            <input type="text" className='year' placeholder="มัธยมศึกษาปีที่" /> 
            <input type="text" className='room' placeholder="ห้อง" /> 
          </span>

          <span>
            <input type="text" className='height' placeholder="ส่วนสูง" /> 
            <input type="text" className='weight' placeholder="น้ำหนัก" /> 
          </span>
          
          <span>
            <button className='add'>เพิ่ม</button>
            <button className='cancle' type="button" onClick={toggleAddStudent}>ยกเลิก</button>
          </span>
        </form>
      </div>
    </>
  );
}

export default Add_students;
