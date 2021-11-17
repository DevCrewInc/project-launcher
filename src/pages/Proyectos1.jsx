import React from 'react'
import fotoman from 'fotoman.jpeg'

const Proyectos1 = () => {
    return (
        <div className = "flex flex-col m-10">
            <div className = "flex space-x-40 mb-10">
                <div className="flex flex-col">
                        <span className = "font-bold text-2xl">Nombre Proyecto</span>
                        <span className = "text-gray-300 text-lg leading-5">12345</span>
                </div>
                <div className = "space-x-10">
                        <button className = "status-button mx-1 my-1 px-4">Activo</button>
                        <button className = "btn px-4 ">En desarrollo</button>
                </div>
            </div>
            <div className = "grid grid-cols-3 gap-16 mt-6">
                <div className = "col-span-2 ">
                    <div className = "space-x-1">
                        <i className = "fas fa-calendar-alt date-icon"/>
                        <span className = "date-icon font-medium pr-8">Feb 01- Dic 12</span>
                        <i className = "fas fa-calculator date-icon"/>
                        <span className = "date-icon font-medium">$2.000.000</span>
                    </div>

                    <p className = "mt-7">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit harum, commodi ullam repellendus, 
                        soluta labore eos placeat, fugiat nesciunt et rerum quis. Quam enim sint cupiditate iusto repellendus
                        explicabo id, fugiat nesciunt et rerum quis. Quam enim sint cupiditate iusto repellendus
                        explicabo id.
                    </p>
                    <div className = "my-10">
                        <span className = "font-semibold text-xl mt-10">Objetivos generales y específicos</span>
                        <p className = "mt-7"> 
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit harum, commodi ullam repellendus, 
                            soluta labore eos placeat, fugiat nesciunt et rerum quis. Quam enim sint cupiditate iusto repellendus
                            explicabo id,fugiat nesciunt et rerum quis. Quam enim sint cupiditate iusto repellendus
                            explicabo id.
                        </p>
                    </div>
                </div>


                <div className = "flex flex-col">
                    <div className = "font-semibold leading-3 text-lg">
                        <span>Tripulantes</span>
                    </div>
                    <div className = "flex items-center p-5 my-2 border-b-2">
                        <img src={fotoman} className = "rounded-full w-10 h-11 mr-4"/>
                        <div className = "flex flex-col ">
                            <span className = "font-semibold text-sm">Juan Camilo Pérez</span>
                            <span className = "font-light text-xs">2345</span>
                        </div>
                    </div>
                    <div className = "flex items-center p-5 my-2 border-b-2">
                        <img src={fotoman} className = "rounded-full w-10 h-11 mr-4"/>
                        <div className = "flex flex-col ">
                            <span className = "font-semibold text-sm">Juan Camilo Pérez</span>
                            <span className = "font-light text-xs">2345</span>
                        </div>
                    </div>
                    <div className = "flex items-center p-5 my-2 border-b-2">
                        <img src={fotoman} className = "rounded-full w-10 h-11 mr-4"/>
                        <div className = "flex flex-col ">
                            <span className = "font-semibold text-sm">Juan Camilo Pérez</span>
                            <span className = "font-light text-xs">2345</span>
                        </div>
                    </div>
                
                </div>
            </div>
            
        </div>
    )
}

export default Proyectos1
