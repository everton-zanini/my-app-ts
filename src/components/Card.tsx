import { Box, Button, Center, Heading, Input } from "@chakra-ui/react"
import { useState } from "react";

import { login } from "../services/login"

export const Card = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
 
  return (
    <Center>
      <Box backgroundColor='#fff' maxWidth='70vh' borderRadius={15} padding={15} margin={10}>
        <Center>
          <Heading margin={5}>Faça o login </Heading>
        </Center>
        <Input
          placeholder='email'
          type='email'
          marginBottom={2}
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />
        <Input
          placeholder='password'
          type={'password'}
          marginBottom={2}
          value={password}
          onChange={(e) => { setPassword(e.target.value) }}
        />
        <Button onClick={() => { login(email) }} colorScheme='green' width='100%'>Login</Button>
      </Box>
    </Center>
  )
}