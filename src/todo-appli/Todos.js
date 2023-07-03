import React from 'react'
import SideNav from './SideNav'
import MainSection from './MainSection'
import "./Todos.css"
export default function Todos() {
  return (
    <div>
        <h1>Add Todo Application</h1>
        <div className ="row">
            <div className='col-md-2'>
                <SideNav></SideNav>
            </div>
            <div className='col-md-10'>
                <MainSection>
                  
                </MainSection>
            </div>
        </div>
    </div>
  )
}
