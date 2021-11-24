import UpperBar from 'components/UpperBar';
import React from 'react';
import TablaProyectos from '../components/TablaProyectos';
import {getSolicitudesNuevosProyectos} from '../graphql/proyectos/queries'

const Solicitudes = () => {
    return (

        <TablaProyectos propsTablas={getSolicitudesNuevosProyectos} nombreQuery='SolicitudesNuevosProyectos'/>
    )
}

export default Solicitudes;
