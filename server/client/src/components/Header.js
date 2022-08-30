import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Login with Google</a></li>
                );
            default:
                return [
                    <li key="payment"><Payments /></li>,
                    <li key="logout"><a href='/api/logout'>Logout</a></li>
                ];
        }
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <div>
                        <Link to={this.props.auth ? '/surveys' : '/'}
                            className="brand-logo"
                        >Zymio</Link>
                    </div>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProbs({ auth }) {
    return { auth };
}

export default connect(mapStateToProbs)(Header);