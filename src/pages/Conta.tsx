import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { api } from "../api";
import CardInfo from "../components/CardInfo";

interface IUserData {
    email: string,
    password: string,
    name: string,
    balance:number,
    id:string
  }

const Conta = () =>{
    const [userData, setUserData] = useState<null | IUserData>();

    useEffect(() => {
        const getData = async () => {
          const data: any | IUserData = await api
          setUserData(data);
        }
    
        getData()
      }, [])

      const actualData = new Date()
      const {id} = useParams()
      const navigate = useNavigate()

      if(userData && id !== userData.id){
        navigate('/')
      }

    return(
        <Center>
        <SimpleGrid columns={2} spacing={8} paddingTop={16}>
          {userData === undefined || userData === null ? 
          (<Center>
            <Spinner size={'xl'} color={'#fff'}/>
          </Center>) :
          (
            <>
            <CardInfo mainContent={`Bem vindo ${userData?.name}`} content={`${actualData.getDay()}/${actualData.getMonth()}/${actualData.getFullYear()} - ${actualData.getHours()}:${actualData.getMinutes()}`}/>
            <CardInfo mainContent="Saldo" content={`R$ ${userData.balance.toFixed(2).replace('.',',')}`}/>
            </>
          )  
        }
        
        </SimpleGrid>
        </Center>
    )
}

export default Conta;