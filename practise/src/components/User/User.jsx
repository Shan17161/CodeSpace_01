import React from "react";
import { useParams } from "react-router-dom";
export default function User(){
    const { username } = useParams();

    console.log('Username:', username); // This will log the username to the console

    return (
        <>
            <div>Hi there, user {username}</div>
        </>
    )
}