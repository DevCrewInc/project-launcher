import React from 'react'
import 'styles/globals.css';

const Tablas = () => {
    return (
        <div className = "flex flex-col p-10">
            <div>
                <i className = "fas fa-rocket px-3"></i>
                <span className = "font-bold text-2xl">Proyectos</span>
            </div>

            <div className="my-4">
                <button className="p-3 text-gray-400 text-lg">Todos</button>
                <button className=" p-3 text-gray-400 text-lg">Mis proyectos</button>
            </div>
            <div>
            <table className = "table-auto border text-center">
                <thead className = "bg-gray-200 text-sm text-gray-700">
                    <tr>
                        <th className = "p-1.5">Id</th>
                        <th className = "p-1.5 w-1/5">Nombre del Proyecto</th>
                        <th className = "p-1.5">Inicio</th>
                        <th className = "p-1.5">Final</th>
                        <th className = "p-1.5">Id lider</th>
                        <th className = "p-1.5">Responsable</th>
                        <th className = "p-1.5">Fase</th>
                        <th className = "p-1.5">Estado</th>
                        <th className = "p-1.5">Acción</th>
                    </tr>
                </thead> 
                <tbody className = "text-sm text-gray-600 ">  
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
            </div>
            
        </div>
    )
}

export default Tablas
