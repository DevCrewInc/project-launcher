import React from 'react'
import 'styles/globals.css';

const Tablas = () => {
    return (
        <>
            <table className = "table-fixed border mx-14 my-5 text-center ">
                <thead className = "bg-gray-200 ">
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
                <tbody className = "">  
                    <tr className = "border">
                        <td className = "px-3">123</td>
                        <td className = "px-3">Proyecto de Química</td>
                        <td className = "px-3">12/11/2021</td>
                        <td className = "px-3">12/12/2021</td>
                        <td className = "px-3">000</td>
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
                    <tr>
                        <td>123</td>
                        <td>Proyecto de Química</td>
                        <td>12/11/2021</td>
                        <td>12/12/2021</td>
                        <td>000</td>
                        <td>Anna</td>
                        <td>En desarrollo</td>
                        <td>
                            <button>Activo</button>
                        </td>
                        <td>
                            <i className = "fas fa-eye "/>
                            <i className = "fas fa-pen "/>
                            <i className = "fas fa-trash"/>
                        </td>
                    </tr>
                </tbody>         
            </table>
            
        </>
    )
}

export default Tablas
