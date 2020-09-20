import React, { Component } from 'react';
import Directory from './DirectoryComponent'
import { CAMPSITES } from '../shared/campsites';
import CampsiteInfo from "./CampsiteInfoComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            selectedCampsite: null
        };
    }

    onCampsiteSelect(campsiteId) {
      // this.state.selectedCampsite = campsite; // NOTE: NEVER UPDATE STATE DIRECTLY EXCEPT IN CONSTRUCTOR
      this.setState({selectedCampsite: campsiteId});  // ALWAYS USE setState() TO MODIFY STATE PROPERTIES
    }

    render() {
        return (
            <div>

                <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)} />
                <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} />
                <Footer />
            </div>
        );
    }
}

export default Main;