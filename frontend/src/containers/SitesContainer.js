import  React, { Component } from 'react'
import SiteInput from '../components/SiteInput'
import { connect } from 'react-redux'
import { addSite } from '../actions/addSite'
// import { fetchSites } from '../actions/fetchSites'
import { deleteSite } from '../actions/deleteSite'
import Sites from '../components/Sites'

class SitesContainer extends Component {

    render() {
        return (
            <div>
                <SiteInput addSite={this.props.addSite} tripId={this.props.tripId}/>
                <Sites sites={this.props.sites} tripId={this.props.tripId} deleteSite={this.props.deleteSite}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        sites: state.sites
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addSite: site => dispatch(addSite(site)),
        deleteSite: id => dispatch(deleteSite(id))    
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SitesContainer)