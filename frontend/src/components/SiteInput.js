import React, { Component } from 'react';
import '../App.css';


class SiteInput extends Component {

  state = {
    name: '',
    location: '',
    description: '',
    image_url: '',
    trip_id: this.props.tripId
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addSite(this.state);
    this.setState({
        name: '',
        location: '',
        description: '',
        image_url: '',
        trip_id: this.props.tripId
    })
  }

  render() {
    return (
      <div className="sitecard">
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <p>Site Name: <input type="text" name="name" value={this.state.name} onChange={(event) => this.handleOnChange(event)} /></p>
            <p>Location: <input type="text" name="location" value={this.state.location} onChange={(event) => this.handleOnChange(event)} /></p>
            <p>Description: : </p><textarea rows="4" cols="50" name="description" value={this.state.description} onChange={(event) => this.handleOnChange(event)} />
            <p>Image Url: <input type="text" name="image_url" value={this.state.image_url} onChange={(event) => this.handleOnChange(event)} /></p>
            <input type="submit" />
        </form>
      </div>    
    )
  }
}

export default SiteInput
