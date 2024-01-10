import { useState } from "react";
import PrintData from "./PrintData";

const ShowReports =()=>{
const [articles,setArticles] = useState([
    {title:'Attendance', desc:'This is an application for searching stadiums',leader:'Leader1',id:1},
    {title:'Performance',desc:'This is an application for parking space allocation', leader:'Leader2',id:2},
    {title:'Sales', desc:'This is an application for blood tests',leader:'Leader3',id:3}
         ]);

const handleDelete=(id)=>{
    const newarticles = articles.filter(a => a.id!==id);
    setArticles(newarticles);
}
    return(<div>
        <PrintData articles={articles} title = {"List of Reports"} handleDelete={handleDelete}/>
         </div>);
        }

export default ShowReports;