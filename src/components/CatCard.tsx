import React from "react"
import "./CatCard.css"

import defaultCat from "../assets/Cats/GreyCatGlasses.png"

import Cuddly from '../assets/Cats/Cuddly.png'
import Leader from '../assets/Cats/Leader.png'
import Silly from '../assets/Cats/Silly.png'
import Sleepy from '../assets/Cats/Sleepy.png'
import Stylish from '../assets/Cats/Stylish.png'

export interface CatCardTypes{
    name:string;
    jobTitle:string;
    trait:string;
    color:string;
}

function selectCat(trait:string){
    if(trait=="Cuddly")
    {
        return Cuddly;
    }
    if(trait=="Leader")
    {
        return Leader;
    }
    if(trait=="Silly")
    {
        return Silly;
    }
    if(trait=="Sleepy")
    {
        return Sleepy;
    }
    if(trait=="Stylish")
    {
        return Stylish;
    }
    else{
        return defaultCat;
    }

}


export default function CatCard({name, jobTitle, trait, color}:CatCardTypes){

    return(
        <div className={`CatCard cat-bg-${color} flex flex-col align-top justify-between items-center p-2 py-4 w-52 h-80 rounded-xl`}>
            
                <div className='font-cursive font-semibold text-4xl py-2 text-black mix-blend-overlay'>{name}</div>
                <img className=" w-1/2 bg-grey-200 mix-blend-normal" src={selectCat(trait)} alt=""/>
                <div className="flex flex-row text-center font-nunito font-normal text-md py-4 text-black mix-blend-overlay">
                {jobTitle} 
                <br/>
                {trait} 
                </div>
            
             {/* <Badge color={"#637853"} className="w-48"/> */}
        
        </div>
    )
}


