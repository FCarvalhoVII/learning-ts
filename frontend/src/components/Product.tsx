import React, { useState, useEffect } from 'react'
import api from '../services/api'

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
        <ul>
            <strong>Produtos:</strong>
            { products.map(product => 
                <li key={product.id}>
                    <strong>Nome:</strong> {product.name}, 
                    <strong> Preço:</strong> {product.price}
                </li>
            ) }
        </ul>
    )
}

export default Product