import React ,{ Component} from 'react'
 export class Counter extends Component {

    constructor() {
        super();
        this.state={
            counter:0,
            timer:0,
            interval:null
        }
    }
componentDidMount (){
    console.log("componentDidMount () ")
    this.setState({
        interval : setInterval(
        ()=>this.setState({ timer : this.state.timer + 1}),
        1000
        )
    });
}
componentDidUpdate (){
    console.log("il y a un update timer ")
    console.log(this.state.timer)
}


    increment=()=>{
        this.setState({
           counter: this.state.counter+1,
        })
      }
      decrise=()=>{
          if (this.state.counter>0){
        this.setState({
           counter: this.state.counter-1,
        })
      }}
      reset=()=>{
        this.setState({counter:0})
      }

      componentWillUnmount(){
          console.log("you killed me")
          clearInterval(this.state.interval);
      }

 render(){
     return (
         <div>
        <p>this is my Counter</p>
        <button onClick={this.increment}>Plus(+)</button><br></br>

        <p>{this.state.counter}</p>        
        <button onClick={this.decrise}>Moins(-)</button><br></br>
        <button onClick={this.reset}>Reset</button>

        
         </div>
  
  )
}
 }
export default Counter