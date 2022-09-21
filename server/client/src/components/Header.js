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
                    <li><a href="/auth/google" className='black-text'>Login with Google</a></li>
                );
            default:
                return [
                    <li key="payment"><Payments /></li>,
                    <li key="credits">Credits: {this.props.auth.credits}</li>,
                    <li key="logout" ><a href='/api/logout' className='black-text'>Logout</a></li>
                ];
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <div>
                        <Link to={this.props.auth ? '/surveys' : '/'}
                            className="brand-logo left black-text" style={{ padding: '0 12px' }}
                        >Zymio</Link>
                    </div>
                    <ul className="right">
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