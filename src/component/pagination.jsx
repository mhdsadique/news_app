import { Box, Button } from '@chakra-ui/react'
import React from 'react'

export const Pagination = ({page,changepage}) => {
  return (
    <Box>
        <button style={{width:"40px",backgroundColor:"bisque",height:"40px"}} disabled={page===1} onClick={()=>changepage(page-1)}>-</button>
        <Button onClick={()=>changepage(1)} bg={page===1?"":"bisque"}>{1}</Button>
        <Button onClick={()=>changepage(2)}bg={page===2?"":"bisque"}>{2}</Button>
        <Button onClick={()=>changepage(3)} bg={page===3?"":"bisque"}>{3}</Button>
        <Button onClick={()=>changepage(4)} bg={page===4?"":"bisque"}>{4}</Button>
        <Button onClick={()=>changepage(5)} bg={page===5?"":"bisque"}> {5}</Button>
        <Button onClick={()=>changepage(6)} bg={page===6?"":"bisque"}>{6}</Button>
        <Button onClick={()=>changepage(7)} bg={page===7?"":"bisque"}>{7}</Button>
        <button disabled={page===7} style={{width:"40px",backgroundColor:"bisque",height:"40px"}} onClick={()=>changepage(page+1)}>+</button>
    </Box>
  )
}
