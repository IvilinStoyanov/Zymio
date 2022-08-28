import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Header Servey New</h2>;
const Landing = () => <h2>Header Landing</h2>;

class App extends Component {
componentDidMount() {
    console.log("Did mount called");
    this.props.fetchUser();
}

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <div>
                        <Route path="/" exact component={Landing} />
                        <Route path="/surveys" exact component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    };
};

export default connect(null, actions)(App);