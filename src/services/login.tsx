import { api } from "../api"

export const login = async (email: string): Promise<void> => {
    const data: any = await api

    if (email !== data.email) {
        alert('Email inválido')
        return
    }

    alert(`Bem-vindo(a), ${email}`)
}