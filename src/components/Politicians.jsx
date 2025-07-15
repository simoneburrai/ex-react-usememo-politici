

import { useState, useEffect, useMemo } from "react";

export default function Politicians (){

     const apiUrl = "http://localhost:3333/politicians"
    const [politicians, setPoliticians] = useState([]);
    const [searchedValue, setSearchedValue] = useState("");

    const filteredPoliticians = useMemo(()=>{
        const searchedPoliticians = searchedValue ? politicians.filter(p => {
            const nameLower = p.name.toLowerCase();
            const bioLower = p.biography.toLowerCase();
            return nameLower.includes(searchedValue.toLowerCase()) || bioLower.includes(searchedValue.toLowerCase());
        }) : politicians;
        return searchedPoliticians;
    }, [searchedValue, politicians])
   
    const getPoliticians = async()=> {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setPoliticians(data);
    }


    useEffect(()=>{
        getPoliticians()
    }, []);

    return <>
        <h1 className="text-center p-3">LISTA POLITICI</h1>
        <div className="d-flex justify-content-center">
            <h4>Ricerca Politici: </h4>
            <input type="text" onChange={(e)=>setSearchedValue(e.target.value)} placeholder="Ricerca per Nome o Biografia" value={searchedValue} />
        </div>
        <div className="m-5 row row-cols-3">
             {filteredPoliticians.map(p => <div  key={p.id} className="p-3">
            <h3>{p.name}</h3>
            <img src={p.image} alt={p.name} width="200"/>
            <h4>{p.position}</h4>
            <p>{p.biography}</p>
        </div>)}
        </div>
       
    </>
}