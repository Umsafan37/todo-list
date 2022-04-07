import React from "react";
import './Popup.css';

export const Popup = props => {
    const[val, setVal] = React.useState(props.edit.text);

    const handleChange = e => {
        setVal(e.target.value);
     }

     const handleSubmit = e => {
        e.preventDefault();
        props.update(val);
    }

    return (
        <div className= "outer">
            <center className="popup">
                <center>
                    <h3> Update the select task !</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={val} onChange={handleChange} />
                        <input type="submit" value="UPDATE" />
                    </form>
                </center>

            </center>
        </div>
    );
}
export default Popup;