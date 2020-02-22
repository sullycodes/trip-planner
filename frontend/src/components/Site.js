import React from 'react';

const Site = (props) => {
    // console.log(props)
    return (
        <div> 
            <p></p>  
             <li>{props.name} <button onClick={() => props.deleteSite(props.id)}>DELETE</button></li>
             <p></p>  
        </div>
    )
}


export default Site