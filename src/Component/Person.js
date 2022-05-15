import React from "react";

class Person extends React.Component{
constructor(){
    super()
    this.state={
        fullName : "Inoubli Haythem",
        bio : "theatre",
        profession : "Developer FullStack",
        imgSrc : "profile.jpg",

    }
}
componentDidMount(){
console.log("component Did Mount");
}
componentDidUpdate(){
    console.log("Updating");

}
componentWillUnmount(){
    console.log("component Will Unmount");

}
render(){

    return(
        <div> 
            <h1>Checkpoint State</h1>
<p>{this.state.fullName}</p>
<p>{this.state.bio}</p>
<p>{this.state.profession}</p>
<img src={this.state.imgSrc} alt="imgSrc" width="30%" />
        </div>
    )
}


}

export default Person;