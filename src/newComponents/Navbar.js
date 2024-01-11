import { Link } from "react-router-dom";

const Navbar =()=>{
    return(<nav className="navbar">
        <h1> Welcome to reading Articles</h1>
        <div> 
            <Link to="/"> Home</Link>
            <Link to="/aboutus" style={{
                color:'white',
                backgroundColor : '#645be4',
                borderRadius :'6px'
            }}>About us</Link>
            <Link to="/CreateArticle">Create Article</Link>
            <Link to="/Articles"> Articles</Link>
            <Link to="/Reports"> Reports</Link>
            <Link to="/Products"> Products</Link>
            <Link to="/createproduct"> Add Products</Link>
        </div>
    </nav>);
}

export default Navbar