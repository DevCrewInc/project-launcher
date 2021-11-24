import { useEffect } from 'react';
import 'styles/globals.css';
import fotoman from 'fotoman.jpeg'
import UpperBar from 'components/UpperBar';
import { useQuery } from '@apollo/client';
import {getUsuarios} from '../graphql/usuarios/queries'




const Usuarios = () => {

    const{data,error,loading} = useQuery(getUsuarios);

    useEffect   (()=>{

        if (data){
            console.log(data)
        }

    } )

    return (
        <div >
           <UpperBar title ="Usuarios" icon="M19.3343 27C18.9233 27 18.5128 27 18.1018 27C18.0643 26.9837 18.0283 26.9578 17.9892 26.9527C16.9651 26.821 16.0629 26.4151 15.2692 25.7681C15.1066 25.6354 14.9539 25.4909 14.7882 25.3444C14.5341 26.0947 14.0517 26.6058 13.3177 26.8784C13.2014 26.9217 13.0831 26.9598 12.9658 27C12.6922 27 12.418 27 12.1444 27C12.1001 26.9812 12.058 26.9573 12.0122 26.9446C11.2571 26.7401 10.7211 26.2854 10.4084 25.5748C10.377 25.5031 10.3508 25.4294 10.3158 25.3409C10.2505 25.4009 10.2062 25.4396 10.164 25.4802C9.49278 26.1308 8.70117 26.5763 7.79587 26.821C7.53663 26.8912 7.27121 26.941 7.00888 27C6.5979 27 6.18743 27 5.77645 27C5.7389 26.9837 5.70289 26.9578 5.6638 26.9527C2.92683 26.5794 0.926948 24.2509 1.00205 21.5247C1.03805 20.2206 2.38519 19.1728 3.69118 19.4063C4.80274 19.6047 5.62625 20.5726 5.62522 21.6432C5.62471 21.9865 5.79754 22.2444 6.12416 22.3721C6.64162 22.574 7.15856 22.1935 7.16114 21.6051C7.16679 20.3783 7.16268 19.1515 7.16165 17.9247C7.16165 17.8931 7.15239 17.8616 7.14313 17.8041C5.60876 17.8041 4.08262 17.8041 2.56162 17.8041C2.56162 17.2823 2.56162 16.7889 2.56162 16.2798C3.07445 16.2798 3.56722 16.2798 4.10422 16.2798C3.1835 14.8409 2.67015 13.2983 2.55699 11.6381C2.44332 9.96629 2.73137 8.3565 3.43914 6.82759C4.14332 5.30681 5.1664 4.03526 6.512 3.02158C10.0879 0.327413 15.0547 0.325378 18.5967 3.02005C20.4196 4.40706 21.6541 6.19792 22.2333 8.39821C22.9647 11.1763 22.5337 13.8018 21.0127 16.2884C21.5481 16.2884 22.0471 16.2884 22.5522 16.2884C22.5522 16.8072 22.5522 17.3006 22.5522 17.8219C21.0096 17.8219 19.4834 17.8219 17.947 17.8219C17.947 19.093 17.9455 20.3366 17.948 21.5796C17.9491 22.0684 18.2726 22.4239 18.7103 22.4295C19.1439 22.4351 19.4659 22.0796 19.4906 21.5939C19.54 20.6204 20.0359 19.9342 20.9288 19.5518C21.7894 19.1835 22.78 19.4007 23.4379 20.0563C24.0891 20.7058 24.1868 21.4967 24.067 22.3588C23.7661 24.5154 22.2194 26.2706 20.0996 26.8296C19.8476 26.8957 19.5899 26.9435 19.3343 27ZM17.5988 16.2742C17.6034 16.2757 17.6188 16.2849 17.6348 16.2849C18.02 16.2864 18.4063 16.2696 18.7895 16.294C19.0174 16.3083 19.1496 16.2203 19.2761 16.0519C20.7889 14.0353 21.3455 11.7841 20.8578 9.32492C19.9819 4.90398 15.7872 1.99315 11.3965 2.62129C9.04425 2.958 7.15445 4.08154 5.7497 5.96344C4.34907 7.84025 3.84549 9.96171 4.19424 12.2658C4.40925 13.6874 4.98534 14.9676 5.88189 16.1023C5.94053 16.1765 6.03003 16.2757 6.10873 16.2788C6.58195 16.2951 7.05569 16.2869 7.55155 16.2869C7.52531 16.2193 7.51554 16.1882 7.50165 16.1587C6.79542 14.667 7.20434 13.1564 8.56383 12.2027C8.63687 12.1513 8.69654 12.0303 8.69859 11.9402C8.71145 11.4245 8.69036 10.9077 8.71145 10.392C8.72123 10.1555 8.64098 10.0441 8.42803 9.94035C7.34991 9.41443 6.87669 8.15153 7.32676 7.05138C7.77067 5.96548 8.99179 5.3831 10.1291 5.71523C11.0287 5.97768 11.7133 6.79249 11.7817 7.68207C11.8579 8.67439 11.3476 9.56193 10.4655 9.98409C10.3837 10.0233 10.2577 10.096 10.2556 10.1565C10.2386 10.6692 10.2458 11.1829 10.2458 11.7012C11.7992 11.7012 13.3254 11.7012 14.8675 11.7012C14.8675 11.2541 14.8515 10.8228 14.8736 10.3935C14.886 10.1575 14.8068 10.0446 14.5923 9.94086C13.5723 9.44648 13.0888 8.2914 13.4303 7.22075C13.7667 6.1674 14.8479 5.48483 15.9399 5.63538C16.9728 5.7783 17.7829 6.57735 17.9367 7.60425C18.0818 8.57521 17.5355 9.56346 16.6014 9.98409C16.4358 10.0583 16.4013 10.1468 16.4039 10.3071C16.4126 10.8315 16.4137 11.3563 16.4034 11.8807C16.4003 12.0506 16.4564 12.1452 16.5988 12.248C17.6564 13.0078 18.1085 14.0317 17.8909 15.3139C17.8359 15.641 17.6986 15.9538 17.5988 16.2742ZM8.70374 17.8199C8.70374 17.9374 8.70374 18.0295 8.70374 18.1215C8.70374 19.3061 8.71248 20.4902 8.70065 21.6747C8.69139 22.604 8.25212 23.2977 7.41832 23.7118C6.59121 24.1227 5.77182 24.0408 5.02392 23.5058C4.41285 23.0689 4.10165 22.459 4.08108 21.7068C4.06822 21.2465 3.71382 20.894 3.29306 20.9082C2.86253 20.923 2.53539 21.2841 2.54465 21.7439C2.54722 21.8787 2.56985 22.013 2.58477 22.1472C2.82395 24.2997 4.9982 25.85 7.13799 25.3938C8.99487 24.9976 10.2376 23.4834 10.2438 21.6015C10.2479 20.4169 10.2448 19.2329 10.2438 18.0483C10.2438 17.975 10.2355 17.9013 10.2309 17.8194C9.72219 17.8199 9.22891 17.8199 8.70374 17.8199ZM14.8664 17.8153C14.8664 17.9196 14.8664 18.0025 14.8664 18.0854C14.8664 19.2445 14.8633 20.4032 14.869 21.5623C14.87 21.8065 14.8865 22.0537 14.924 22.2947C15.2152 24.1604 17.0134 25.5942 18.9007 25.4721C20.937 25.3409 22.5285 23.7291 22.5676 21.7592C22.5769 21.2856 22.2456 20.9154 21.8069 20.9088C21.3825 20.9027 21.0451 21.2531 21.0281 21.718C20.9803 23.0282 19.9572 23.9747 18.6131 23.9529C17.3997 23.933 16.409 22.8949 16.407 21.6391C16.4054 20.4546 16.4065 19.2705 16.4065 18.0859C16.4065 17.9974 16.4065 17.9084 16.4065 17.8153C15.8808 17.8153 15.3937 17.8153 14.8664 17.8153ZM12.5538 13.2408C11.8177 13.2408 11.0822 13.2352 10.3461 13.2449C10.1527 13.2474 9.9516 13.2738 9.76746 13.3313C9.08077 13.546 8.61732 14.256 8.71454 14.9177C8.83336 15.7279 9.44855 16.2803 10.2726 16.2849C11.7956 16.2935 13.3187 16.29 14.8417 16.2834C15.0094 16.2828 15.1828 16.2483 15.3433 16.1974C16.0289 15.9802 16.4929 15.2712 16.3957 14.6105C16.2768 13.8079 15.6725 13.2581 14.8639 13.2443C14.0938 13.2316 13.3238 13.2413 12.5538 13.2408ZM11.7848 17.8219C11.7848 19.6362 11.7848 21.4209 11.7848 23.2057C11.7848 23.6965 11.7776 24.1873 11.7869 24.6776C11.7982 25.2453 12.3146 25.6099 12.8239 25.4207C13.1402 25.3032 13.3249 25.0113 13.3249 24.6136C13.3259 22.4143 13.3254 20.215 13.3249 18.0152C13.3249 17.9511 13.3135 17.8865 13.3074 17.8219C12.7971 17.8219 12.3043 17.8219 11.7848 17.8219ZM9.47684 8.66981C9.88422 8.66727 10.2499 8.30005 10.2427 7.90027C10.2355 7.50609 9.88216 7.15667 9.48353 7.14954C9.07872 7.14242 8.70734 7.50304 8.70528 7.90637C8.70322 8.30818 9.071 8.67236 9.47684 8.66981ZM16.4054 7.91858C16.4121 7.5183 16.0464 7.15158 15.639 7.14954C15.2424 7.14802 14.8839 7.49134 14.868 7.88806C14.852 8.28479 15.2116 8.65811 15.621 8.66981C16.0243 8.68151 16.3987 8.32242 16.4054 7.91858Z"/>
            <table className = "w-full table-fixed mt-8">
                <thead className = "thead-color leading-10 text-sm text-gray-700 border-1 text-center">
                    <tr>
                        <th>Id</th>
                        <th>Nombre Usuario</th>
                        <th>Perfil</th>
                        <th>Documento</th>
                        <th>Rol</th>
                        <th>Estado</th>
                        <th>Acción</th>
                    </tr>
                </thead> 
                {data && data.Usuarios.map((usuario)=>{

                    return (
                        <FilasTablas usuario={usuario}/>    
                    )
                    
                }) }
                
            </table>
        </div>
    )
}

