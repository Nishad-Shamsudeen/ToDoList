import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [toDoInput,inputState]=useState('')
  const [toDo,toDoState]=useState([])
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDoInput} onChange={(e)=>inputState(e.target.value)} type= "text" placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick={()=>toDoState([...toDo,{id:Date.now(),text:toDoInput,status:false}])}></i>
      </div>
    
    { toDo.map((object,index)=>{

   return (
      <div className="todos" key={index}>
        <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(object)
              toDoState(toDo.filter(object2=> {
                if(object.id===object2.id)
                {
                  object2.status=e.target.checked
                }
                return object2
                  
              }))
            }} value={object.status}type="checkbox" name="" id="" />
            
           <p>{object.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>   )
   } ) }
   
    </div>
  );
}

export default App;