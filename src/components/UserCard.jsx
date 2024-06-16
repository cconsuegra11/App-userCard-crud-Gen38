import React from 'react'
// import { useForm } from "react-hook-form"
// import 'boxicons'
import "./styles/userCard.css"


const UserCard = ({ user, deleteUser, setUpdate, setIsShow }) => {

  const handleDelete = () => {
    deleteUser( "/users", user.id )
  } 

  const handleEdit = () => {
    setUpdate( user )
    setIsShow(true)
  } 
    
    return (
    
    <article className='usercard'>
        <div className='usercard_header'>
            <img className='usercard_img' src='user-icon-2048x2048-ihoxz4vq.png' alt='imágen de usuario'></img>
            <h2 className='usercard_name'>{ user.first_name } { user.last_name } <br/> </h2>
        </div>
        <hr />

        <ul className='usercard_list'>
            <li className='usercard_item'><span>
                  <i className='bx bxs-envelope'></i>
                </span>  <span className='usercard_span'>
                    { user.email }
                </span>
            </li>

            <li className='usercard_item'><span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height= {"20"} width= {"20"}>
                    <path d="m15 1.784-.796.795a1.125 1.125 0 1 0 1.591 0L15 1.784ZM12 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L12 1.784ZM9 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L9 1.784ZM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 0 1 1.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 0 1 1.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 0 0-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 0 1 1.5 0v.797ZM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 0 1 2.585.364 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 2.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0 0 12 12.75ZM21.75 18.131a2.604 2.604 0 0 0-1.915.165 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.604 2.604 0 0 0-1.915-.165v2.494c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494Z" />
                    </svg>
                </span>  <span>
                    { user.birthday }
                </span>
            </li>
        </ul>
        <hr />
        <div className='usercard_btn'>
            <button className='usercard_button' onClick={ handleDelete }> 
              <i className='bx bxs-trash-alt'></i> 
            </button>
            <button className='usercard_button' onClick={ handleEdit }> 
              <i className='bx bxs-edit-alt' ></i> 
            </button>
        </div>
    </article>
  )
}

export default UserCard
