import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [toDoInput,inputState]=useState('')
  const [toDo,toDoState]=useState([])
  const [date, setDate] = useState(new Date());
  const today=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]

  //var glob=false;
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Yeah !!! Its ...{today[date.getDay()]}🌝 ☕</h2>
        
      </div>
      <div className="input">
        <input value={toDoInput} onChange={(e)=>inputState(e.target.value)} type= "text" placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick={()=>toDoState([...toDo,{id:Date.now(),text:toDoInput,status:false}])}></i>
      </div>
    
    { 
    toDo.map((object,index)=>{
      {       

   return (
      <div className="todos" key={index}>
        <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              
              toDoState(toDo.filter((object2 => {
                if(object.id===object2.id)
                {
                  object2.status=e.target.checked
                  return true;
                 // console.log(object2)
                }
                return false;
                  
              })))
            }} value={object.status}type="checkbox" name="" id="" />
            
           <p>{object.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times" onClick={()=>{

              toDoState(toDo.filter(object3=>
              {
                if(object.id===object3.id)
                  {
                  return false;
                   
                  }
                  return true;
              }
              ))}}></i>
          </div>
        </div>
      </div>  
       )
    
      
    }
   } ) 
  
   } 

  {/*toDo.map((obj)=>{
  
  if(obj.status===true)
  {
    return(<h1>{obj.text}</h1>)}
   
    
 } )*/}
   
    </div>
  );
}

export default App;