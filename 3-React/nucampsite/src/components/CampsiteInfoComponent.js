import React, { Component } from 'react';
import { Card, CardImg, CardText, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';

function RenderCampsite({campsite}) {
  if(campsite) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardText>{campsite.description}</CardText>
        </Card>
      </div>
    );
  } else {
    return <div />;
  }
}

function RenderComments({comments}) {
  if(comments) { 
    return (
      <div className="col-md-5 m-1">
        <h4>Comments</h4>
        { 
          comments.map(comment => {
            return (
              <div>
                <p>{comment.text}</p>
                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
              </div>
            )
          })
        }
        <CommentForm />
      </div>
    ); 
  }
  else { return <div />; }
}

function CampsiteInfo(props) {
  if(props.campsite) { 
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
        <h2>{props.campsite.name}</h2>
        <hr />
        <div className="row">
          <RenderCampsite campsite={props.campsite} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    ); 
  }
  else { return <div />; }
}

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
  }

  render() {
    return (
      <React.Fragment>
        <Button outline onClick={this.toggleModal}>
          <i className="fa fa-pencil fa-lg"> Submit Comment </i>
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}> Submit Comment </ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={values => this.handleSubmit(values)}>
              <div className="form-group">
                <Label htmlFor="rating">Rating</Label>
                <Control.select model=".rating" id="rating" name="rating" placeholder="Rating" className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </div>
              <div className="form-group">
                <Label>Author</Label>
                <Control.text model=".author" id="author" name="author" placeholder="Author" className="form-control"/>
              </div>
              <div className="form-group">
                <Label>Text</Label>
                <Control.textarea model=".text" id="text" name="text" placeholder="Text" className="form-control"/>
              </div>
              <Button type="submit" id="submit" name="submit" color="primary">Submit</Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default CampsiteInfo;