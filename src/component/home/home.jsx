import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Mapdata } from './map'

export const Homedata = (data) => {

console.log(data.data)
  return (
    <Box margin={"30px auto auto auto"}>
            <SimpleGrid  gap={'15px'} columns={{lg:3,md:2,sm:1}}>

{
    data.data?.map((e,i)=><Mapdata key={i} {...e}/>)
}
    </SimpleGrid>
        
    </Box>
  )
}
