import React from 'react'
import './App.scss'

export default function Table() {
  return (
    <>
        <div className='datatable'>
            <table>
                <tr>
                    <th>เลขที่</th>
                    <th className='name-surname'>ซื่อ-นามสกุล</th>
                    <th>อายุ</th>
                    <th>มัธยมศึกษาปีที่</th>
                    <th>ห้อง</th>
                    <th>ส่วนสูง</th>
                    <th>น้ำหนัก</th>
                    <th>แก้ไข</th>
                </tr>
            </table>
        </div>
    </>
  )
}
