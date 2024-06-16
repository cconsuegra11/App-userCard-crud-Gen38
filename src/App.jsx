import { useEffect, useState } from 'react'
import './App.css'
import userCRUD from './hooks/userCRUD'
import UserCard from './components/UserCard'
import UserForm from './components/styles/UserForm'

function App() {

  const [ update, setUpdate ] = useState()
  const [isShow, setIsShow] = useState(false) //Para dar funcionalidad al botón de cierre
  const [ users, getUsers, createUser, deleteUser, updateUser ] = userCRUD()

   useEffect(() => {
    getUsers( `/users` )
  }, [])

  
  const handleForm = () => {
    setIsShow(true)
  }

  return (
    <div className='app'>

      <div className='app_header'>
        <h1 className='app_title'>REGISTRO DE USUARIOS</h1>
        <button className='userform_btnadd2' onClick = { handleForm }>
          Crear Usuario
        </button>
      </div>

      <UserForm
        createUser={ createUser }
        update = { update }
        updateUser = { updateUser }
        setUpdate = { setUpdate }
        isShow = { isShow }
        setIsShow = { setIsShow }

      />

      <div className='app_container'> {
        users?.map((user) => ( 
          <UserCard 
            key = { user.id } 
            user = { user }
            deleteUser = { deleteUser }
            setUpdate = { setUpdate }
            setIsShow = { setIsShow } /> ))        
      }     
      </div>
    </div>
  )
}

export default App
