import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {

  RenderCampsite(campsite) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardTitle>{campsite.name}</CardTitle>
          <CardText>{campsite.description}</CardText>
        </Card>
      </div>
    );
  }

  render() {
    if(this.props.campsite) { 
      return (
        <div className="row">
          {this.RenderCampsite(this.props.campsite)}
        </div>
      ); 
    }
    else { return <div />; }
  }
}

export default CampsiteInfo;