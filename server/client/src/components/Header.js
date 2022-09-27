import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    state = {
        isMenuVisible: false
    };

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
                    <li key="logout"><a href='/api/logout' className='black-text'>Logout</a></li>
                ];
        }
    }

    triggerMenu() {
        this.setState({ isMenuVisible: !this.state.isMenuVisible });
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <div>
                            <Link to={this.props.auth ? '/surveys' : '/'}
                                className="brand-logo left black-text" style={{ padding: '0 12px' }}
                            >Zymio</Link>
                        </div>
                        <a href="#" className='sidenav-trigger right' onClick={() => this.triggerMenu()}><i className='black-text material-icons'>menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            {this.renderContent()}
                        </ul>

                    </div>
                </nav>
                <ul className={this.state.isMenuVisible ? 'sidenav sidenav-open' : 'sidenav'}>
                    <div><i className='black-text material-icons hover right' onClick={() => this.triggerMenu()}>close</i></div>
                    <h5 style={{marginTop: 0}}>Zymio</h5>
                    {this.renderContent()}
                </ul>
            </div>
        );
    }
}

function mapStateToProbs({ auth }) {
    return { auth };
}

export default connect(mapStateToProbs)(Header);