import React, { Component } from 'react';
import '../App.css';


class SiteInput extends Component {

  componentDidUpdate() {
    this.state = {
      ...this.state,
      trip_id: this.props.tripId
    }
  }

  state = {
    name: '',
    location: '',
    description: '',
    image_url: ''
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
      <div className="site-input">
        <h4>Add a New Site to Your Trip</h4>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <p>Site Name: <input type="text" name="name" value={this.state.name} onChange={(event) => this.handleOnChange(event)} /></p>
            <p>Location: <input type="text" name="location" value={this.state.location} onChange={(event) => this.handleOnChange(event)} /></p>
            <p>Description: </p><textarea rows="4" cols="50" name="description" value={this.state.description} onChange={(event) => this.handleOnChange(event)} />
            <p>Image Url: <input type="text" name="image_url" value={this.state.image_url} onChange={(event) => this.handleOnChange(event)} /></p>
            <input type="submit" />
        </form>
      </div>    
    )
  }
}

export default SiteInput
