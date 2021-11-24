import { useQuery } from '@apollo/client';
import ModalDetalleProyecto from 'components/ModalDetalleProyecto';
import React from 'react';
import { useEffect } from 'react';


const TablaProyectos = ({propsTablas, nombreQuery,title}) => {

    const{data,error,loading} = useQuery(propsTablas);

    useEffect(() => {
        if (data){
            console.log('datos proyectos', data[nombreQuery]);
        }
        
    },[data]);

    return (

        <div >
           
            <div className="my-4 space-x-2 mt-8 cursor-pointer">
                <a className="tabs">Todos</a>
                <a className="tabs">Mis proyectos</a>
            </div>
            <div>
            <table className = "w-full table-auto mt-4">
                <thead className = "thead-color leading-10 text-sm text-gray-700 border-1 text-center">
                    <tr>
                        <th>Id</th>
                        <th className="w-2" >Nombre</th>
                        <th >Inicio y Fin</th>
                        <th >Identificación</th>
                        <th >Nombre Líder</th>
                        <th >Estado</th>
                        <th >Fase</th>
                        <th >Acción</th>
                    </tr>
                </thead>
                {data &&
                data[nombreQuery].map((proyecto) => {
                    return(
                        <>
                            <FilasTablaProyectos proyecto={proyecto}/>
                        </>
                    )
                })}
                
            </table>
        </div>
    </div>
    )
}

const FilasTablaProyectos = ({proyecto}) =>{
    return(
        <tbody className = "tbody-border text-sm text-gray-400">  
        <tr>
            <td className="text-center">
                <input type="text" placeholder = {proyecto._id} className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2"/>
            </td>
            <td className="text-center">
                <input type="text" placeholder = {proyecto.nombre} className ="overflow-hidden whitespace-nowrap overflow-ellipsis input-tablas"/>
            </td> 
            <td className="p-2 flex justify-center">
                <input type="text" placeholder = {proyecto.fechaInicio} className ="text-center input-tablas w-20"/>
            </td>
            <td className="text-center">
                <input type="text" placeholder = {proyecto.lider.identificacion} className ="text-center input-tablas w-24"/>
            </td>
            <td className="text-center">
                <input type="text" placeholder = {proyecto.lider.nombre} className ="text-center input-tablas w-38"/>
            </td>
            <td className="text-center">
                <input type="text" placeholder = {proyecto.faseProyecto} className ="text-center input-tablas w-24"/>
            </td>
            <td className = "text-center">
                {proyecto.estadoProyecto === "ACTIVO" ? <button className = "status-button mx-1 my-1 px-2">{proyecto.estadoProyecto}</button> : (
                    <button className = "inactivo-button px-2 my-1">{proyecto.estadoProyecto}</button> 
                )}
            </td>

            <td className = "flex justify-center items-center space-x-2">
                <ModalDetalleProyecto/>
                <i className = "fas fa-pen my-1 p-1 text-gray-400 hover:text-yellow-400 cursor-pointer"/>
                <i className = "fas fa-trash my-1 p-1 text-gray-400 hover:text-red-400 cursor-pointer"/>
            </td>
        </tr>
    </tbody>
    )
}

export default TablaProyectos;
