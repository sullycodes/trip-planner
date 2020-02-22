import React from 'react';

const Site = (props) => {
    // console.log(props)
    return (
        <div> 
            <p></p>  
             <li>{props.name} </li>
             <p></p>  

        </div>
    )
}

//<button onClick={() => props.deleteSite(props.id)}>DELETE</button>

export default Site