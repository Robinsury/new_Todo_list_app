
import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addTodo,deleteTodd,removeTodd } from '../Action/index.js';
import "./todo.css";
function Todo() {
    const [inputData,setInputData]=useState('');
    const list=useSelector((state)=>state.todoReducer.list);
    const dispatch = useDispatch();
  return (
    <div>
     <div className='main-div'>
        <div className='child-div'>
          <figcaption> Add your list here

          </figcaption>
        
          <div className='additem'>
            <input type='text' placeholder='add item' 
             value={inputData} onChange={(event)=>setInputData(event.target.value)} />
             <i className="fa fa-plus plus" aria-hidden="true"  onClick={()=>
                 dispatch(addTodo(inputData))
                 }></i>
      
          </div> 
          <div className='showitem'>
          {list.map((elem)=>{
           return(
             <div className='eachitem' key={elem.id}>
               <h1>{elem.data}</h1>
              <div className='todo_btn'>
                <i className="fa fa-trash button" aria-hidden="true" title='delete item'
                onClick={()=>dispatch(deleteTodd(elem.id))}></i>
              </div>
            </div>
          )
        
           })}
          </div>
         <div className='showitems'>
           <button className='btn_effect' data-am-link-text="remove All" onClick={()=>dispatch(removeTodd())}><span>check List</span></button>
         </div>
       </div>
     </div>      
    </div>
  )
}

export default Todo;
