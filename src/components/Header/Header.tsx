import { Box, Center, Heading } from '@chakra-ui/react'

import './Header.css'

export const Header = () =>{
    
    return(
        <Box minW='100vh' backgroundColor='#ffa500'>
            <Center>
                <Heading color='#800080' margin='3'>
            Dio Bank
            </Heading>
            </Center>
        </Box>
    )
}