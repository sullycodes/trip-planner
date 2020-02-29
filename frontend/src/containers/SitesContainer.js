import  React, { Component } from 'react'
import SiteInput from '../components/SiteInput'
import { connect } from 'react-redux'
import { addSite } from '../actions/addSite'
import { editSite } from '../actions/editSite'
import { fetchSites } from '../actions/fetchSites'
import { deleteSite } from '../actions/deleteSite'
import Sites from '../components/Sites'

class SitesContainer extends Component {

    componentDidMount() {
        this.props.fetchSites()
      }

    render() {
        const { tripId } = this.props
        return (
            <div className="sites-container">
                <Sites tripId={tripId} {...this.props} />
                <SiteInput addSite={this.props.addSite} tripId={tripId}/>
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
        editSite: editedSite => dispatch(editSite(editedSite)),
        deleteSite: id => dispatch(deleteSite(id)),
        fetchSites: () => dispatch(fetchSites())    
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SitesContainer)