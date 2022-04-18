import React ,{ Component } from "react";
import Counter from "./Counter";

export class App extends Component{
  constructor(){
    super();
     this.state = {
       show: false,
       name:"Beshir",
       Bio:"Student",
       Profession:"Developer",
    }}


   

toggle=()=>{
  this.setstate({ show: !this.state.show });
}
 render(){
  return (
    <div>
      <button onClick={()=>this.toggle()}>Show/Hide</button>
      <h1>{this.state.name}</h1>
      <h1>{this.state.Bio}</h1>
      <h1>{this.state.Profession}</h1>
      <img class="img1" src="img1.jpg" alt="imgg" height="300" width="400"/>
      <hr/>
      <p>Partie Compteur</p>
      {    this.state.show && <Counter/>}
    <p>{this.state.timer}</p>
    <p>timer</p>
    </div>
  )
 }
}

export default App;
