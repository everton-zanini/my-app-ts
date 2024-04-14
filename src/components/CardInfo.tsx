import { Box, Text } from "@chakra-ui/react";

interface ICardInfo{
    mainContent:string,
    content:string
}

const CardInfo = ({ mainContent, content }: ICardInfo) => {
    return (
        <Box backgroundColor='#fff' padding={8} minHeight='120px' borderRadius={15}>
            <Text fontSize={'2xl'} fontWeight='bold'>{mainContent}</Text>
            <Text fontSize={'xl'}>{content}</Text>
        </Box>
    )
}

export default CardInfo;