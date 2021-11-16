import React from 'react'
import 'styles/globals.css';
import fotoman from 'fotoman.jpeg'

const Usuarios = () => {
    return (
        <div className = "flex flex-col p-10">
        <div className="space-x-3">
            <i className = "fas fa-rocket fa-lg"></i>
            <span className = "font-bold text-2xl">Usuarios</span>
        </div>

        <div className="my-4 space-x-2 mt-8 cursor-pointer">
            <a className="tabs">Todos</a>
            <a className="tabs">Mis proyectos</a>
        </div>
        <div>
        <table className = "w-full table-fixed mt-4 border-2">
            <thead className = "leading-8 bg-gray-200 text-sm text-gray-700 border-1 text-center ">
                <tr>
                    <th>Id</th>
                    <th>Nombre Usuario</th>
                    <th>Perfil</th>
                    <th>Documento</th>
                    <th>Rol</th>
                    <th>Estado</th>
                    <th>Acción</th>
                </tr>
            </thead> 
            <tbody className = "text-sm text-gray-400 ">  
                <tr className = "border align-middle">
                    <td>
                        <input type="text" placeholder = "123" className ="input-tablas"/>
                    </td>
                    <td>
                        <input type="text" placeholder = "Juan Camilo Pérez" className ="input-tablas"/>
                    </td>
                    <td className="p-1 flex justify-center">
                        <img className="rounded-full w-10" src={fotoman}/>
                    </td>
                    <td>
                        <input type="text" placeholder = "10293847" className ="input-tablas"/>
                    </td>
                    <td className="text-center">
                        <input className="text-gray-600 cursor-pointer bg-white" type="button" value="Estudiante"/>
                    </td>
                    <td className="text-center">
                        <button className = "status-button mx-1 my-1 px-2">Activo</button>
                    </td>
                    <td className = "space-x-2 text-center">
                        <i className = "fas fa-eye m-1 p-1 text-gray-400 hover:text-blue-600 cursor-pointer"/>
                        <i className = "fas fa-pen my-1 p-1 text-gray-400 hover:text-yellow-400 cursor-pointer"/>
                        <i className = "fas fa-trash my-1 p-1 text-gray-400 hover:text-red-400 cursor-pointer"/>
                    </td>
                </tr>
            </tbody>         
        </table>
        </div>
            
    </div>
    )
}

export default Usuarios
