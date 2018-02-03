import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component{
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google">Login with Google</a>
                    </li>
                ); 
            default:
                return (
                    <li>
                        <a href="/api/logout">Logout</a>
                    </li>
                );

        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link 
                        to="/"
                        className="left brand-logo"
                    >
                        NLCF Admin
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function MapStateToProps( {auth} ) {
    return {auth};
}

export default connect(MapStateToProps)(Header);