import  React  from  'react';


const  DisplayEmployee = ({ employee }) => {
    return (

        <div  className="DisplayEmployee">
            <img  src={employee.image}  alt="picture"  />
            <ul>
                <li><h1>{employee.character}</h1></li>
                <li>{employee.quote}</li>

            </ul>
            
        </div>
    );
};



export  default  DisplayEmployee;