import { useState } from "react";
import PrintData from "./PrintData";

const ShowArticles =()=>{
const [articles,setArticles] = useState([
    {title:'Stadium App', desc:'This is an application for searching stadiums',leader:'Othman',id:1},
    {title:'Car Parking System',desc:'This is an application for parking space allocation', leader:'Muhammed',id:2},
    {title:'Pathology Lab', desc:'This is an application for blood tests',leader:'Afnan',id:3},
    {title:'Car rental', desc:'This is an application for renting out cars',leader:'Halima',id:4}
         ]);

         const handleDelete=(id)=>{
            const newarticles = articles.filter(a => a.id!==id);
            setArticles(newarticles);
        }
    return(<div>
        <PrintData articles={articles} title = {"List of Articles"} handleDelete={handleDelete}/>
         </div>);
        }

export default ShowArticles;