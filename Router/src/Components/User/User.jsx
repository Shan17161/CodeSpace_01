import { useParams } from "react-router-dom"
export default function User(){
    const {username} = useParams()
    return(
        <>
        <div>Hi there user {username}</div>
        </>
    )
}