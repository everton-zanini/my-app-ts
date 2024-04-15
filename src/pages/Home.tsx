import { Button, Center, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";

import { Card } from "../components/Card";
import { login } from "../services/login";

const Home = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    return (
        <Card >
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
        </Card>
    )
}

export default Home;