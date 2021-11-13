import React from 'react'
import 'styles/globals.css';

const Tablas = () => {
    return (
        <>
            <div>
            <i className = "fas fa-rocket "></i>
            <span className = "font-bold">Proyectos</span>
            </div>

            <div className="flex">
                <button className=" p-3 text-gray-400 hover:text-gray-800 ">Todos</button>
                <button className=" p-3 text-gray-400 hover:text-gray-800 ">Mis proyectos</button>
            </div>
         
            <table className = "table-fixed border mx-14 my-5 text-center ">
                <thead className = "bg-gray-200 text-sm text-gray-700">
                    <tr className = "">
                        <th className = "p-1.5">Id</th>
                        <th className = "p-1.5">Nombre del proyecto</th>
                        <th className = "p-1.5">Inicio</th>
                        <th className = "p-1.5">Final</th>
                        <th className = "p-1.5">Id lider</th>
                        <th className = "p-1.5">Responsable</th>
                        <th className = "p-1.5">Fase</th>
                        <th className = "p-1.5">Estado</th>
                        <th className = "p-1.5">Acción</th>
                    </tr>
                </thead> 
                <tbody className = "text-sm text-gray-600">  
                    <tr className = "border">
                        <td className = "px-3">123</td>
                        <td className = "px-3">Proyecto de Química</td>
                        <td className = "px-3">12/11/2021</td>
                        <td className = "px-3">12/12/2021</td>
                        <td className = "px-3">0000000</td>
                        <td className = "px-3">Anna</td>
                        <td className = "px-3">En desarrollo</td>
                        <td >
                            <button className = "colors mx-1 my-1 px-2">Activo</button>
                        </td>
                        <td className = "flex">
                            <i className = "fas fa-eye m-1 p-1 text-gray-400 hover:text-gray-300 cursor-pointer"/>
                            <i className = "fas fa-pen my-1 p-1 text-gray-400 hover:text-gray-300  cursor-pointer"/>
                            <i className = "fas fa-trash my-1 p-1 text-gray-400 hover:text-gray-300  cursor-pointer"/>
                        </td>
                    </tr>
                    <tr className = "border">
                        <td className = "px-3">123</td>
                        <td className = "px-3">Proyecto de Química</td>
                        <td className = "px-3">12/11/2021</td>
                        <td className = "px-3">12/12/2021</td>
                        <td className = "px-3">0000000</td>
                        <td className = "px-3">Anna</td>
                        <td className = "px-3">En desarrollo</td>
                        <td >
                            <button className = "colors mx-1 my-1 px-2">Activo</button>
                        </td>
                        <td className = "flex">
                            <i className = "fas fa-eye m-1 p-1 text-gray-400 hover:text-gray-300 cursor-pointer"/>
                            <i className = "fas fa-pen my-1 p-1 text-gray-400 hover:text-gray-300  cursor-pointer"/>
                            <i className = "fas fa-trash my-1 p-1 text-gray-400 hover:text-gray-300  cursor-pointer"/>
                        </td>
                    </tr>
                </tbody>         
            </table>
            
        </>
    )
}

export default Tablas
