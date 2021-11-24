import { useQuery } from '@apollo/client';
import ModalDetalleProyecto from 'components/ModalDetalleProyecto';
import UpperBar from 'components/UpperBar';
import React from 'react';
import { useEffect } from 'react';


const TablaProyectos = ({propsTablas, nombreQuery}) => {

    const{data,error,loading} = useQuery(propsTablas);

    useEffect(() => {
        if (data){
            console.log('datos proyectos', data[nombreQuery]);
        }
        
    },[data]);

    return (

        <div className = "flex flex-col p-10">
            <UpperBar title="Proyecto" icon="M3.655 9.565L8.1125 7.9925C7.19217 9.23143 6.40176 10.5618 5.75375 11.9625L3.655 9.565ZM0.55875 9.82375L4.6875 14.5412L4.09 16.0362C3.99907 16.2631 3.97665 16.5117 4.02553 16.7512C4.07441 16.9907 4.19243 17.2106 4.365 17.3837L4.75875 17.7762C2.62875 20.1762 1.45375 22.6875 0.31375 26.105C0.2403 26.3252 0.229641 26.5616 0.282967 26.7876C0.336292 27.0135 0.451496 27.2202 0.615665 27.3843C0.779834 27.5485 0.98648 27.6637 1.21244 27.717C1.43841 27.7704 1.67475 27.7597 1.895 27.6862C5.3125 26.5462 7.82375 25.3712 10.2238 23.2412L10.6163 23.6338C10.7892 23.8065 11.0091 23.9248 11.2486 23.9739C11.4881 24.023 11.7367 24.0008 11.9638 23.91L13.4588 23.3125L18.1763 27.4413C18.3299 27.5758 18.5142 27.6707 18.7131 27.7176C18.9119 27.7644 19.1192 27.7618 19.3168 27.71C19.5144 27.6582 19.6963 27.5588 19.8465 27.4204C19.9968 27.282 20.1109 27.1089 20.1788 26.9163L23.9113 16.3413C26.3904 13.4077 27.7504 9.69083 27.75 5.85V1.5C27.75 1.16848 27.6183 0.850537 27.3839 0.616117C27.1495 0.381696 26.8315 0.25 26.5 0.25H22.15C18.3097 0.249462 14.5934 1.609 11.66 4.0875L1.085 7.82125C0.892552 7.88921 0.719671 8.00325 0.581459 8.15342C0.443246 8.30359 0.343907 8.48532 0.292118 8.68274C0.24033 8.88015 0.237667 9.08724 0.284363 9.28592C0.331059 9.4846 0.425694 9.66882 0.56 9.8225L0.55875 9.82375ZM3.60625 24.3938C4.39125 22.4988 5.27125 20.9912 6.53 19.5475L8.4525 21.47C7.00875 22.7287 5.50125 23.6088 3.60625 24.3938V24.3938ZM11.8013 21.2837L11.1338 20.6162L7.38375 16.8663L6.71625 16.1987L7.60375 13.98C8.41821 11.9446 9.5618 10.0569 10.9888 8.3925L11.7088 7.55125C12.9998 6.04515 14.6014 4.83623 16.4037 4.00747C18.206 3.17871 20.1663 2.74974 22.15 2.75H25.25V5.85C25.2503 7.83371 24.8213 9.79399 23.9925 11.5963C23.1638 13.3986 21.9549 15.0002 20.4488 16.2913L19.6075 17.0113C17.9431 18.4382 16.0554 19.5817 14.02 20.3963L11.8013 21.2837V21.2837ZM18.435 24.345L16.0375 22.2475C17.4382 21.5995 18.7686 20.8091 20.0075 19.8888L18.435 24.345V24.345ZM17.75 9C17.75 8.66848 17.8817 8.35054 18.1161 8.11612C18.3505 7.8817 18.6685 7.75 19 7.75C19.3315 7.75 19.6495 7.8817 19.8839 8.11612C20.1183 8.35054 20.25 8.66848 20.25 9C20.25 9.33152 20.1183 9.64946 19.8839 9.88388C19.6495 10.1183 19.3315 10.25 19 10.25C18.6685 10.25 18.3505 10.1183 18.1161 9.88388C17.8817 9.64946 17.75 9.33152 17.75 9V9ZM19 5.25C18.0054 5.25 17.0516 5.64509 16.3484 6.34835C15.6451 7.05161 15.25 8.00544 15.25 9C15.25 9.99456 15.6451 10.9484 16.3484 11.6517C17.0516 12.3549 18.0054 12.75 19 12.75C19.9946 12.75 20.9484 12.3549 21.6517 11.6517C22.3549 10.9484 22.75 9.99456 22.75 9C22.75 8.00544 22.3549 7.05161 21.6517 6.34835C20.9484 5.64509 19.9946 5.25 19 5.25Z"/>

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