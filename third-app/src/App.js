import React , {Component} from 'react';
import {connect} from 'react-redux';

class App extends React.Component{
  render(){
    return(
      <div>
        <p>Bal : <span style={{color:"green"}}> {this.props.bal} </span></p>
        <br></br>
        <br></br>
        <button onClick={this.props.deposit}>DEPOSIT</button>
        <button onClick={this.props.withdraw}>WITHDRAW</button>
      </div>
    )
  }
};

const receive=(state)=>{
  return {
    bal:state.bal
  }
};

const send =(dispatch)=>{
  return{
    deposit:()=>{
      dispatch({type:'DEPOSIT',value:1000})
    },
    withdraw:()=>{
      dispatch({type:'WITHDRAW',value:100})
    }
  }
};

export default connect(receive,send)(App);





