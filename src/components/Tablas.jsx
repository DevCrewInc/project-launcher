import React from 'react'
import 'styles/globals.css';

const Tablas = () => {
    return (
        <div className = "flex flex-col p-10">
            <div className="space-x-3">
                <i className = "fas fa-rocket fa-lg"></i>
                <span className = "font-bold text-2xl">Proyectos</span>
            </div>

            <div className="my-4 space-x-14 mt-6 cursor-pointer">
                <a className="tabs">Todos</a>
                <a className="tabs">Mis proyectos</a>
            </div>
            <div>
            <table className = "w-full table-fixed mt-2 ">
                <thead className = "truncate text-wrap py-2 bg-gray-200 text-sm text-gray-700 border-2">
                    <tr>
                        <th>Id</th>
                        <th className="w-52">Nombre</th>
                        <th>Inicio</th>
                        <th>Final</th>
                        <th>Id líder</th>
                        <th>Líder</th>
                        <th>Fase</th>
                        <th>Estado</th>
                        <th>Acción</th>
                    </tr>
                </thead> 
                <tbody className = " text-sm text-gray-400 ">  
                    <tr className = "border">
                        <td>
                            <input type="text" placeholder = "123" className ="input-tablas"/>
                        </td>
                        <td>
                            <input type="text" placeholder = "Proyecto Química" className ="input-tablas"/>
                        </td>
                        <td>
                            <input type="text" placeholder = "12/11/2021" className ="input-tablas"/>
                        </td>
                        <td>
                            <input type="text" placeholder = "12/12/2021" className ="input-tablas"/>
                        </td>
                        <td>
                            <input type="text" placeholder = "0000000" className ="input-tablas"/>
                        </td>
                        <td>
                            <input type="text" placeholder = "Lucas" className ="input-tablas"/>
                        </td>
                        <td>
                            <input type="text" placeholder = "En desarrollo" className ="input-tablas"/>
                        </td>
                        
                    { /*                         
                        <td className = "px-3">123</td>
                        <td className = "px-3">Proyecto de Química</td>
                        <td className = "px-3">12/11/2021</td>
                        <td className = "px-3">12/12/2021</td>
                        <td className = "px-3">0000000</td>
                        <td className = "px-3">Anna</td>
                        <td className = "px-3">En desarrollo</td> */}
                        <td className="text-center">
                            <button className = "status-button mx-1 my-1 px-2">Activo</button>
                        </td>
                        <td className = "flex justify-center space-x-2">
                            <i className = "fas fa-eye m-1 p-1 text-gray-400 hover:text-blue-600 cursor-pointer"/>
                            <i className = "fas fa-pen my-1 p-1 text-gray-400 hover:text-yellow-400  cursor-pointer"/>
                            <i className = "fas fa-trash my-1 p-1 text-gray-400 hover:text-red-400  cursor-pointer"/>
                        </td>
                    </tr>
                </tbody>         
            </table>
            </div>
            
        </div>
    )
}

export default Tablas
