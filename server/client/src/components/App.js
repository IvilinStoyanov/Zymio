import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>HeaderServeyNew</h2>;
const Landing = () => <h2>HeaderLanding</h2>;

const App = () => {
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

export default App;