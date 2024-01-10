import { useState } from "react"

const CreateArticle = ()=>{
    const [body, setBody] = useState('This is the Body');
    const[author,setAuthor] = useState('Author Name');


    return(<div>
            <h2> Article : {body}</h2>
            <p>author : {author}</p>
            <br/><br/>
            <div> 
                <hr/>
                <h3>   Edit Article : </h3>
                <textarea 
                value={body} 
                style={{
                    marginLeft:'20px'
                }} 
                onChange={(e)=>setBody(e.target.value)}>
                </textarea>
                <br/>
                <input type="text" 
                value={author} style={{
                    marginLeft:'20px' 
                }}
                onChange={(e)=>setAuthor(e.target.value)}>
                </input>
            </div>
            </div>);
}

export default CreateArticle;