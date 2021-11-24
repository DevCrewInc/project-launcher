import React from 'react'
import TablaProyectos from '../components/TablaProyectos'
import {getProyectoTabla} from '../graphql/proyectos/queries'

const ListaProyectos = () => {
    return (
        <>
            <TablaProyectos propsTablas={getProyectoTabla} nombreQuery='Proyectos'/>
        </>
    )
}

export default ListaProyectos
