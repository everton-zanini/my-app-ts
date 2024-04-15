import { Box, Center } from "@chakra-ui/react"

export const Card = ({children}:any) => {
  return (
    <Center>
      <Box backgroundColor='#fff' maxWidth='70vh' borderRadius={15} padding={15} margin={10}>
        {children}
        
      </Box>
    </Center>
  )
}