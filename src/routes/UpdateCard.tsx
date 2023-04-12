import { Link, useNavigate, useParams } from "react-router-dom"
import CatCard from "../components/CatCard";
import { useEffect, useState } from "react";

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

interface CatDataType{
    id:number;
    name:string;
    jobTitle:string;
    trait:string;
    color:string;
}

export default function UpdateCard({ supabase }: any) {
    const { id } = useParams();
    const [catData, setCatData] = useState<CatDataType|null>(null);
    const [jobSelect, setJobSelect] = useState<string>("");
    const [colorSelect, setColorSelect] = useState<string>("");
    const navigate = useNavigate();

    const handleJobChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setJobSelect(event.target.value);
    }

    const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setColorSelect(event.target.value);
    }

    const handleUpdateMember = async () => {
        if(jobSelect=="" || colorSelect=="")
        {
            console.log("data didn't fetch")
        }
        else{
            const { error } = await supabase
            .from('team')
            .update({ jobTitle: jobSelect, color: colorSelect })
            .eq('id', id)

            navigate('/dashboard');
        }
    }

    const handleDeleteMember = async () => {
        if(jobSelect=="" || colorSelect=="")
        {
            console.log("data didn't fetch")
        }
        else{
            const { error } = await supabase
            .from('team')
            .delete()
            .eq('id', id)

            navigate('/dashboard');
        }
    }

    const getCard = async () => {
        const { data, error } = await supabase
            .from('team')
            .select("*")
            .eq('id', id)
        setCatData(data[0]);
        setColorSelect(data[0].color);
        setJobSelect(data[0].jobTitle);
    }

    useEffect(() => {


        getCard();

    }, [])

    return (
        <div className="UpdateCard flex flex-row">

            {!catData ? <div> id doesn't exist</div> : <CatCard name={catData.name} jobTitle={catData.jobTitle} trait={catData.trait} color={catData.color} />}
            {catData ?
                <div className="Options p-5 flex flex-col justify-around items-start w-72">

                    <div>Job Title</div>
                    <select className="text-black p-2 w-full rounded-xl" value={jobSelect} onChange={handleJobChange}>
                        {jobTitleOptions.map((option, index) => (<option key={index} value={option}>{option}</option>))}
                    </select>

                    <div>Badge Color</div>
                    <select className="text-black p-2 w-full rounded-xl" value={colorSelect} onChange={handleColorChange}>
                        {colorOptions.map((option, index) => (<option key={index} value={option}>{option}</option>))}
                    </select>

                    <div className="flex flex-row p-2 justify-around items-center"> 
                        <Link to="/dashboard" className="p-2 m-2 hover:text-blue-500">cancel</Link>
                        <button className="font-nunito font-semibold text-white m-2 border-solid border-white border-2 rounded-lg bg-transparent hover:text-red-bg hover:border-red-bg" onClick={handleDeleteMember}> Delete </button>
                        <button className="rounded-lg cat-bg-green border-0 text-slate-500 border-solid font-nunito m-2 font-semibold hover:text-green-600" onClick={handleUpdateMember}> Update </button>

                    </div>


                </div>
                : <></>}
        </div>
    )


}