import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ButtonGradient } from 'components-react-lib-styled'

import api from '../services/api'

import './Product.css'

interface IProduct {
    id: number
    name: string
    price: number
}

function Product() {
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        api.get<IProduct[]>('/products').then(res => {
            setProducts(res.data)
        })
    }, [])

    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    { products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>
                                {
                                    Intl.NumberFormat('pt-BR', { 
                                        style: 'currency', 
                                        currency: 'BRL' 
                                    }).format(product.price)
                                } 
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
            <Link to="/">
                <ButtonGradient>Usuários</ButtonGradient>
            </Link>
        </React.Fragment>
    )
}

export default Product