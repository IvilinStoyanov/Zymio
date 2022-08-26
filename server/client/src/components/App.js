import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const ServeyNew = () => <h2>HeaderServeyNew</h2>;
const Landing = () => <h2>HeaderLanding</h2>;

const App = () => {
    return (
        <div>
            Zymio
            <BrowserRouter>
                <div>
                    <Route path="/" component={Landing} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;