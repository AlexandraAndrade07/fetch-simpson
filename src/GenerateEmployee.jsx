import React from 'react';



const GenerateEmployee = ({ selectEmployee }) => {
    return (
        <div  className="GenerateEmployee">
        <button className = "btn btn-warning" onClick={selectEmployee}>Goo!!</button>
        </div>
    );
};


export default GenerateEmployee;
