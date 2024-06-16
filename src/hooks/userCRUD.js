import axios from "axios"
import { useState } from "react"


const urlBase = `https://users-crud.academlo.tech`

const userCRUD = () => {
    const [apiData, setapiData] = useState()

    // Read - Leer, conseguir
        const getApi = (path) => {
            const url = `${urlBase}${path}/`
            axios.get(url)
                .then( resp => setapiData( resp.data ))
                .catch( error => console.log( error ))
    }

    
    // Create - Crear Nuevo
        const postApi = (path, data) => {
            const url = `${urlBase}${path}/`
            axios.post(url, data)
                .then( resp => setapiData([ ...apiData, resp.data ]))
                .catch( error => console.log( error ))
    }


        // Delete - Borrar
        const deleteApi = (path, id) => {
            const url = `${urlBase}${path}/${id}/`
            axios.delete(url)
                .then( () => setapiData( apiData.filter(( user ) => user.id!==id) ))
                .catch( error => console.log( error ))
        }


        // Update - Editar
        const patchApi = (path, id, data) => {
            const url = `${urlBase}${path}/${id}/`
            axios.patch(url, data)
                .then( (resp) => setapiData(apiData.map((user) => user.id===id ? resp.data : user )))
                .catch( error => console.log( error ))
    }


    return [ apiData, getApi, postApi, deleteApi, patchApi]

}

export default userCRUD