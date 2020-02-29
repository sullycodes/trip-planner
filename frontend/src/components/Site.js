import React from 'react';
import { Route } from 'react-router-dom'
import SiteEdit from '../components/SiteEdit'

const Site = (props) => {

    const goToEditPage = () => {
        window.location.href = `/sites/${props.id}`;       
    }

    // const site = 

    return (
        <div className="site-card">
            <img className="site-card-image" src={props.image_url} alt="site" />
             <h4>{props.name}</h4>
             <p className="location">{props.location}</p>
             <p>{props.description}</p>
             <button onClick={() => goToEditPage()}>EDIT</button>
             <button onClick={() => props.deleteSite(props.id)}>DELETE</button>
        </div>
    )
}


export default Site