
export interface CatCardTypes{
    catKey:number;
    name:string;
    jobTitle:string;
    trait:string;
}



export default function CatCard({catKey, name,jobTitle,trait}:CatCardTypes){

    return(
        <div key={catKey} className="CatCard flex flex-col justify-around p-2 py-10 bg-black text-white w-48 h-72 rounded-xl">
            <div className="font-nunito font-semibold text-4xl py-4">{name}</div>
            <div>{jobTitle}</div>
            <div>{trait}</div>
        </div>
    )
}