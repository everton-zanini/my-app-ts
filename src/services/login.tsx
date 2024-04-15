import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { api } from "../api"
import { AppContext } from "../components/AppContext"

export const login = async (email: string): Promise<void> => {
    const {setIsloggedIn} = useContext(AppContext)
    const navigate = useNavigate()
    
    const data: any = await api

    if (email !== data.email) {
        return alert('Email inválido')
    }

    setIsloggedIn(true)

    alert(`Bem-vindo(a), ${email}`)
}