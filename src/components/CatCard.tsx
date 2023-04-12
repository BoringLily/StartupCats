import React from "react"
import "./CatCard.css"
import MetalRing from "../assets/Cats/MetalRing.png"
import CatEmboss from "../assets/Cats/CatEmboss.svg"
import GreyCatGlasses from "../assets/Cats/GreyCatGlasses.png"

export interface CatCardTypes{
    name:string;
    jobTitle:string;
    trait:string;
    color:string;
}

export default function CatCard({name, jobTitle, trait, color}:CatCardTypes){

    return(
        <div className={`CatCard cat-bg-${color} flex flex-col justify-around items-center p-2 py-10 w-48 h-72 rounded-xl`}>
            
                <div className='font-cursive font-semibold text-4xl py-4 text-black mix-blend-overlay opacity-75'>{name}</div>
                <img className="z-index w-1/2 bg-grey-200 mix-blend-normal m-auto" src={GreyCatGlasses} alt=""/>
                <div className="flex flex-row text-center font-nunito font-normal text-md py-4 text-black mix-blend-overlay opacity-75">
                {jobTitle} 
                <br/>
                {trait} 
                </div>
            
             {/* <Badge color={"#637853"} className="w-48"/> */}
        
        </div>
    )
}