const FilasTablas = ({usuario})=>{

    return (

        <tbody className = "tbody-border text-sm text-gray-400">  
                    <tr className = "align-middle">
                        <td>
                            <input type="text" placeholder = {usuario._id} className ="input-tablas"/>
                        </td>
                        <td>
                            <input type="text" placeholder = {usuario.nombre} className ="input-tablas"/>
                        </td>
                        <td className="p-2 flex justify-center">
                            <img className="rounded-full w-9" src={fotoman}/>
                        </td>
                        <td>
                            <input type="text" placeholder = {usuario.identificacion} className ="input-tablas"/>
                        </td>
                        <td className="text-center">
                            <input className="text-gray-600 cursor-pointer bg-white" type="button" value={usuario.rol}/>
                        </td>
                        <td className="text-center">
                            <button className = "status-button mx-1 my-1 px-2">{usuario.estado}</button>
                        </td>
                        <td className = "space-x-2 text-center">
                            <i className = "fas fa-eye m-1 p-1 text-gray-400 hover:text-blue-600 cursor-pointer"/>
                            <i className = "fas fa-pen my-1 p-1 text-gray-400 hover:text-yellow-400 cursor-pointer"/>
                            <i className = "fas fa-trash my-1 p-1 text-gray-400 hover:text-red-400 cursor-pointer"/>
                        </td>
                    </tr>
                </tbody>         
        )
}

export default Usuarios
