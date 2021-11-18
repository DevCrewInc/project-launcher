import Dialogo_avances from 'components/Dialogo_avances';
import Dialogo_crearProyecto from 'components/Dialogo_crearProyecto';
import Dialogo_detalleProyecto from 'components/Dialogo_detalleProyecto';
import Dialogo_perfil from 'components/Dialogo_perfil';
import React from 'react';

const Dialogos = () => {
    return <div>
        <Dialogo_avances/>
        <Dialogo_crearProyecto/>
        <Dialogo_detalleProyecto/>
        <Dialogo_perfil/>
    </div>;
};

export default Dialogos;