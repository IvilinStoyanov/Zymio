import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <div>
                        <a className="brand-logo">Zymio</a>
                    </div>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a>Login with Google</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;