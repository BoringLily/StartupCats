import { useNavigate } from "react-router-dom";
import CatCard from "./CatCard";

interface InteractCatCardType
{
    data:{
        id:number;
        name:string;
        jobTitle:string;
        trait:string;
        color:string;
    }
}

export default function InteractCatCard({data}:InteractCatCardType){

    const navigate = useNavigate();

const handleNavigate = () =>
{
    navigate(`/dashboard/${data.id}`)
}


return (
    <button className=" bg-transparent" onClick={handleNavigate}>

            <CatCard name={data.name} jobTitle={data.jobTitle} trait={data.trait} color={data.color}/>

    </button>
)


}