import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import CatCard from "../components/CatCard";
const supabase = createClient(import.meta.env.VITE_SB_URL, import.meta.env.VITE_SB_KEY)

interface teamMember {
    name: String;
    jobTitle: String;
    trait?: String;
}
const jobTitleOptions = [
    "Project Manager",
    "Senior Developer",
    "Front-End Developer",
    "Back-End Developer",
    "Full-Stack Developer",
    "Mobile Developer",
    "Systems Engineer",
    "DevOps",
    "UI/UX Designer",
    "Artist",
    "Animator"
]

const traitOptions = [
    'Leader',
    'Technical',
    'Cuddly',
    'Fast',
    'Master'
]

export default function Dashboard() {
    const [nameInput, setNameInput] = useState("");
    const [jobSelect, setJobSelect] = useState("");
    const [traitSelect, setTraitSelect] = useState("");
    const [data,setData]=useState<any>([]);

    const handleNameChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setNameInput(event.target.value);
    }

    const handleJobChange = (event:React.ChangeEvent<HTMLSelectElement>) =>{
        setJobSelect(event.target.value);
    }

    const handleTraitChange = (event:React.ChangeEvent<HTMLSelectElement>) =>{
        setTraitSelect(event.target.value);
    }

    const handleAddMember = async()=>{
        const { error } = await supabase
            .from('team')
            .insert({ name: nameInput, jobTitle:jobSelect, trait:traitSelect})
        console.log("added:",{ name: nameInput, jobTitle:jobSelect, trait:traitSelect})
        getAllCats();
    }

    async function getAllCats()
    {

        let { data, error } = await supabase.from('team').select('*')
        if(data)
        {
            setData(data);
        }
        
    }

    useEffect(()=>{getAllCats()},[]);
    

    return <div className="Dashboard">
        <div className="createMember flex items-center justify-center">
           
           <div>Name</div>
           <input className="text-black p-2 ml-2 mr-4" value={nameInput} onChange={handleNameChange}/>
           <div>Job Title</div>
            <select className=" p-2 text-black ml-2 mr-4" value = {jobSelect} onChange={handleJobChange}>
                {jobTitleOptions.map((option, index) => (<option key={index} value={option}>{option}</option>))}
            </select>
            <div>Trait</div>
            <select className=" p-2 text-black ml-2 mr-4" value = {traitSelect} onChange={handleTraitChange}>
                {traitOptions.map((option, index) => (<option key={index} value={option}>{option}</option>))}
            </select>
            <button className="rounded-lg bg-gradient-to-r from-purple-200 to-pink-200 border-0 text-black font-nunito font-semibold" onClick={handleAddMember}> Add Member </button> </div>
        <div className="CatCardContainer flex flex-row flex-wrap gap-10 p-5">{
            data.map((value:any, index:number)=> 
                <CatCard catKey={index} name={value.name} jobTitle={value.jobTitle} trait={value.trait}/>
            )


        }</div>

    </div>
}

