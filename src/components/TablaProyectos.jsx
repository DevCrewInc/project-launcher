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
            <table className = "w-full table-fixed mt-4">
                <thead className = "thead-color leading-10 text-sm text-gray-700 border-1 text-center">
                    <tr>
                        <th>Id</th>
                        <th className="w-32">Nombre</th>
                        <th>Inicia</th>
                        <th>Finaliza</th>
                        <th>Id Líder</th>
                        <th>Líder</th>
                        <th>Fase</th>
                        <th>Estado</th>
                        <th>Acción</th>
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
        <tr className = "align-middle">
            <td>
                <input type="text" placeholder = {proyecto._id} className ="input-tablas"/>
            </td>
            <td>
                <input type="text" placeholder = {proyecto.nombre} className ="input-tablas"/>
            </td> 
            <td className="p-2 flex justify-center">
                <input type="text" placeholder = {proyecto.fechaInicio} className ="input-tablas"/>
            </td>
            <td>
                <input type="text" placeholder = {proyecto.fechaFin} className ="input-tablas"/>
            </td>
            <td>
                <input type="text" placeholder = {proyecto.lider.identificacion} className ="input-tablas"/>
            </td>
            <td>
                <input type="text" placeholder = {proyecto.lider.nombre} className ="input-tablas"/>
            </td>
            <td>
                <input type="text" placeholder = {proyecto.faseProyecto} className ="input-tablas"/>
            </td>
            <td className = "text-center">
                {proyecto.estadoProyecto === "ACTIVO" ? <button className = "status-button mx-1 my-1 px-2">{proyecto.estadoProyecto}</button> : (
                    <button className = "inactivo-button mx-1 my-1 px-2">{proyecto.estadoProyecto}</button> 
                )}
            </td>
            <td className = "flex justify-center space-x-2">
                <ModalDetalleProyecto/>
                <i className = "fas fa-pen my-1 p-1 text-gray-400 hover:text-yellow-400 cursor-pointer"/>
                <i className = "fas fa-trash my-1 p-1 text-gray-400 hover:text-red-400  cursor-pointer"/>
            </td>
        </tr>
    </tbody>
    )
}

export default TablaProyectos;
