import { Box, Button, Input, Select, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Carousel from './component/carousel/carosel';
import { getDataPost } from './redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { Homedata } from './component/home/home';
import Skeleten from './component/skeleten/skeleten';
import { Errors } from './component/skeleten/error';
import { Pagination } from './component/pagination';

export const Home = () => {
    const {data,loading,error}=useSelector((store)=>store.newsdata)
    const [page,setpage]=useState(1)
    const [query,setquery]=useState("tesla")
    const [language,setluanguage]=useState("en")
    const [qInTitle,setqtitile]=useState("")
    const [state, setState] = useState('');
    const dispatch=useDispatch()
   
    const handler = (event) => {
    if(event.key=="Enter"&&state.length>0){
      setqtitile(state)
    }
  }

    useEffect(() => {
        getDataPost(dispatch,page,query,language,qInTitle)
          }, [page,query,language,qInTitle]);
          if(loading)return <Skeleten/>
          if(error)return <Errors/>
  return (
    <Box marginTop={"80px"}>
                 <Carousel data={data}/>
                 <Box width={"90%"}margin={"50px auto auto auto"}>
                 {/* onChange={(e)=>setqtitile(e.target.value)} */}
<Input onKeyPress={(e) => handler(e)}onChange={(e)=>setState(e.target.value)}  value={state}  w='50%' placeholder='Search'/>
<Box>
  <Button onClick={()=>setquery("tesla")}>TESLA</Button>
  <Button onClick={()=>setquery("elon musk")}>ELON MUSK</Button>
  <Button onClick={()=>setquery("crypto")}>CRYPTO</Button>
  <Button onClick={()=>setquery("bitcoin")}>BITCOIN</Button>
  <Select w="120px" value={language} onChange={(e)=>setluanguage(e.target.value)}>
    <option value="en">ENGLISH</option>
    <option value="ar">ARABIC</option>
    <option value="jp">JAPAN</option>
    <option value="hi">HINDI</option>
    <option value="ru">RUSSIA</option>
    <option value="ml">MALAYALAM</option>
    <option value="fr">FRANCE</option>
  </Select>
</Box>
                 <Homedata data={data}/>
                 </Box>
                 <Pagination page={page} changepage={(page)=>setpage(page)}/>
    </Box>
  )
}
