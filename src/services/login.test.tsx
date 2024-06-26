import { login } from "./login"

const mockSetIsLoggedIn = jest.fn()

jest.mock('react',()=>({
    ...jest.requireActual('react'),
    useContext: ()=>({
        isloggedIn:true,
        setIsLoggedIn:mockSetIsLoggedIn
    })
}))

describe('login',()=>{

    const mockAlert = jest.fn()
    window.alert = mockAlert

    const mockEmail = 'zanini@manifest.com.br'

    it('Deve exibir um alert com boas vindas caso o email seja válido', async()=>{
        await login(mockEmail)
        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        expect(mockAlert).toHaveBeenCalledWith(`Bem-vindo(a), ${mockEmail}`)
    })

    it('Não deve exibir a mensagem de boas vindas sem o email',async ()=>{
        await login('zanini@manifesto.com.br')
        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo(a)!')
    })

    it('Deve exibir um erro caso o email seja inválido',async ()=>{
        await login('email@email.com')
        expect(mockAlert).toHaveBeenCalledWith('Email inválido')
    })
})