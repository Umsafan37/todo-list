import React from 'react'
import Addtask from '../Addtask/Addtask';
import Todo from '../Todo/Todo';

const Todolist = () => {
    const [todos , setTodos]=React.useState([]);

    const Addtodo = todo  => {
        if(!todo.text)
        {
            return;
        }
        const newtodo=[...todos,todo];
       
        setTodos(newtodo);

    }
    const isComplete = index => {
        const updateList=[...todos];
         updateList[index].isComplete= !updateList
         [index].isComplete;
         console.log(updateList);
        setTodos(updateList);
    }    
        const removeValue = index =>
        {
         const filterarr =[...todos];
         filterarr.splice(index, 1);
         console.log(removeValue);
         setTodos(filterarr);
        }
        const edit = (index,newval) => {
            if(!newval) {
                return;
            }
            const updatelist=[...todos];
            updatelist[index].text = newval;
            setTodos(updatelist);
        }
    
    return (
        <div clsasName="Todo-List">
            <Addtask submit={Addtodo}/>
            <Todo todo={todos} 
            isComplete={isComplete}
            removeValue ={removeValue}
            edit={edit}/>
        </div>
    );
}
export default Todolist; 