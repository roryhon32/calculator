import React from "react";
import "./calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { useState } from "react";
function Calulator() {
  const[num,setNum]=useState(0)
  const [OldNum,setOldNum]=useState(0)
  const[operator,setOperator]=useState()
  

  function NumInput(e){
    
    var input=e.target.innerText

  let check=num + ''
  check=check.split('')
   
    if(num===0){
      setNum(input)
    }
    else{
      if(check.includes('.') && input==='.'){
        return
      }
      else{
        setNum(num+input)}
    }
  }
  function signal (){
    setNum(-num)
  }
  function clear(){
    setNum(0)
  }
  function percernt (){
    setNum(num/100)
  }
  function Calculate(){
switch (operator) {
  case "+":
    setNum(parseFloat(OldNum)+parseFloat(num))
    break;

    case "-":
      setNum(OldNum-num)
    break;
    case "/":
      setNum(OldNum/num)
    break;
    case "*":
      setNum(OldNum*num)
    break;
  default:
    break;
}
  }
  function operatorHandler(e){
    var operatorInput=e.target.innerText
    setOperator(operatorInput)
    setOldNum(num)
    setNum(0)
  }
  return (
    <div>
      <Box m={10}></Box>
      <Container maxWidth="xs">
        <div className="wrapper">
         <div className="result"><span className="resultSpan">{num}</span></div>
         <div className="container"> 
          <button onClick={clear}>AC</button>
          <button onClick={signal}>+/-</button>
          <button onClick={percernt}>%</button>
          <button className="operator" onClick={operatorHandler}>/</button>
          <button className="numbers" onClick={NumInput}>7</button>
          <button className="numbers" onClick={NumInput}>8</button>
          <button className="numbers" onClick={NumInput}>9</button>
          <button className="operator" onClick={operatorHandler}>X</button>
          <button className="numbers" onClick={NumInput}>4</button>
          <button className="numbers" onClick={NumInput}>5</button>
          <button className="numbers" onClick={NumInput}>6</button>
          <button className="operator" onClick={operatorHandler}>-</button>
          <button className="numbers" onClick={NumInput}>1</button>
          <button className="numbers" onClick={NumInput}>2</button>
          <button className="numbers" onClick={NumInput}>3</button>
          <button className="operator" onClick={operatorHandler}>+</button>
          <button className="numbers zero" onClick={NumInput}>0</button>
          <button className="numbers"onClick={NumInput}>.</button>
          <button className="operator" onClick={Calculate}>=</button>
       </div>
         
          </div>
      </Container>
    </div>
  );
}

export default Calulator;
