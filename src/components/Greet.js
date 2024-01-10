import React from "react";

class Greet extends React.Component{
render(){
    return(
        <div> 
            <h1> Hi {this.props.name} !! 
            <br/>This is a warm welcome !!!</h1>
        </div>
    );
}
}

export default Greet;