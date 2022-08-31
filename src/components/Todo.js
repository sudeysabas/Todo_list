import React from 'react';

function Todo({id,task,completed ,taskComplete, removeTask}) {
    function handleClick(){
        removeTask(id);
    }
    function handleCheckBox(){
    taskComplete(id);
    }
    const divStyle = {textAlign: "center" , display:"flex" ,alignItems:'center', 
    paddingLeft:'430px',margin:'25px', }
    const liStyle ={marginLeft:'40px',color:!completed?'green':'blue' ,textDecoration: !completed?'line-through':null,
    padding:'10px'}
    return (
        <div style = {divStyle}>
            <input style = {{marginLeft:'40px'}}type="checkbox" onClick={handleCheckBox}/>
            <li style = {liStyle}>{task}</li>
            <button style = {{marginLeft:'40px', color :'red'}} onClick={handleClick}>X</button>         
        </div>
    )
}

export default Todo
