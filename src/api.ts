const conta = {
    email: 'zanini@manifest.com.br',
    password: '123456',
    name:'Zanini',
    balance: 2000,
    id:'1'
}

export const api = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(conta)
    },3000)
})