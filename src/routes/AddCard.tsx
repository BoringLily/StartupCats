import { createClient } from "@supabase/supabase-js";
import CatCard from "../components/CatCard";
import { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";

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

const colorOptions = [
    'lime',
    'red',
    'pink',
    'ocre',
    'brown',
    'green',
    'mint',
    'turquoise',
    'blue',
    'purple',
    'lilac',
    'coral',
    'light-grey',
    'dark-grey',
    'grey',
    'dark-blue'
];

export default function AddCard({ supabase }: any) {
    const [nameInput, setNameInput] = useState("Charles");
    const [jobSelect, setJobSelect] = useState("Developer");
    const [traitSelect, setTraitSelect] = useState("Leader");
    const [colorSelect,setColorSelect] = useState("purple")
    const navigate = useNavigate();

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(event.target.value);
    }

    const handleJobChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setJobSelect(event.target.value);
    }

    const handleTraitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTraitSelect(event.target.value);
    }

    const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setColorSelect(event.target.value);
    }

    const handleAddMember = async () => {
        const { error } = await supabase
            .from('team')
            .insert({ name: nameInput, jobTitle: jobSelect, trait: traitSelect, color:colorSelect })
        console.log("added:", { name: nameInput, jobTitle: jobSelect, trait: traitSelect, color:colorSelect})
        navigate('/dashboard');
    }

    return (
        <div className="AddCard flex flex-row">
            <CatCard name={nameInput} jobTitle={jobSelect} trait={traitSelect} color={colorSelect}/>

            <div className="Options p-5 flex flex-col justify-around items-start w-72">
                <div>Name</div>
                <input className="text-black p-2 w-full rounded-xl" value={nameInput} onChange={handleNameChange} />
                <div>Job Title</div>
                <select className="text-black p-2 w-full rounded-xl" value={jobSelect} onChange={handleJobChange}>
                    {jobTitleOptions.map((option, index) => (<option key={index} value={option}>{option}</option>))}
                </select>
                <div>Trait</div>
                <select className="text-black p-2 w-full rounded-xl" value={traitSelect} onChange={handleTraitChange}>
                    {traitOptions.map((option, index) => (<option key={index} value={option}>{option}</option>))}
                </select>
                <div>Badge Color</div>
                <select className="text-black p-2 w-full rounded-xl" value={colorSelect} onChange={handleColorChange}>
                    {colorOptions.map((option, index) => (<option key={index} value={option}>{option}</option>))}
                </select>
                <div> 
                <Link to="/dashboard">cancel</Link>
                <button className="rounded-lg bg-gradient-to-r from-purple-200 to-pink-200 border-0 text-black font-nunito font-semibold m-4" onClick={handleAddMember}> Add Member </button>
                </div>

            </div>


        </div> 

    )

}