import React from 'react'
//Importando as rotas do react
import {Routes, Route} from 'react-router-dom'

//Importando os componentes criados
import IndexProduct from '../components/products/Index'
import NotFound from '../components/NotFound'


const Router = () => {
    return(
        <div>

            <Routes>
                <Route path="/" element={<IndexProduct />} />

                <Route path="/" element={<NotFound/>}/>
            </Routes>

        </div>
    )
}

export default Router