import React, { Component } from 'react';

class CampsiteInfo extends Component {

  render() {
    if(this.props.campsite) { return <div className="row"></div>; }
    else { return <div />; }
  }
}

export default CampsiteInfo;