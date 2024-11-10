import React from 'react'
// import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Shan17161')
    //     .then((res)=>res.json())
    //     .then((rawdata)=>setData(rawdata))
    // },[])
    return(
        <>
        <div>This is Github page</div>
        <div>Github followers: {data.followers}</div>
        <div>Github Username: {data.login}</div>
        <div>Github email: {data.id}</div>
        <div><img src={data.avatar_url} alt="" /></div>
        </>
    )
}

export async function GithubLoader(){
    const api = await fetch('https://api.github.com/users/Shan17161')
    const data = await api.json()
    return data

}



