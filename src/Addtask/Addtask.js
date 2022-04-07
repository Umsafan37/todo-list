import React from 'react';
import './Addtask.css'

const Addtask = props => {
    const [input , setInput]= React.useState('')
    const handleSubmit = e =>{
        e.preventDefault();
        props.submit({
            text : input,
            isComplete:false
        });
        setInput('');
    }

    const handleChange = e => {
        setInput(e.target.value);
    }
    return(
        
            <center>

                <div className = "Add-Task">
                <form onSubmit={handleSubmit}>
                    <input type='text'
                     placeholder='Add task eg:- conference meeting at 8am'
                     onChange={handleChange}
                     value={input}
                      />
                    <input type='submit' value='+' />
                </form>
                </div>
            </center>

     
    );
}
export default Addtask;