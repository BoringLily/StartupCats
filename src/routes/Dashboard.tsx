import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import InteractCatCard from "../components/InteractCatCard";
import { Link } from "react-router-dom";



interface teamMember {
    name: String;
    jobTitle: String;
    trait?: String;
}

export default function Dashboard({supabase}:any) {
    const [data,setData]=useState<any>([]);

    async function getAllCats()
    {

        let { data, error } = await supabase.from('team').select('*')
        if(data)
        {
            setData(data);
            console.log(data);
        }
        
    }

    useEffect(()=>{
        getAllCats()
    },[]);
    
    return <div className="Dashboard flex justify-center items-center flex-col w-fit">
        <div className='text-8xl font-cursive pb-8 p-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-bg to-red-bg'>Dashboard</div>
        <div className="CatCardContainer flex flex-row flex-wrap gap-10 p-5">{data.length>0?
            data.map((value:any, index:number)=> 
                <InteractCatCard key={value.id} data={value}/>
            ): "Your team currently has no members"
        }</div>
        <Link to="/dashboard/add" className='text-black font-nunito font-bold text-lg m-2 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-200 to-pink-200 border-0 w-fit'> Add Cats </Link>

    </div>
}

