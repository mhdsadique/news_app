import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const Mapdata = (data) => {
  return (
    <Box >
    <a href={data.url}>
    <Box display={"flex"}flexDirection="column" gap={"auto"}>
        <Heading size={'md'}>{data.title}</Heading>
        <img style={{width:"100%"}} src={data.urlToImage} alt={data.title} />
        <Text>{data.description}</Text>
    </Box>
    </a>
    </Box>
   
  )
}
