import React, { useEffect, useState } from 'react'
import { ButtonGradient } from 'components-react-lib-styled'
import { Link } from 'react-router-dom'

import api from './services/api'
import User from './components/User'
import './App.css'

interface IUser {
    id: number
    name: string
    email: string
}

function App() {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        api.get<IUser[]>('/users').then(res => {
            setUsers(res.data)
        })
    }, [])

    return (
        <div className="App">
            { users.map(user => <User key={user.id} user={user} />) }
            <Link to="/products">
                <ButtonGradient>Produtos</ButtonGradient>
            </Link>
        </div>
    );
}

export default App;
