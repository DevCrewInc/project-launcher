
import {gql} from '@apollo/client';


const getUsuarios =gql`
query Usuarios {
    Usuarios {
      _id
      nombre
      apellido
      identificacion
      rol
      estado
    }
  }
`

export {getUsuarios};