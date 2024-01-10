

const PrintData = ({articles, title,handleDelete})=>{

    return(<div><h2>{title}</h2>
        <table border={'2px'}>
            <tr><td>Title</td><td>Description</td><td>Leader</td><td>Delete row</td></tr>
            {articles.map(a=>(<tr key={a.id}><td>{a.title}</td><td>{a.desc}</td>
            <td>{a.leader}</td><td> <button onClick={()=>handleDelete(a.id)}>Delete row</button></td></tr>))}
        </table>
    </div>);
}

export default PrintData;