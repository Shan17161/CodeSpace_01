import React from "react";
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div className="bg-[#212121] h-[10%] w-full ">
            <ul className="flex justify-evenly items-center p-5">
                <li>
                    <NavLink className={({isActive})=>`${isActive ? 'bg-white' : 'bg-yellow'}`} to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>`${isActive ? 'bg-white' : 'bg-yellow'}`} to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>`${isActive ? 'bg-white' : 'bg-yellow'}`} to='/contact'>Contact</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>`${isActive ? 'bg-white' : 'bg-yellow'}`} to='/github'>Github</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>`${isActive ? 'bg-white' : 'bg-yellow'}`} to='/user'>User</NavLink>
                </li>
            </ul>
        </div>
    );
}
