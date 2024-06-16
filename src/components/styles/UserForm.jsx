import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import "./userForm.css"

const UserForm = ({ createUser, update, updateUser, setUpdate, isShow, setIsShow }) => {

    const { handleSubmit, register, reset } = useForm()

    useEffect(() => {
        reset( update )
    }, [ update ])
    

    const submit = ( data ) => { 
        if ( update ) {
            updateUser( "/users", update.id, data )
            setUpdate()
        } else {
            createUser( "/users", data )
        } 
        reset ({
            first_name: "", 
            last_name: "", 
            email: "", 
            password: "",
            birthday: "",
        })
        setIsShow(false)
    }

    const handleclose = () => {
        reset ({
            first_name: "", 
            last_name: "", 
            email: "", 
            password: "",
            birthday: "",
        })
        setIsShow(false)
        setUpdate()
    }


  return (
    <div className={ `userform ${ isShow && "active" }` }>

        <form className='userform_form' onSubmit={ handleSubmit( submit ) }>

            <div className='userform_header'>
                <h2>
                    {
                        update ? (<> Modifica las datos <br /> de usuario </>)
                        :
                        (<> Digita las datos <br /> de usuario </>)
                    }
                </h2>
                <button onClick={ handleclose } className='userform_btnclose' type='button'> X </button>
            </div>

            <div className='userform_item'>
                <label htmlFor='first_name'> Nombres </label>
                <input placeholder="Nombres" {...register('first_name')} id='first_name' type="text" />
            </div>

            <div className='userform_item'>
                <label htmlFor='last_name'> Apellidos </label>
                <input placeholder="Apellidos"  {...register('last_name')} id='last_name' type="text" />
                </div>

            <div className='userform_item'>
                <label htmlFor='email'> em@il </label>
                <input placeholder="example@dominio.com" {...register('email')} id='email' type='email' />
                </div>

            <div className='userform_item'>
                <label htmlFor='password'> Contraseña </label>
                <input placeholder="password123*!" {...register('password')} id='password' type="password" />
            </div>

            <div className='userform_item'>
                <label htmlFor='birthday'> Fecha de Nacimiento </label>
                <input {...register('birthday')} id='birthday' type="date" />
            </div>

            <button className='userform_btnadd'> 
                    {
                        update ? "Modificar usuario"
                        :
                        "Guardar usuario"
                    } 
            </button>
        </form>

    </div>
  )
}

export default UserForm