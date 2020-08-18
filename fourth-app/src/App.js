import React ,{component} from 'react';
import {connect} from 'react-redux';


class App extends React.Component{

  render(){
    return(
        <div>
            <p>Age: <span style={{color:'red'}}>{this.props.age}</span></p>
            <br></br>
            <br></br>
            <button onClick={this.props.ageUp}>UP</button>
            <button onClick={this.props.ageDown}>DOWN</button>
        </div>
    )
  }
};

const receive=(state)=>{
    return{
      age:state.age
    }
};

const send=(dispatch)=>{
      return{
        ageUp:()=>{dispatch({type:'UP'})},
        ageDown:()=>{dispatch({type:'DOWN'})}
      }
}

export default connect(send,receive)(App);

