import React, { Component } from 'react';
import Directory from './DirectoryComponent'
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import CampsiteInfo from "./CampsiteInfoComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions
    };
}

const mapDispatchToProps = {
    addComment: (campsiteId, rating, author, text) => (addComment(campsiteId, rating, author, text))
};

class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <Home 
                    campsite={this.props.campsites.filter(campsite => campsite.featured)[0]}
                    promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.props.partners.filter(partner => partner.featured)[0]}
                />
            );
        }

        const CampsiteWithId = ({match}) => {
            return(
                <CampsiteInfo 
                    campsite={this.props.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]} // the `+` before `match` is a shortcut to convert string to number
                    comments={this.props.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)} 
                    addComment={this.props.addComment}
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path="/directory" render={() => <Directory campsites={this.props.campsites} /> } />
                    <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                    <Route exact path="/aboutus" render={() => <About partners={this.props.partners} />}/>
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
// NOTE: when using Route and need to pass along state data, use render().  Otherwise, use component=
// NOTE 2: the `:` symbol is very important in `/directory/:campsiteId`.  It tells router that anything after the : is a parameter and
//         puts the variable inside `campsiteId`. Then the router stores an object called `match` which has params.  The campsiteId
//         is one of the params of the match object.