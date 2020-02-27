import React from 'react';

const Site = (props) => {
    // console.log(props)
    return (
        <div className="site-card">
            <img className="site-card-image" src={props.image_url} alt="site" />
             <h4>{props.name}</h4>
             <p className="location">{props.location}</p>
             <p>{props.description}</p>
             <button onClick={() => props.deleteSite(props.id)}>DELETE</button>
        </div>
    )
}


export default Site