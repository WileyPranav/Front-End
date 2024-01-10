import { useState } from "react";

const ShowArticles =()=>{
const [articles,setArticles] = useState([
    {title:'Stadium App', desc:'This is an application for searching stadiums',leader:'Othman',id:1},
    {title:'Car Parking System',desc:'This is an application for parking space allocation', leader:'Muhammed',id:2},
    {title:'Pathology Lab', desc:'This is an application for blood tests',leader:'Afnan',id:3},
    {title:'Car rental', desc:'This is an application for renting out cars',leader:'Halima',id:4}
         ]);


    return(<div>
        <table border={'2px'}>
            <tr><td>Title</td><td>Description</td><td>Leader</td></tr>
            {articles.map(a=>(<tr key={a.id}><td>{a.title}</td><td>{a.desc}</td><td>{a.leader}</td></tr>))}
        </table>
    </div>);
}

export default ShowArticles;