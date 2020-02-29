import React, { Component } from 'react';
import '../App.css';


class SiteEdit extends Component {

  
  componentDidUpdate(prevProps) {
      // because of a delay in delivering sites, the if condition only runs when this.props.sites comes through
    if (prevProps.sites.length != this.props.sites.length) {
        let site = this.getSite()
        this.setState({
            id: site.id,
            name: site.name,
            location: site.location,
            description: site.description,
            image_url: site.image_url,
            trip_id: site.trip_id
        })
    }
  }

    state = {
        id: '',
        name: '',
        location: '',
        description: '',
        image_url: '',
        trip_id: ''
    }

  getSite() {
        return this.props.sites.find(s => s.id == this.props.match.params.id)
      }
  
  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.editSite(this.state)
    this.setState({
        name: '',
        location: '',
        description: '',
        image_url: '',
        trip_id: ''
    })
    this.props.history.push(`/trips/${this.state.trip_id}`)
  }

  render() {
    return (
      <div className="site-edit">
        <h4>Edit This Site</h4>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <p>Site Name: <input type="text" name="name" value={this.state.name} onChange={(event) => this.handleOnChange(event)} /></p>
            <p>Location: <input type="text" name="location" value={this.state.location} onChange={(event) => this.handleOnChange(event)} /></p>
            <p>Description: </p><textarea rows="6" cols="80" name="description" value={this.state.description} onChange={(event) => this.handleOnChange(event)} />
            <p>Image Url: <input type="text" size="50" name="image_url" value={this.state.image_url} onChange={(event) => this.handleOnChange(event)} /></p> 
            <input type="submit" />
        </form>
      </div>    
    )
  }
}

export default SiteEdit
